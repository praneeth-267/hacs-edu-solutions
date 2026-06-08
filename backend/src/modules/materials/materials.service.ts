import { prisma } from "../../db/prisma.js";

export const materialsService = {
  async list(filters: { academicYearId?: string; courseId?: string; classId?: string }) {
    return prisma.material.findMany({
      where: {
        academicYearId: filters.academicYearId,
        courseId: filters.courseId,
        classId: filters.classId
      },
      include: {
        course: true,
        class: true
      },
      orderBy: { createdAt: "desc" }
    });
  },

  async create(input: {
    title: string;
    url: string;
    classId?: string;
    courseId?: string;
    academicYearId: string;
  }) {
    return prisma.material.create({
      data: input
    });
  }
};
