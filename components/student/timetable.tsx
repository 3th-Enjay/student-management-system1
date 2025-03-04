"use client"

import { motion } from "framer-motion"
import { Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface StudentTimetableProps {
  showToday?: boolean
  selectedDay?: string
}

export default function StudentTimetable({ showToday = false, selectedDay = "Monday" }: StudentTimetableProps) {
  // Mock data - in a real app, you would fetch this from your API
  const timetableData = {
    Monday: [
      {
        id: 1,
        subject: "Mathematics",
        time: "9:00 AM - 10:30 AM",
        location: "Room 101",
        teacher: "Dr. Sarah Johnson",
      },
      {
        id: 2,
        subject: "Science",
        time: "11:00 AM - 12:30 PM",
        location: "Room 103",
        teacher: "Prof. Michael Thompson",
      },
      {
        id: 3,
        subject: "English",
        time: "2:00 PM - 3:30 PM",
        location: "Room 105",
        teacher: "Ms. Jennifer Rodriguez",
      },
    ],
    Tuesday: [
      {
        id: 1,
        subject: "History",
        time: "9:00 AM - 10:30 AM",
        location: "Room 201",
        teacher: "Mr. Robert Wilson",
      },
      {
        id: 2,
        subject: "Computer Science",
        time: "11:00 AM - 12:30 PM",
        location: "Lab 1",
        teacher: "Mrs. Emily Davis",
      },
      {
        id: 3,
        subject: "Physical Education",
        time: "2:00 PM - 3:30 PM",
        location: "Sports Ground",
        teacher: "Mr. James Smith",
      },
    ],
    // Add more days as needed
  }

  // Determine which classes to display
  const classesToDisplay = showToday
    ? timetableData[selectedDay].slice(0, 3) // Show only first 3 for today view
    : timetableData[selectedDay]

  return (
    <div className="space-y-3">
      {!showToday && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">{selectedDay}'s Schedule</h3>
          <Badge variant="outline">Current Day</Badge>
        </div>
      )}

      {classesToDisplay.map((classItem, index) => (
        <motion.div
          key={classItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="flex items-center justify-between p-3 border rounded-lg"
        >
          <div>
            <h4 className="font-medium">{classItem.subject}</h4>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{classItem.time}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{classItem.location}</span>
            </div>
          </div>
          {showToday && (
            <Badge
              variant="outline"
              className={index === 0 ? "bg-green-500/10 text-green-500 border-green-500" : "bg-muted/50"}
            >
              {index === 0 ? "Now" : "Upcoming"}
            </Badge>
          )}
        </motion.div>
      ))}
    </div>
  )
}

