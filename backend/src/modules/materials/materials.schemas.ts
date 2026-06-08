import { z } from "zod";

export const listMaterialsSchema = z.object({
  query: z.object({
    academicYearId: z.string().uuid().optional(),
    courseId: z.string().uuid().optional(),
    classId: z.string().uuid().optional()
  })
});

export const createMaterialSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(128),
    url: z.string().url().max(2048),
    classId: z.string().uuid().optional(),
    courseId: z.string().uuid().optional(),
    academicYearId: z.string().uuid()
  })
});
