import type { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (typeof err === "object" && err && "code" in err && (err as { code?: string }).code === "EBADCSRFTOKEN") {
    return res.status(403).json({ error: { message: "Invalid CSRF token" } });
  }

  const status = 500;
  const message = "Unexpected error";

  res.status(status).json({
    error: {
      message
    }
  });
};
