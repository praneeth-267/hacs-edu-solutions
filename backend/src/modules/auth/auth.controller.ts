import type { Request, Response } from "express";
import { authService } from "./auth.service.js";
import { env } from "../../config/env.js";

const refreshCookieOptions = {
  httpOnly: true,
  secure: env.COOKIE_SECURE,
  sameSite: "strict" as const,
  path: `${env.API_PREFIX}/auth/refresh`
};

export const authController = {
  async register(req: Request, res: Response) {
    const { email, password, role } = req.body as {
      email: string;
      password: string;
      role: "ADMIN" | "TEACHER" | "STUDENT";
    };

    const result = await authService.register(email, password, role);

    res.cookie(env.REFRESH_COOKIE_NAME, result.refreshToken, refreshCookieOptions);
    res.status(201).json({
      user: result.user,
      accessToken: result.accessToken
    });
  },

  async login(req: Request, res: Response) {
    const { email, password } = req.body as { email: string; password: string };

    try {
      const result = await authService.login(email, password);
      if (!result) {
        return res.status(401).json({ error: { message: "Invalid email or password" } });
      }

      res.cookie(env.REFRESH_COOKIE_NAME, result.refreshToken, refreshCookieOptions);
      res.status(200).json({
        user: result.user,
        accessToken: result.accessToken
      });
    } catch (error) {
      console.error("[AUTH] Login error:", error);
      res.status(500).json({ error: { message: "Login failed" } });
    }
  },

  async refresh(req: Request, res: Response) {
    const refreshToken = req.cookies?.[env.REFRESH_COOKIE_NAME];
    if (!refreshToken) {
      return res.status(401).json({ error: { message: "Missing refresh token" } });
    }

    const result = await authService.refresh(refreshToken);
    if (!result) {
      return res.status(401).json({ error: { message: "Invalid refresh token" } });
    }

    res.cookie(env.REFRESH_COOKIE_NAME, result.refreshToken, refreshCookieOptions);
    res.status(200).json({
      user: result.user,
      accessToken: result.accessToken
    });
  },

  async logout(req: Request, res: Response) {
    const refreshToken = req.cookies?.[env.REFRESH_COOKIE_NAME];
    if (refreshToken) {
      await authService.logout(refreshToken);
    }

    res.clearCookie(env.REFRESH_COOKIE_NAME, refreshCookieOptions);
    res.status(204).send();
  }
};
