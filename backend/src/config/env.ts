import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  CORS_ORIGIN: z.string().min(1).default("http://localhost:5173"),
  COOKIE_SECURE: z.coerce.boolean().default(false),
  CSRF_SECRET: z.string().min(32).default("change-me-in-env"),
  API_PREFIX: z.string().min(1).default("/api"),
  MAIL_HOST: z.string().min(1).default("smtp.example.com"),
  MAIL_PORT: z.coerce.number().int().min(1).default(587),
  MAIL_USER: z.string().default(""),
  MAIL_PASS: z.string().default("")
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse(process.env);
