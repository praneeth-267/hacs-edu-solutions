import type { Request, Response } from "express";
import { coursesService } from "./courses.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const coursesController = {
  async list(req: Request, res: Response) {
    const academicYearId = req.query.academicYearId as string | undefined;
    const courses = await coursesService.list(academicYearId);
    res.json(courses);
  },

  async create(req: AuthRequest, res: Response) {
    const { code, title, description, academicYearId } = req.body as {
      code: string;
      title: string;
      description?: string;
      academicYearId: string;
    };

    const course = await coursesService.create({ code, title, description, academicYearId });

    await auditLog({
      actorId: req.user!.id,
      action: "course.create",
      resource: `course:${course.id}`,
      details: `code=${code}`,
      ip: req.ip
    });

    res.status(201).json(course);
  }
};
