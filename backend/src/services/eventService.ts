import { prisma } from "@/lib/prisma"
import type { EventDTO } from "@/types"

export async function createEvent(data: Omit<EventDTO, "id">) {
  return await prisma.event.create({
    data,
  })
}

export async function getEventById(id: string) {
  return await prisma.event.findUnique({
    where: { id },
  })
}

export async function getUpcomingEvents() {
  return await prisma.event.findMany({
    where: {
      date: {
        gte: new Date(),
      },
    },
    orderBy: {
      date: "asc",
    },
  })
}

export async function updateEvent(id: string, data: Partial<EventDTO>) {
  return await prisma.event.update({
    where: { id },
    data,
  })
}

export async function deleteEvent(id: string) {
  await prisma.event.delete({
    where: { id },
  })
}

