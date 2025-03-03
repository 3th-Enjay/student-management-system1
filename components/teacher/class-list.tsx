"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Clock, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TeacherClassList() {
  const classes = [
    {
      id: 1,
      name: "Mathematics - Class 10A",
      students: 32,
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "Room 101",
      color: "border-blue-500",
    },
    {
      id: 2,
      name: "Mathematics - Class 9B",
      students: 28,
      schedule: "Mon, Wed, Fri - 11:00 AM",
      room: "Room 103",
      color: "border-green-500",
    },
    {
      id: 3,
      name: "Mathematics - Class 11A",
      students: 30,
      schedule: "Tue, Thu - 9:00 AM",
      room: "Room 105",
      color: "border-purple-500",
    },
    {
      id: 4,
      name: "Mathematics - Class 12B",
      students: 26,
      schedule: "Tue, Thu - 1:00 PM",
      room: "Room 107",
      color: "border-amber-500",
    },
    {
      id: 5,
      name: "Advanced Calculus - Class 12A",
      students: 20,
      schedule: "Wed, Fri - 2:00 PM",
      room: "Room 201",
      color: "border-red-500",
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
    <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
      {classes.map((classItem) => (
        <motion.div
          key={classItem.id}
          variants={item}
          className={`border-l-4 ${classItem.color} rounded-lg p-5 bg-card shadow-sm`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{classItem.name}</h3>
              <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground mt-1">
                <div className="flex items-center">
                  <Users className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.students} students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.schedule}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.room}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                Take Attendance
              </Button>
              <Button variant="outline" size="sm">
                Upload Materials
              </Button>
              <Link href={`/teacher/classes/${classItem.id}`}>
                <Button size="sm">
                  View Class
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

