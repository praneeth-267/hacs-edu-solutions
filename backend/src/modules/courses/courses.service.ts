import { prisma } from "../../db/prisma.js";

export const coursesService = {
  async list(academicYearId?: string) {
    return prisma.course.findMany({
      where: academicYearId ? { academicYearId } : undefined,
      orderBy: { createdAt: "desc" }
    });
  },

  async create(input: { code: string; title: string; description?: string; academicYearId: string }) {
    return prisma.course.create({
      data: input
    });
  }
};
