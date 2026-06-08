import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth.middleware.js";

export const requireRole = (...roles: Array<"ADMIN" | "TEACHER" | "STUDENT">) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: { message: "Forbidden" } });
    }
    next();
  };
};
