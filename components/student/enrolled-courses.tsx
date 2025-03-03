"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BookOpen, User, Calendar } from "lucide-react"

export default function EnrolledCourses() {
  const courses = [
    {
      id: 1,
      name: "Mathematics",
      teacher: "Dr. Sarah Johnson",
      progress: 75,
      schedule: "Mon, Wed, Fri - 9:00 AM",
      color: "border-blue-500",
    },
    {
      id: 2,
      name: "Science",
      teacher: "Prof. Michael Thompson",
      progress: 60,
      schedule: "Tue, Thu - 11:00 AM",
      color: "border-green-500",
    },
    {
      id: 3,
      name: "English Literature",
      teacher: "Ms. Jennifer Rodriguez",
      progress: 85,
      schedule: "Mon, Wed - 1:00 PM",
      color: "border-purple-500",
    },
    {
      id: 4,
      name: "History",
      teacher: "Mr. Robert Wilson",
      progress: 45,
      schedule: "Tue, Fri - 2:00 PM",
      color: "border-amber-500",
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="grid gap-6 md:grid-cols-2" variants={container} initial="hidden" animate="show">
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={item}
          className={`border-l-4 ${course.color} rounded-lg p-5 bg-card shadow-sm`}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <User className="h-3.5 w-3.5 mr-1" />
                <span>{course.teacher}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>{course.schedule}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-1" />
                Materials
              </Button>
              <Button size="sm">View Course</Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

