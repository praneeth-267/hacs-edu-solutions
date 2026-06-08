import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { classesController } from "./classes.controller.js";
import { createClassSchema, listClassesSchema } from "./classes.schemas.js";

export const classesRouter = Router();

classesRouter.use(authMiddleware);

classesRouter.get("/", validate(listClassesSchema), classesController.list);

classesRouter.post("/", requireRole("ADMIN"), validate(createClassSchema), classesController.create);
