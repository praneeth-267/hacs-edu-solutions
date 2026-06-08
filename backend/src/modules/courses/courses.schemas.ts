import { z } from "zod";

export const listCoursesSchema = z.object({
  query: z.object({
    academicYearId: z.string().uuid().optional()
  })
});

export const createCourseSchema = z.object({
  body: z.object({
    code: z.string().min(2).max(16),
    title: z.string().min(2).max(128),
    description: z.string().max(1000).optional(),
    academicYearId: z.string().uuid()
  })
});
