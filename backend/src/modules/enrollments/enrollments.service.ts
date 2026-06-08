import { prisma } from "../../db/prisma.js";

export const enrollmentsService = {
  async enroll(classId: string, studentId: string) {
    return prisma.enrollment.create({
      data: { classId, studentId }
    });
  },

  async getStudentEnrollments(studentId: string) {
    return prisma.enrollment.findMany({
      where: { studentId },
      include: {
        class: {
          include: {
            course: true,
            teacher: { select: { id: true, email: true } }
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });
  }
};
