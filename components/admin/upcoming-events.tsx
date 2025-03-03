"\"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"

export default function AdminUpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Career Fair",
      date: "Mar 18, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Hall",
      attendees: 300,
      color: "border-blue-500",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "Mar 25, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Science Block",
      attendees: 200,
      color: "border-green-500",
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "Apr 2, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Conference Hall",
      attendees: 250,
      color: "border-purple-500",
    },
    {
      id: 4,
      title: "Annual Sports Day",
      date: "Apr 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Sports Ground",
      attendees: 500,
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
      {events.map((event, index) => (
        <motion.div key={event.id} variants={item} className={`border-l-4 ${event.color} rounded-lg p-4 bg-muted/30`}>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 mr-2" />
              <span>
                {event.date}, {event.time}
              </span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-3.5 w-3.5 mr-2" />
              <span>{event.attendees} attendees</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

