import { prisma } from "@/lib/prisma"
import type { NotificationDTO } from "@/types"

export async function createNotification(data: Omit<NotificationDTO, "id" | "read">) {
  return await prisma.notification.create({
    data: {
      ...data,
      read: false,
    },
  })
}

export async function getNotificationsByUser(userId: string) {
  return await prisma.notification.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc",
    },
  })
}

export async function markNotificationAsRead(id: string) {
  return await prisma.notification.update({
    where: { id },
    data: { read: true },
  })
}

export async function deleteNotification(id: string) {
  await prisma.notification.delete({
    where: { id },
  })
}

export async function createBulkNotifications(
  userIds: string[],
  data: Omit<NotificationDTO, "id" | "read" | "userId">,
) {
  return await prisma.notification.createMany({
    data: userIds.map((userId) => ({
      ...data,
      userId,
      read: false,
    })),
  })
}

