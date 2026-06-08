import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { gradesController } from "./grades.controller.js";
import { createGradeSchema, getStudentGradesSchema } from "./grades.schemas.js";

export const gradesRouter = Router();

gradesRouter.use(authMiddleware);

gradesRouter.post("/", requireRole("ADMIN", "TEACHER"), validate(createGradeSchema), gradesController.create);

gradesRouter.get("/student/:studentId", validate(getStudentGradesSchema), gradesController.getStudentGrades);
