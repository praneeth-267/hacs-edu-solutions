import type { Request, Response } from "express";
import { usersService } from "./users.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const usersController = {
  async list(req: Request, res: Response) {
    const page = Number(req.query.page ?? 1);
    const pageSize = Number(req.query.pageSize ?? 20);

    const result = await usersService.listUsers(page, pageSize);
    res.json(result);
  },

  async updateRole(req: AuthRequest, res: Response) {
    const { userId } = req.params as { userId: string };
    const { role } = req.body as { role: "ADMIN" | "TEACHER" | "STUDENT" };

    const user = await usersService.updateRole(userId, role);

    await auditLog({
      actorId: req.user!.id,
      action: "user.role.update",
      resource: `user:${userId}`,
      details: `role=${role}`,
      ip: req.ip
    });

    res.json(user);
  },

  async setActive(req: AuthRequest, res: Response) {
    const { userId } = req.params as { userId: string };
    const { isActive } = req.body as { isActive: boolean };

    const user = await usersService.setActive(userId, isActive);

    await auditLog({
      actorId: req.user!.id,
      action: "user.active.update",
      resource: `user:${userId}`,
      details: `isActive=${isActive}`,
      ip: req.ip
    });

    res.json(user);
  },

  async updateProfile(req: AuthRequest, res: Response) {
    const { name, age, branch, yearStudying, contactInfo } = req.body as {
      name: string;
      age: number;
      branch?: string;
      yearStudying?: string;
      contactInfo?: string;
    };

    const user = await usersService.updateProfile(req.user!.id, {
      name,
      age,
      branch,
      yearStudying,
      contactInfo
    });

    res.json({ user });
  }
};
