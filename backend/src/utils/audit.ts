import { prisma } from "../db/prisma.js";

export const auditLog = async (input: {
  actorId: string;
  action: string;
  resource: string;
  details?: string;
  ip?: string;
}) => {
  await prisma.auditLog.create({
    data: {
      actorId: input.actorId,
      action: input.action,
      resource: input.resource,
      details: input.details,
      ip: input.ip
    }
  });
};
