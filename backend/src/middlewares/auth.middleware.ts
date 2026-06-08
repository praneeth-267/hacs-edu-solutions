import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface AuthRequest extends Request {
  user?: { id: string; role: "ADMIN" | "TEACHER" | "STUDENT" };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: { message: "Missing token" } });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, env.JWT_ACCESS_SECRET) as jwt.JwtPayload;
    req.user = { id: payload.sub as string, role: payload.role as "ADMIN" | "TEACHER" | "STUDENT" };
    next();
  } catch {
    return res.status(401).json({ error: { message: "Invalid token" } });
  }
};
