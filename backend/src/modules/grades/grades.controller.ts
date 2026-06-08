import type { Response } from "express";
import { gradesService } from "./grades.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const gradesController = {
  async create(req: AuthRequest, res: Response) {
    const { classId, studentId, academicYearId, score, remark } = req.body as {
      classId: string;
      studentId: string;
      academicYearId: string;
      score: number;
      remark?: string;
    };

    const grade = await gradesService.create({ classId, studentId, academicYearId, score, remark });

    await auditLog({
      actorId: req.user!.id,
      action: "grade.create",
      resource: `grade:${grade.id}`,
      details: `studentId=${studentId},score=${score}`,
      ip: req.ip
    });

    res.status(201).json(grade);
  },

  async getStudentGrades(req: AuthRequest, res: Response) {
    const { studentId } = req.params as { studentId: string };
    const academicYearId = req.query.academicYearId as string | undefined;

    if (req.user!.role === "STUDENT" && req.user!.id !== studentId) {
      return res.status(403).json({ error: { message: "Forbidden" } });
    }

    const grades = await gradesService.getStudentGrades(studentId, academicYearId);
    res.json(grades);
  }
};
