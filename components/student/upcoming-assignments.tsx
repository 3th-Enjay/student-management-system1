"use client"

import { motion } from "framer-motion"
import { FileText, CalendarDays, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function StudentUpcomingAssignments() {
  const assignments = [
    {
      id: 1,
      title: "Algebra Problem Set",
      subject: "Mathematics",
      dueDate: "Mar 18, 2025",
      daysLeft: 2,
      status: "Not started",
      statusColor: "bg-red-500/10 text-red-500",
      progress: 0,
    },
    {
      id: 2,
      title: "Chemical Reactions Lab Report",
      subject: "Science",
      dueDate: "Mar 20, 2025",
      daysLeft: 4,
      status: "In progress",
      statusColor: "bg-amber-500/10 text-amber-500",
      progress: 45,
    },
    {
      id: 3,
      title: "Literature Essay",
      subject: "English",
      dueDate: "Mar 25, 2025",
      daysLeft: 9,
      status: "In progress",
      statusColor: "bg-amber-500/10 text-amber-500",
      progress: 30,
    },
    {
      id: 4,
      title: "Historical Analysis",
      subject: "History",
      dueDate: "Mar 28, 2025",
      daysLeft: 12,
      status: "Not started",
      statusColor: "bg-red-500/10 text-red-500",
      progress: 0,
    },
  ]

  return (
    <div className="space-y-4">
      {assignments.map((assignment, index) => (
        <motion.div
          key={assignment.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="flex flex-col gap-3 p-4 border rounded-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{assignment.title}</h3>
                <p className="text-sm text-muted-foreground">{assignment.subject}</p>
              </div>
            </div>
            <Badge className={assignment.statusColor}>{assignment.status}</Badge>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <CalendarDays className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">Due: {assignment.dueDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">{assignment.daysLeft} days left</span>
              </div>
            </div>
            <Progress value={assignment.progress} className="h-2" />
          </div>

          <div className="flex justify-end">
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

