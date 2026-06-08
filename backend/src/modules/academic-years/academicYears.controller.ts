import type { Request, Response } from "express";
import { academicYearsService } from "./academicYears.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const academicYearsController = {
  async list(_req: Request, res: Response) {
    const years = await academicYearsService.list();
    res.json(years);
  },

  async create(req: AuthRequest, res: Response) {
    const { name, startsAt, endsAt } = req.body as {
      name: string;
      startsAt: string;
      endsAt: string;
    };

    const year = await academicYearsService.create({
      name,
      startsAt: new Date(startsAt),
      endsAt: new Date(endsAt)
    });

    await auditLog({
      actorId: req.user!.id,
      action: "academicYear.create",
      resource: `academicYear:${year.id}`,
      details: `name=${name}`,
      ip: req.ip
    });

    res.status(201).json(year);
  },

  async activate(req: AuthRequest, res: Response) {
    const { yearId } = req.params as { yearId: string };

    const year = await academicYearsService.activate(yearId);

    await auditLog({
      actorId: req.user!.id,
      action: "academicYear.activate",
      resource: `academicYear:${yearId}`,
      ip: req.ip
    });

    res.json(year);
  },

  async rollover(req: AuthRequest, res: Response) {
    const { name, startsAt, endsAt } = req.body as {
      name: string;
      startsAt: string;
      endsAt: string;
    };

    const year = await academicYearsService.rollover({
      name,
      startsAt: new Date(startsAt),
      endsAt: new Date(endsAt)
    });

    await auditLog({
      actorId: req.user!.id,
      action: "academicYear.rollover",
      resource: `academicYear:${year.id}`,
      details: `name=${name}`,
      ip: req.ip
    });

    res.status(201).json(year);
  }
};
