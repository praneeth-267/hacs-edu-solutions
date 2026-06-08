import { prisma } from "../../db/prisma.js";
import type { Role } from "@prisma/client";

export const usersService = {
  async listUsers(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;

    const [total, users] = await Promise.all([
      prisma.user.count(),
      prisma.user.findMany({
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          email: true,
          role: true,
          isActive: true,
          createdAt: true
        }
      })
    ]);

    return { total, users, page, pageSize };
  },

  async updateRole(userId: string, role: Role) {
    return prisma.user.update({
      where: { id: userId },
      data: { role },
      select: { id: true, email: true, role: true, isActive: true }
    });
  },

  async setActive(userId: string, isActive: boolean) {
    return prisma.user.update({
      where: { id: userId },
      data: { isActive },
      select: { id: true, email: true, role: true, isActive: true }
    });
  },

  async updateProfile(
    userId: string,
    profile: {
      name: string;
      age: number;
      branch?: string;
      yearStudying?: string;
      contactInfo?: string;
      profileImageUrl?: string;
    }
  ) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        name: profile.name,
        age: profile.age,
        branch: profile.branch,
        yearStudying: profile.yearStudying,
        contactInfo: profile.contactInfo,
        profileImageUrl: profile.profileImageUrl,
        profileCompleted: true
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
        profileImageUrl: true
      }
    });
  }
};
