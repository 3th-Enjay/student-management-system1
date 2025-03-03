"use client"

import { motion } from "framer-motion"
import { Calendar, Users, MapPin } from "lucide-react"

export default function DashboardEventsList() {
  const events = [
    {
      id: 1,
      title: "Career Fair",
      date: "Mar 18, 2025",
      attendees: 120,
      location: "Main Hall",
      color: "border-blue-500",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "Mar 25, 2025",
      attendees: 85,
      location: "Science Block",
      color: "border-green-500",
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "Apr 2, 2025",
      attendees: 200,
      location: "Conference Hall",
      color: "border-amber-500",
    },
    {
      id: 4,
      title: "Annual Sports Day",
      date: "Apr 15, 2025",
      attendees: 300,
      location: "Sports Ground",
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
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
      {events.map((event) => (
        <motion.div
          key={event.id}
          variants={item}
          className={`flex items-start space-x-4 rounded-md border-l-4 ${event.color} p-3 bg-muted/30`}
        >
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{event.title}</p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">{event.date}</p>
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-3 w-3 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">{event.attendees} attendees</p>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">{event.location}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

