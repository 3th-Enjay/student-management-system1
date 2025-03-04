import { prisma } from "../lib/prisma"
import type { AttendanceDTO } from "../types"

export async function markAttendance(data: Omit<AttendanceDTO, "id">) {
  return await prisma.attendance.create({
    data,
    include: {
      student: true,
      course: true,
    },
  })
}

export async function getAttendanceByStudent(studentId: string) {
  return await prisma.attendance.findMany({
    where: {
      studentId,
    },
    include: {
      course: true,
    },
    orderBy: {
      date: "desc",
    },
  })
}

export async function getAttendanceByCourse(courseId: string, date: Date) {
  return await prisma.attendance.findMany({
    where: {
      courseId,
      date: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lt: new Date(date.setHours(23, 59, 59, 999)),
      },
    },
    include: {
      student: true,
    },
  })
}

export async function updateAttendance(id: string, status: AttendanceDTO["status"]) {
  return await prisma.attendance.update({
    where: { id },
    data: { status },
    include: {
      student: true,
      course: true,
    },
  })
}

