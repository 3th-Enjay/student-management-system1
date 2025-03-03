"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Users, School, BookOpen, Calendar, CreditCard, Settings, Bell, FileText } from "lucide-react"

interface AdminSidebarProps {
  isOpen: boolean
}

export default function AdminSidebar({ isOpen }: AdminSidebarProps) {
  const sidebarItems = [
    { icon: <Home className="mr-2 h-4 w-4" />, label: "Dashboard", href: "/admin/dashboard" },
    { icon: <Users className="mr-2 h-4 w-4" />, label: "Students", href: "/admin/students" },
    { icon: <School className="mr-2 h-4 w-4" />, label: "Teachers", href: "/admin/teachers" },
    { icon: <BookOpen className="mr-2 h-4 w-4" />, label: "Classes", href: "/admin/classes" },
    { icon: <Calendar className="mr-2 h-4 w-4" />, label: "Events", href: "/admin/events" },
    { icon: <CreditCard className="mr-2 h-4 w-4" />, label: "Payments", href: "/admin/payments" },
    { icon: <FileText className="mr-2 h-4 w-4" />, label: "Reports", href: "/admin/reports" },
    { icon: <Bell className="mr-2 h-4 w-4" />, label: "Notifications", href: "/admin/notifications" },
    { icon: <Settings className="mr-2 h-4 w-4" />, label: "Settings", href: "/admin/settings" },
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
                  variant={item.href === "/admin/dashboard" ? "secondary" : "ghost"}
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

