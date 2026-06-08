import { z } from "zod";

export const enrollStudentSchema = z.object({
  body: z.object({
    classId: z.string().uuid(),
    studentId: z.string().uuid()
  })
});

export const getStudentEnrollmentsSchema = z.object({
  params: z.object({
    studentId: z.string().uuid()
  })
});
