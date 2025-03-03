"use client"

import { motion } from "framer-motion"
import { FileText, Video, Users, MessageSquare } from "lucide-react"

export default function TeacherRecentActivities() {
  const activities = [
    {
      id: 1,
      type: "assignment",
      title: "Posted new assignment",
      description: "Algebra Chapter 5 - Problem Set",
      time: "2 hours ago",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 2,
      type: "video",
      title: "Uploaded learning video",
      description: "Introduction to Trigonometry",
      time: "Yesterday",
      icon: <Video className="h-4 w-4" />,
      color: "bg-green-500/10 text-green-500",
    },
    {
      id: 3,
      type: "attendance",
      title: "Took attendance",
      description: "Mathematics - Class 10A",
      time: "Yesterday",
      icon: <Users className="h-4 w-4" />,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      id: 4,
      type: "message",
      title: "Sent message to class",
      description: "Reminder about upcoming test",
      time: "2 days ago",
      icon: <MessageSquare className="h-4 w-4" />,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      id: 5,
      type: "assignment",
      title: "Graded assignments",
      description: "Geometry - Class 9B",
      time: "3 days ago",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-blue-500/10 text-blue-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
      {activities.map((activity) => (
        <motion.div key={activity.id} variants={item} className="flex items-start gap-3">
          <div className={`p-2 rounded-full ${activity.color}`}>{activity.icon}</div>
          <div>
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

