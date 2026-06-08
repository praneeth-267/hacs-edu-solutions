import { z } from "zod";

export const listUsersSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().min(1).default(1),
    pageSize: z.coerce.number().int().min(1).max(100).default(20)
  })
});

export const updateUserRoleSchema = z.object({
  params: z.object({
    userId: z.string().uuid()
  }),
  body: z.object({
    role: z.enum(["ADMIN", "TEACHER", "STUDENT"])
  })
});

export const setUserActiveSchema = z.object({
  params: z.object({
    userId: z.string().uuid()
  }),
  body: z.object({
    isActive: z.boolean()
  })
});

export const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").max(100),
    age: z.number().int().min(1).max(120),
    branch: z.string().max(100).optional(),
    yearStudying: z.string().max(50).optional(),
    contactInfo: z.string().max(100).optional(),
    profileImageUrl: z.string().url().optional().or(z.literal(""))
  })
});
