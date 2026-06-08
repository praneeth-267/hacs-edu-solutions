import { prisma } from "../../db/prisma.js";

export const academicYearsService = {
  async list() {
    return prisma.academicYear.findMany({
      orderBy: { startsAt: "desc" }
    });
  },

  async create(input: { name: string; startsAt: Date; endsAt: Date }) {
    return prisma.academicYear.create({
      data: {
        name: input.name,
        startsAt: input.startsAt,
        endsAt: input.endsAt
      }
    });
  },

  async activate(yearId: string) {
    return prisma.$transaction(async (tx) => {
      const active = await tx.academicYear.findFirst({
        where: { status: "ACTIVE" }
      });

      if (active && active.id !== yearId) {
        await tx.academicYear.update({
          where: { id: active.id },
          data: { status: "ARCHIVED", archivedAt: new Date() }
        });
      }

      return tx.academicYear.update({
        where: { id: yearId },
        data: { status: "ACTIVE", archivedAt: null }
      });
    });
  },

  async rollover(input: { name: string; startsAt: Date; endsAt: Date }) {
    return prisma.$transaction(async (tx) => {
      const active = await tx.academicYear.findFirst({
        where: { status: "ACTIVE" }
      });

      if (active) {
        await tx.academicYear.update({
          where: { id: active.id },
          data: { status: "ARCHIVED", archivedAt: new Date() }
        });
      }

      return tx.academicYear.create({
        data: {
          name: input.name,
          startsAt: input.startsAt,
          endsAt: input.endsAt,
          status: "ACTIVE"
        }
      });
    });
  }
};
