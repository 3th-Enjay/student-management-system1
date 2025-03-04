"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Award, Calendar, MessageSquare, Clock } from "lucide-react"

export default function StudentRecentActivities() {
  const activities = [
    {
      id: 1,
      type: "submission",
      title: "Assignment submission",
      description: "Mathematics: Algebra Chapter 5",
      time: "2 hours ago",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 2,
      type: "grade",
      title: "New grade posted",
      description: "Science: Chemistry Test - A",
      time: "Yesterday",
      icon: <Award className="h-4 w-4" />,
      color: "bg-green-500/10 text-green-500",
    },
    {
      id: 3,
      type: "attendance",
      title: "Class attendance",
      description: "English Literature",
      time: "Yesterday",
      icon: <Clock className="h-4 w-4" />,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      id: 4,
      type: "event",
      title: "Registered for event",
      description: "Science Fair",
      time: "2 days ago",
      icon: <Calendar className="h-4 w-4" />,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      id: 5,
      type: "course",
      title: "Course material accessed",
      description: "History: World War II Documentation",
      time: "3 days ago",
      icon: <BookOpen className="h-4 w-4" />,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 6,
      type: "message",
      title: "New message from teacher",
      description: "Dr. Sarah Johnson (Mathematics)",
      time: "3 days ago",
      icon: <MessageSquare className="h-4 w-4" />,
      color: "bg-red-500/10 text-red-500",
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

