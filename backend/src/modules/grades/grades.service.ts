import { prisma } from "../../db/prisma.js";

export const gradesService = {
  async create(input: {
    classId: string;
    studentId: string;
    academicYearId: string;
    score: number;
    remark?: string;
  }) {
    return prisma.grade.create({
      data: input
    });
  },

  async getStudentGrades(studentId: string, academicYearId?: string) {
    return prisma.grade.findMany({
      where: {
        studentId,
        academicYearId
      },
      include: {
        class: {
          include: {
            course: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });
  }
};
