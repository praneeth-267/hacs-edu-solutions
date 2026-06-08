import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { materialsController } from "./materials.controller.js";
import { createMaterialSchema, listMaterialsSchema } from "./materials.schemas.js";

export const materialsRouter = Router();

materialsRouter.use(authMiddleware);

materialsRouter.get("/", validate(listMaterialsSchema), materialsController.list);

materialsRouter.post("/", requireRole("ADMIN", "TEACHER"), validate(createMaterialSchema), materialsController.create);
