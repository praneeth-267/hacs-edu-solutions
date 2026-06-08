import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { authController } from "./auth.controller.js";
import { loginSchema, registerSchema, refreshSchema } from "./auth.schemas.js";

export const authRouter = Router();

authRouter.post("/register", validate(registerSchema), authController.register);
authRouter.post("/login", validate(loginSchema), authController.login);
authRouter.post("/refresh", validate(refreshSchema), authController.refresh);
authRouter.post("/logout", authController.logout);
