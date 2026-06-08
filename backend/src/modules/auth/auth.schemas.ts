import { z } from "zod";

const strongPassword = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(128)
  .refine(
    (pwd) => /[A-Z]/.test(pwd),
    "Password must contain at least 1 uppercase letter"
  )
  .refine(
    (pwd) => /[0-9]/.test(pwd),
    "Password must contain at least 1 number"
  )
  .refine(
    (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    "Password must contain at least 1 special character (!@#$%^&*...)"
  );

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: strongPassword,
    role: z.enum(["ADMIN", "TEACHER", "STUDENT"]).default("STUDENT")
  })
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8).max(128)
  })
});

export const refreshSchema = z.object({
  body: z.object({}).optional()
});
