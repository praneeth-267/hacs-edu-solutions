import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { usersController } from "./users.controller.js";
import { listUsersSchema, setUserActiveSchema, updateUserRoleSchema, updateProfileSchema } from "./users.schemas.js";

export const usersRouter = Router();

// Profile update - any authenticated user
usersRouter.put("/profile", authMiddleware, validate(updateProfileSchema), usersController.updateProfile);

// Admin-only routes
usersRouter.use(authMiddleware, requireRole("ADMIN"));

usersRouter.get("/", validate(listUsersSchema), usersController.list);
usersRouter.patch("/:userId/role", validate(updateUserRoleSchema), usersController.updateRole);
usersRouter.patch("/:userId/active", validate(setUserActiveSchema), usersController.setActive);
