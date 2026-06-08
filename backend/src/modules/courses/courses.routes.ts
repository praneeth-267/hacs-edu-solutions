import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { coursesController } from "./courses.controller.js";
import { createCourseSchema, listCoursesSchema } from "./courses.schemas.js";

export const coursesRouter = Router();

coursesRouter.use(authMiddleware);

coursesRouter.get("/", validate(listCoursesSchema), coursesController.list);

coursesRouter.post("/", requireRole("ADMIN"), validate(createCourseSchema), coursesController.create);
