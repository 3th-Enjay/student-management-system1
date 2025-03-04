import { prisma } from "../lib/prisma"
import { hash } from "bcryptjs"
import type { UserDTO, ProfileDTO } from "../types"

export async function createUser(
  email: string,
  password: string,
  role: "STUDENT" | "TEACHER" | "ADMIN",
  profile: Omit<ProfileDTO, "id">,
) {
  const hashedPassword = await hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
      profile: {
        create: profile,
      },
    },
    include: {
      profile: true,
    },
  })

  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
      student: true,
      teacher: true,
      admin: true,
    },
  })

  if (!user) return null

  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function updateUser(id: string, data: Partial<UserDTO & ProfileDTO>) {
  const { profile, ...userData } = data

  const user = await prisma.user.update({
    where: { id },
    data: {
      ...userData,
      profile: profile
        ? {
            update: profile,
          }
        : undefined,
    },
    include: {
      profile: true,
    },
  })

  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: { id },
  })
}

