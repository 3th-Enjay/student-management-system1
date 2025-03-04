"use client"

import { motion } from "framer-motion"
import { Bell, Mail, Calendar, Megaphone, Clock, AlertTriangle, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdminNotificationsListProps {
  typeFilter: string
  searchQuery: string
  medium: "all" | "app" | "email"
}

export default function AdminNotificationsList({ typeFilter, searchQuery, medium }: AdminNotificationsListProps) {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "Career Fair Announcement",
      message: "Join us for the Career Fair on March 18, 2025 at the Main Hall.",
      type: "event",
      medium: "app",
      recipients: "All Students, All Teachers",
      sentAt: "Mar 10, 2025 • 10:30 AM",
      icon: <Calendar className="h-4 w-4" />,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 2,
      title: "Fee Payment Reminder",
      message: "This is a reminder that the second term fees are due by March 15, 2025.",
      type: "reminder",
      medium: "email",
      recipients: "All Parents",
      sentAt: "Mar 8, 2025 • 9:15 AM",
      icon: <Clock className="h-4 w-4" />,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      id: 3,
      title: "School Holiday Announcement",
      message: "The school will be closed on March 20, 2025 for Teacher Professional Development Day.",
      type: "announcement",
      medium: "app",
      recipients: "All Students, All Teachers, All Parents",
      sentAt: "Mar 5, 2025 • 2:45 PM",
      icon: <Megaphone className="h-4 w-4" />,
      color: "bg-green-500/10 text-green-500",
    },
    {
      id: 4,
      title: "System Maintenance Alert",
      message:
        "The school management system will be undergoing maintenance on March 12, 2025 from 10:00 PM to 2:00 AM.",
      type: "alert",
      medium: "app",
      recipients: "All Users",
      sentAt: "Mar 5, 2025 • 11:00 AM",
      icon: <AlertTriangle className="h-4 w-4" />,
      color: "bg-red-500/10 text-red-500",
    },
    {
      id: 5,
      title: "Parent-Teacher Meeting Schedule",
      message:
        "The Parent-Teacher Meeting is scheduled for April 2, 2025 from 6:00 PM to 8:00 PM at the Conference Hall.",
      type: "event",
      medium: "email",
      recipients: "All Parents, All Teachers",
      sentAt: "Mar 1, 2025 • 3:30 PM",
      icon: <Calendar className="h-4 w-4" />,
      color: "bg-purple-500/10 text-purple-500",
    },
  ]

  // Filter notifications based on typeFilter, searchQuery, and medium
  const filteredNotifications = notifications.filter((notification) => {
    // Filter by medium
    if (medium !== "all" && notification.medium !== medium) return false

    // Filter by type
    if (typeFilter !== "all" && notification.type !== typeFilter) return false

    // Filter by search query
    if (searchQuery && !notification.title.toLowerCase().includes(searchQuery.toLowerCase())) return false

    return true
  })

  return (
    <div className="space-y-4">
      {filteredNotifications.length === 0 ? (
        <div className="text-center py-10">
          <Bell className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
          <h3 className="text-lg font-medium">No notifications found</h3>
          <p className="text-sm text-muted-foreground">There are no notifications matching your criteria.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex items-start justify-between p-4 border rounded-lg"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${notification.color}`}>{notification.icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{notification.title}</h3>
                    <Badge variant="outline">
                      {notification.medium === "app" ? (
                        <Bell className="h-3 w-3 mr-1" />
                      ) : (
                        <Mail className="h-3 w-3 mr-1" />
                      )}
                      {notification.medium === "app" ? "App" : "Email"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-xs text-muted-foreground">
                    <p>To: {notification.recipients}</p>
                    <p>{notification.sentAt}</p>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Send Again</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

