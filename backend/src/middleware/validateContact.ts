import type { Request, Response, NextFunction } from "express";

export function validateContact(req: Request, res: Response, next: NextFunction) {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Please provide name, email, subject, and message." });
  }

  next();
}
