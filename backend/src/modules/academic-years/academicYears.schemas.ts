import { z } from "zod";

export const listAcademicYearsSchema = z.object({});

export const createAcademicYearSchema = z.object({
  body: z.object({
    name: z.string().min(4).max(32),
    startsAt: z.string().datetime(),
    endsAt: z.string().datetime()
  })
});

export const activateAcademicYearSchema = z.object({
  params: z.object({
    yearId: z.string().uuid()
  })
});

export const rolloverAcademicYearSchema = z.object({
  body: z.object({
    name: z.string().min(4).max(32),
    startsAt: z.string().datetime(),
    endsAt: z.string().datetime()
  })
});
