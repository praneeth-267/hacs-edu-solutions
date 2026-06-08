import type { Request, Response } from "express";
import { announcementsService } from "./announcements.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const announcementsController = {
  async list(req: Request, res: Response) {
    const academicYearId = req.query.academicYearId as string | undefined;
    const courseId = req.query.courseId as string | undefined;

    const announcements = await announcementsService.list({ academicYearId, courseId });
    res.json(announcements);
  },

  async create(req: AuthRequest, res: Response) {
    const { title, body, courseId, academicYearId } = req.body as {
      title: string;
      body: string;
      courseId?: string;
      academicYearId: string;
    };

    const announcement = await announcementsService.create({ title, body, courseId, academicYearId });

    await auditLog({
      actorId: req.user!.id,
      action: "announcement.create",
      resource: `announcement:${announcement.id}`,
      details: `title=${title}`,
      ip: req.ip
    });

    res.status(201).json(announcement);
  }
};
