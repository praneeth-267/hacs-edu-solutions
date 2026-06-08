import { z } from "zod";

export const listClassesSchema = z.object({
  query: z.object({
    academicYearId: z.string().uuid().optional(),
    courseId: z.string().uuid().optional()
  })
});

export const createClassSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(64),
    courseId: z.string().uuid(),
    academicYearId: z.string().uuid(),
    teacherId: z.string().uuid()
  })
});
