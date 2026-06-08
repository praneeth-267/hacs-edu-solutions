import type { Response } from "express";
import { enrollmentsService } from "./enrollments.service.js";
import { auditLog } from "../../utils/audit.js";
import type { AuthRequest } from "../../middlewares/auth.middleware.js";

export const enrollmentsController = {
  async enroll(req: AuthRequest, res: Response) {
    const { classId, studentId } = req.body as { classId: string; studentId: string };

    const enrollment = await enrollmentsService.enroll(classId, studentId);

    await auditLog({
      actorId: req.user!.id,
      action: "enrollment.create",
      resource: `enrollment:${enrollment.id}`,
      details: `classId=${classId},studentId=${studentId}`,
      ip: req.ip
    });

    res.status(201).json(enrollment);
  },

  async getStudentEnrollments(req: AuthRequest, res: Response) {
    const { studentId } = req.params as { studentId: string };

    if (req.user!.role === "STUDENT" && req.user!.id !== studentId) {
      return res.status(403).json({ error: { message: "Forbidden" } });
    }

    const enrollments = await enrollmentsService.getStudentEnrollments(studentId);
    res.json(enrollments);
  }
};
