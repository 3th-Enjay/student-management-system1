import { prisma } from "@/lib/prisma"
import type { PaymentDTO } from "@/types"

export async function createPayment(data: Omit<PaymentDTO, "id">) {
  return await prisma.payment.create({
    data,
    include: {
      student: true,
    },
  })
}

export async function getPaymentById(id: string) {
  return await prisma.payment.findUnique({
    where: { id },
    include: {
      student: true,
    },
  })
}

export async function getPaymentsByStudent(studentId: string) {
  return await prisma.payment.findMany({
    where: { studentId },
    orderBy: {
      dueDate: "desc",
    },
  })
}

export async function updatePaymentStatus(id: string, status: PaymentDTO["status"], paidAt?: Date) {
  return await prisma.payment.update({
    where: { id },
    data: {
      status,
      paidAt: status === "PAID" ? paidAt || new Date() : null,
    },
    include: {
      student: true,
    },
  })
}

export async function getOverduePayments() {
  return await prisma.payment.findMany({
    where: {
      status: "PENDING",
      dueDate: {
        lt: new Date(),
      },
    },
    include: {
      student: true,
    },
  })
}

