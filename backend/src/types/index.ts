export interface UserDTO {
  id: string
  email: string
  role: "STUDENT" | "TEACHER" | "ADMIN"
  profile?: ProfileDTO
}

export interface ProfileDTO {
  id: string
  firstName: string
  lastName: string
  phoneNumber?: string
  address?: string
  avatar?: string
}

export interface StudentDTO extends UserDTO {
  studentId: string
  grade: string
  section: string
  parentName: string
  parentEmail: string
  parentPhone: string
}

export interface TeacherDTO extends UserDTO {
  teacherId: string
  subject: string
  qualification: string
  experience: number
}

export interface CourseDTO {
  id: string
  name: string
  code: string
  description: string
  teacherId: string
  grade: string
  section: string
  schedule: {
    day: string
    startTime: string
    endTime: string
    room: string
  }[]
}

export interface MaterialDTO {
  id: string
  title: string
  description: string
  type: "document" | "video" | "assignment"
  fileUrl: string
  courseId: string
  teacherId: string
}

export interface AttendanceDTO {
  id: string
  date: Date
  status: "PRESENT" | "ABSENT" | "LATE" | "EXCUSED"
  studentId: string
  courseId: string
}

export interface PaymentDTO {
  id: string
  amount: number
  description: string
  status: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED"
  dueDate: Date
  paidAt?: Date
  studentId: string
}

export interface EventDTO {
  id: string
  title: string
  description: string
  date: Date
  location: string
  attendees: number
}

export interface NotificationDTO {
  id: string
  title: string
  message: string
  type: string
  read: boolean
  userId: string
}

