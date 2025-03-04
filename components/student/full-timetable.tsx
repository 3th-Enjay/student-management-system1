"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, User, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FullTimetableProps {
  selectedDay: string
}

export default function FullTimetable({ selectedDay }: FullTimetableProps) {
  // Mock data - in a real app, you would fetch this from your API
  const timetableData = {
    Monday: [
      {
        id: 1,
        subject: "Mathematics",
        time: "9:00 AM - 10:30 AM",
        location: "Room 101",
        teacher: "Dr. Sarah Johnson",
        code: "MATH101",
      },
      {
        id: 2,
        subject: "Science",
        time: "11:00 AM - 12:30 PM",
        location: "Room 103",
        teacher: "Prof. Michael Thompson",
        code: "SCI102",
      },
      {
        id: 3,
        subject: "English",
        time: "2:00 PM - 3:30 PM",
        location: "Room 105",
        teacher: "Ms. Jennifer Rodriguez",
        code: "ENG103",
      },
    ],
    Tuesday: [
      {
        id: 1,
        subject: "History",
        time: "9:00 AM - 10:30 AM",
        location: "Room 201",
        teacher: "Mr. Robert Wilson",
        code: "HIS104",
      },
      {
        id: 2,
        subject: "Computer Science",
        time: "11:00 AM - 12:30 PM",
        location: "Lab 1",
        teacher: "Mrs. Emily Davis",
        code: "CS101",
      },
      {
        id: 3,
        subject: "Physical Education",
        time: "2:00 PM - 3:30 PM",
        location: "Sports Ground",
        teacher: "Mr. James Smith",
        code: "PE105",
      },
    ],
    Wednesday: [
      {
        id: 1,
        subject: "Mathematics",
        time: "9:00 AM - 10:30 AM",
        location: "Room 101",
        teacher: "Dr. Sarah Johnson",
        code: "MATH101",
      },
      {
        id: 2,
        subject: "Science",
        time: "11:00 AM - 12:30 PM",
        location: "Room 103",
        teacher: "Prof. Michael Thompson",
        code: "SCI102",
      },
      {
        id: 3,
        subject: "Art",
        time: "2:00 PM - 3:30 PM",
        location: "Art Studio",
        teacher: "Ms. Laura Johnson",
        code: "ART106",
      },
    ],
    Thursday: [
      {
        id: 1,
        subject: "History",
        time: "9:00 AM - 10:30 AM",
        location: "Room 201",
        teacher: "Mr. Robert Wilson",
        code: "HIS104",
      },
      {
        id: 2,
        subject: "English",
        time: "11:00 AM - 12:30 PM",
        location: "Room 105",
        teacher: "Ms. Jennifer Rodriguez",
        code: "ENG103",
      },
      {
        id: 3,
        subject: "Music",
        time: "2:00 PM - 3:30 PM",
        location: "Music Room",
        teacher: "Mr. David Miller",
        code: "MUS107",
      },
    ],
    Friday: [
      {
        id: 1,
        subject: "Mathematics",
        time: "9:00 AM - 10:30 AM",
        location: "Room 101",
        teacher: "Dr. Sarah Johnson",
        code: "MATH101",
      },
      {
        id: 2,
        subject: "Science",
        time: "11:00 AM - 12:30 PM",
        location: "Room 103",
        teacher: "Prof. Michael Thompson",
        code: "SCI102",
      },
      {
        id: 3,
        subject: "Study Period",
        time: "2:00 PM - 3:30 PM",
        location: "Library",
        teacher: "Self-Directed",
        code: "STUDY",
      },
    ],
  }

  // Get the classes for the selected day
  const classes = timetableData[selectedDay as keyof typeof timetableData] || []

  return (
    <div className="space-y-4">
      {classes.map((classItem, index) => (
        <motion.div
          key={classItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="font-medium text-lg">{classItem.subject}</h3>
                <Badge className="ml-2 bg-primary/10 text-primary">{classItem.code}</Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-sm text-muted-foreground mt-1">
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.location}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-3.5 w-3.5 mr-1" />
                  <span>{classItem.teacher}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

