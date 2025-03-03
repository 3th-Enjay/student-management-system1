"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TeacherUpcomingClasses() {
  const classes = [
    {
      id: 1,
      name: "Mathematics - Class 10A",
      time: "9:00 AM - 10:30 AM",
      room: "Room 101",
      students: 32,
      status: "Upcoming",
      statusColor: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 2,
      name: "Mathematics - Class 9B",
      time: "11:00 AM - 12:30 PM",
      room: "Room 103",
      students: 28,
      status: "Upcoming",
      statusColor: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 3,
      name: "Mathematics - Class 11A",
      time: "2:00 PM - 3:30 PM",
      room: "Room 105",
      students: 30,
      status: "Upcoming",
      statusColor: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 4,
      name: "Advanced Calculus - Class 12A",
      time: "4:00 PM - 5:30 PM",
      room: "Room 201",
      students: 20,
      status: "Upcoming",
      statusColor: "bg-blue-500/10 text-blue-500",
    },
  ]

  return (
    <div className="space-y-4">
      {classes.map((classItem, index) => (
        <motion.div
          key={classItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="flex items-center justify-between p-4 border rounded-lg"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">{classItem.name}</h3>
              <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground mt-1">
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.room}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.students} students</span>
                </div>
              </div>
            </div>
          </div>
          <Button>Start Class</Button>
        </motion.div>
      ))}
    </div>
  )
}

