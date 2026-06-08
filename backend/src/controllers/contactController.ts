import type { Request, Response } from "express";

export function sendContactEmail(req: Request, res: Response) {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required contact fields." });
  }

  return res.status(200).json({ message: "Contact request received." });
}
