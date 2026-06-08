import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { prisma } from "../../db/prisma.js";
import { env } from "../../config/env.js";

const ACCESS_TOKEN_TTL = env.ACCESS_TOKEN_TTL;
const REFRESH_TOKEN_TTL = env.REFRESH_TOKEN_TTL;

const signAccessToken = (userId: string, role: string) => {
  return jwt.sign({ sub: userId, role }, env.JWT_ACCESS_SECRET, {
    expiresIn: ACCESS_TOKEN_TTL
  });
};

const signRefreshToken = (userId: string) => {
  return jwt.sign({ sub: userId, type: "refresh" }, env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_TTL
  });
};

const hashToken = (token: string) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};

export const authService = {
  async register(email: string, password: string, role: "ADMIN" | "TEACHER" | "STUDENT") {
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role
      },
      select: {
        id: true,
        email: true,
        role: true,
        profileCompleted: true,
        name: true,
        age: true,
        branch: true,
        yearStudying: true,
        contactInfo: true,
        profileImageUrl: true,
        isActive: true
      }
    });

    const accessToken = signAccessToken(user.id, user.role);
    const refreshToken = signRefreshToken(user.id);

    await prisma.refreshToken.create({
      data: {
        tokenHash: hashToken(refreshToken),
        userId: user.id,
        expiresAt: new Date(Date.now() + msFromTTL(REFRESH_TOKEN_TTL))
      }
    });

    return { user, accessToken, refreshToken };
  },

  async login(email: string, password: string) {
    console.log(`[AUTH] Login attempt for email: ${email}`);
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        role: true,
        passwordHash: true,
        isActive: true,
        profileCompleted: true,
        name: true,
        age: true,
        branch: true,
        yearStudying: true,
        contactInfo: true,
        profileImageUrl: true
      }
    });
    if (!user) {
      console.log(`[AUTH] User not found: ${email}`);
      return null;
    }
    if (!user.isActive) {
      console.log(`[AUTH] User inactive: ${email}`);
      return null;
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    console.log(`[AUTH] Password validation for ${email}: ${isValid}`);
    if (!isValid) {
      return null;
    }

    // Remove passwordHash before returning
    const { passwordHash, ...userWithoutPassword } = user;

    const accessToken = signAccessToken(user.id, user.role);
    const refreshToken = signRefreshToken(user.id);

    await prisma.refreshToken.create({
      data: {
        tokenHash: hashToken(refreshToken),
        userId: user.id,
        expiresAt: new Date(Date.now() + msFromTTL(REFRESH_TOKEN_TTL))
      }
    });

    return { user: userWithoutPassword, accessToken, refreshToken };
  },

  async refresh(refreshToken: string) {
    try {
      const payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as jwt.JwtPayload;
      if (payload.type !== "refresh" || !payload.sub) {
        return null;
      }

      const tokenHash = hashToken(refreshToken);
      const stored = await prisma.refreshToken.findUnique({ where: { tokenHash } });
      if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
        return null;
      }

      const user = await prisma.user.findUnique({
        where: { id: payload.sub as string },
        select: {
          id: true,
          email: true,
          role: true,
          isActive: true,
          profileCompleted: true,
          name: true,
          age: true,
          branch: true,
          yearStudying: true,
          contactInfo: true,
          profileImageUrl: true
        }
      });
      if (!user || !user.isActive) {
        return null;
      }

      const newAccessToken = signAccessToken(user.id, user.role);
      const newRefreshToken = signRefreshToken(user.id);

      await prisma.refreshToken.update({
        where: { tokenHash },
        data: { revokedAt: new Date() }
      });

      await prisma.refreshToken.create({
        data: {
          tokenHash: hashToken(newRefreshToken),
          userId: user.id,
          expiresAt: new Date(Date.now() + msFromTTL(REFRESH_TOKEN_TTL))
        }
      });

      return { user, accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch {
      return null;
    }
  },

  async logout(refreshToken: string) {
    const tokenHash = hashToken(refreshToken);
    await prisma.refreshToken.updateMany({
      where: { tokenHash, revokedAt: null },
      data: { revokedAt: new Date() }
    });
  }
};

const msFromTTL = (ttl: string) => {
  if (ttl.endsWith("d")) return parseInt(ttl) * 24 * 60 * 60 * 1000;
  if (ttl.endsWith("h")) return parseInt(ttl) * 60 * 60 * 1000;
  if (ttl.endsWith("m")) return parseInt(ttl) * 60 * 1000;
  return parseInt(ttl) * 1000;
};
