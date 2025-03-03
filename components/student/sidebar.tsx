"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, User, BookOpen, Calendar, CreditCard, FileText, MessageSquare, Settings } from "lucide-react"

interface StudentSidebarProps {
  isOpen: boolean
}

export default function StudentSidebar({ isOpen }: StudentSidebarProps) {
  const sidebarItems = [
    { icon: <Home className="mr-2 h-4 w-4" />, label: "Dashboard", href: "/student/dashboard" },
    { icon: <User className="mr-2 h-4 w-4" />, label: "Profile", href: "/student/profile" },
    { icon: <BookOpen className="mr-2 h-4 w-4" />, label: "Courses", href: "/student/courses" },
    { icon: <Calendar className="mr-2 h-4 w-4" />, label: "Timetable", href: "/student/timetable" },
    { icon: <CreditCard className="mr-2 h-4 w-4" />, label: "Payments", href: "/student/payments" },
    { icon: <FileText className="mr-2 h-4 w-4" />, label: "Assignments", href: "/student/assignments" },
    { icon: <MessageSquare className="mr-2 h-4 w-4" />, label: "Messages", href: "/student/messages" },
    { icon: <Settings className="mr-2 h-4 w-4" />, label: "Settings", href: "/student/settings" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.aside
      className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r shadow-sm"
      initial={{ x: 0 }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary text-primary-foreground p-1 rounded-md">
            <span className="font-bold text-xl">EduHub</span>
          </div>
        </Link>
      </div>

      <div className="py-4">
        <motion.div className="space-y-1 px-3" variants={container} initial="hidden" animate="show">
          {sidebarItems.map((item, index) => (
            <motion.div key={index} variants={item}>
              <Link href={item.href}>
                <Button
                  variant={item.href === "/student/profile" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.aside>
  )
}

