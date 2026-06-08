import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import contactRouter from "./routes/contact.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const createApp = () => {
  const app = express();

  app.disable("x-powered-by");

  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true
    })
  );
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(env.CSRF_SECRET));

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use(`${env.API_PREFIX}`, contactRouter);
  app.use(errorHandler);

  return app;
};
