import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/rbac.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { announcementsController } from "./announcements.controller.js";
import { createAnnouncementSchema, listAnnouncementsSchema } from "./announcements.schemas.js";

export const announcementsRouter = Router();

announcementsRouter.use(authMiddleware);

announcementsRouter.get("/", validate(listAnnouncementsSchema), announcementsController.list);

announcementsRouter.post("/", requireRole("ADMIN", "TEACHER"), validate(createAnnouncementSchema), announcementsController.create);
