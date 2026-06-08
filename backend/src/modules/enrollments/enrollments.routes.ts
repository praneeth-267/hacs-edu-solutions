import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { enrollmentsController } from "./enrollments.controller.js";
import { enrollStudentSchema, getStudentEnrollmentsSchema } from "./enrollments.schemas.js";

export const enrollmentsRouter = Router();

enrollmentsRouter.use(authMiddleware);

enrollmentsRouter.post("/", requireRole("ADMIN"), validate(enrollStudentSchema), enrollmentsController.enroll);

enrollmentsRouter.get("/student/:studentId", validate(getStudentEnrollmentsSchema), enrollmentsController.getStudentEnrollments);
