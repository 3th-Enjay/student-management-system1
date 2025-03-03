import { prisma } from "@/lib/prisma"
import type { MaterialDTO } from "@/types"
import { uploadFile, deleteFile } from "@/lib/storage"

export async function createMaterial(data: Omit<MaterialDTO, "id" | "fileUrl">, file: Buffer, contentType: string) {
  const key = `materials/${data.courseId}/${Date.now()}-${Math.random().toString(36).substring(7)}`
  const fileUrl = await uploadFile(file, key, contentType)

  return await prisma.material.create({
    data: {
      ...data,
      fileUrl,
    },
    include: {
      course: true,
      teacher: true,
    },
  })
}

export async function getMaterialById(id: string) {
  return await prisma.material.findUnique({
    where: { id },
    include: {
      course: true,
      teacher: true,
    },
  })
}

export async function getMaterialsByCourse(courseId: string) {
  return await prisma.material.findMany({
    where: { courseId },
    include: {
      teacher: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}

export async function deleteMaterial(id: string) {
  const material = await prisma.material.findUnique({
    where: { id },
  })

  if (material) {
    const key = material.fileUrl.split("/").slice(-2).join("/")
    await deleteFile(key)
    await prisma.material.delete({
      where: { id },
    })
  }
}

