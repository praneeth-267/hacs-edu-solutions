import { z } from "zod";

export const createGradeSchema = z.object({
  body: z.object({
    classId: z.string().uuid(),
    studentId: z.string().uuid(),
    academicYearId: z.string().uuid(),
    score: z.number().min(0).max(100),
    remark: z.string().max(500).optional()
  })
});

export const getStudentGradesSchema = z.object({
  params: z.object({
    studentId: z.string().uuid()
  }),
  query: z.object({
    academicYearId: z.string().uuid().optional()
  })
});
