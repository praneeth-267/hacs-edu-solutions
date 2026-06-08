import { prisma } from "../../db/prisma.js";

export const classesService = {
  async list(filters: { academicYearId?: string; courseId?: string }) {
    return prisma.class.findMany({
      where: {
        academicYearId: filters.academicYearId,
        courseId: filters.courseId
      },
      include: {
        course: true,
        teacher: { select: { id: true, email: true } }
      },
      orderBy: { createdAt: "desc" }
    });
  },

  async create(input: { name: string; courseId: string; academicYearId: string; teacherId: string }) {
    return prisma.class.create({
      data: input
    });
  }
};
