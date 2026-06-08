import { z } from "zod";

export const listAnnouncementsSchema = z.object({
  query: z.object({
    academicYearId: z.string().uuid().optional(),
    courseId: z.string().uuid().optional()
  })
});

export const createAnnouncementSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(128),
    body: z.string().min(1).max(5000),
    courseId: z.string().uuid().optional(),
    academicYearId: z.string().uuid()
  })
});
