import type { Request, Response } from "express";
import { materialsService } from "./materials.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const materialsController = {
  async list(req: Request, res: Response) {
    const academicYearId = req.query.academicYearId as string | undefined;
    const courseId = req.query.courseId as string | undefined;
    const classId = req.query.classId as string | undefined;

    const materials = await materialsService.list({ academicYearId, courseId, classId });
    res.json(materials);
  },

  async create(req: AuthRequest, res: Response) {
    const { title, url, classId, courseId, academicYearId } = req.body as {
      title: string;
      url: string;
      classId?: string;
      courseId?: string;
      academicYearId: string;
    };

    const material = await materialsService.create({ title, url, classId, courseId, academicYearId });

    await auditLog({
      actorId: req.user!.id,
      action: "material.create",
      resource: `material:${material.id}`,
      details: `title=${title}`,
      ip: req.ip
    });

    res.status(201).json(material);
  }
};
