import { prisma } from "../../db/prisma.js";

export const announcementsService = {
  async list(filters: { academicYearId?: string; courseId?: string }) {
    return prisma.announcement.findMany({
      where: {
        academicYearId: filters.academicYearId,
        courseId: filters.courseId
      },
      include: {
        course: true
      },
      orderBy: { createdAt: "desc" }
    });
  },

  async create(input: { title: string; body: string; courseId?: string; academicYearId: string }) {
    return prisma.announcement.create({
      data: input
    });
  }
};
