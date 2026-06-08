import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { academicYearsController } from "./academicYears.controller.js";
import {
  activateAcademicYearSchema,
  createAcademicYearSchema,
  listAcademicYearsSchema,
  rolloverAcademicYearSchema
} from "./academicYears.schemas.js";

export const academicYearsRouter = Router();

academicYearsRouter.use(authMiddleware, requireRole("ADMIN"));

academicYearsRouter.get("/", validate(listAcademicYearsSchema), academicYearsController.list);
academicYearsRouter.post("/", validate(createAcademicYearSchema), academicYearsController.create);
academicYearsRouter.post("/:yearId/activate", validate(activateAcademicYearSchema), academicYearsController.activate);
academicYearsRouter.post("/rollover", validate(rolloverAcademicYearSchema), academicYearsController.rollover);
