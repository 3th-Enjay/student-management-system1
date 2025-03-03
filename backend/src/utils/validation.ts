import { z } from "zod"

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["STUDENT", "TEACHER", "ADMIN"]),
  profile: z.object({
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    avatar: z.string().optional(),
  }),
})

export const courseSchema = z.object({
  name: z.string(),
  code: z.string(),
  description: z.string(),
  teacherId: z.string(),
  grade: z.string(),
  section: z.string(),
  schedule: z.array(
    z.object({
      day: z.string(),
      startTime: z.string(),
      endTime: z.string(),
      room: z.string(),
    }),
  ),
})

export const materialSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.enum(["document", "video", "assignment"]),
  courseId: z.string(),
  teacherId: z.string(),
})

export const attendanceSchema = z.object({
  date: z.date(),
  status: z.enum(["PRESENT", "ABSENT", "LATE", "EXCUSED"]),
  studentId: z.string(),
  courseId: z.string(),
})

export const paymentSchema = z.object({
  amount: z.number().positive(),
  description: z.string(),
  status: z.enum(["PENDING", "PAID", "OVERDUE", "CANCELLED"]),
  dueDate: z.date(),
  studentId: z.string(),
})

export const eventSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  location: z.string(),
  attendees: z.number().int().positive(),
})

export const notificationSchema = z.object({
  title: z.string(),
  message: z.string(),
  type: z.string(),
  userId: z.string(),
})

