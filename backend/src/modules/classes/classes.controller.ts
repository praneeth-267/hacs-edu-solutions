import type { Request, Response } from "express";
import { classesService } from "./classes.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const classesController = {
  async list(req: Request, res: Response) {
    const academicYearId = req.query.academicYearId as string | undefined;
    const courseId = req.query.courseId as string | undefined;

    const classes = await classesService.list({ academicYearId, courseId });
    res.json(classes);
  },

  async create(req: AuthRequest, res: Response) {
    const { name, courseId, academicYearId, teacherId } = req.body as {
      name: string;
      courseId: string;
      academicYearId: string;
      teacherId: string;
    };

    const klass = await classesService.create({ name, courseId, academicYearId, teacherId });

    await auditLog({
      actorId: req.user!.id,
      action: "class.create",
      resource: `class:${klass.id}`,
      details: `name=${name}`,
      ip: req.ip
    });

    res.status(201).json(klass);
  }
};
