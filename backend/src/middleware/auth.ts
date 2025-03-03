import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { prisma } from "@/lib/prisma"

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: string
    email: string
    role: string
  }
}

export async function authMiddleware(req: AuthenticatedRequest, res: NextApiResponse, next: () => void) {
  try {
    const token = await getToken({ req })

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" })
    }

    const user = await prisma.user.findUnique({
      where: { email: token.email! },
      select: { id: true, email: true, role: true },
    })

    if (!user) {
      return res.status(401).json({ error: "User not found" })
    }

    req.user = user
    next()
  } catch (error) {
    console.error("Auth Middleware Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

export function requireRole(roles: string[]) {
  return (req: AuthenticatedRequest, res: NextApiResponse, next: () => void) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden" })
    }
    next()
  }
}

