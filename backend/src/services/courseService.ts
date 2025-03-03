import { prisma } from "@/lib/prisma"
import type { CourseDTO } from "@/types"

export async function createCourse(data: Omit<CourseDTO, "id">) {
  return await prisma.course.create({
    data,
    include: {
      teacher: true,
    },
  })
}

export async function getCourseById(id: string) {
  return await prisma.course.findUnique({
    where: { id },
    include: {
      teacher: true,
      enrollments: {
        include: {
          student: true,
        },
      },
      materials: true,
    },
  })
}

export async function updateCourse(id: string, data: Partial<CourseDTO>) {
  return await prisma.course.update({
    where: { id },
    data,
    include: {
      teacher: true,
    },
  })
}

export async function deleteCourse(id: string) {
  await prisma.course.delete({
    where: { id },
  })
}

export async function enrollStudent(courseId: string, studentId: string) {
  return await prisma.enrollment.create({
    data: {
      courseId,
      studentId,
      status: "ENROLLED",
    },
    include: {
      course: true,
      student: true,
    },
  })
}

export async function getCoursesByTeacher(teacherId: string) {
  return await prisma.course.findMany({
    where: {
      teacherId,
    },
    include: {
      enrollments: {
        include: {
          student: true,
        },
      },
      materials: true,
    },
  })
}

export async function getCoursesByStudent(studentId: string) {
  return await prisma.enrollment.findMany({
    where: {
      studentId,
    },
    include: {
      course: {
        include: {
          teacher: true,
          materials: true,
        },
      },
    },
  })
}

