"use client"

import { motion } from "framer-motion"
import { Edit, Trash, Send, Calendar, MapPin, Users, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdminEventsListProps {
  timeFilter: "upcoming" | "past" | "all"
  searchQuery: string
  onSendNotification: (eventId: string) => void
}

export default function AdminEventsList({ timeFilter, searchQuery, onSendNotification }: AdminEventsListProps) {
  // Mock events data
  const events = [
    {
      id: "1",
      title: "Career Fair",
      date: "Mar 18, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Hall",
      attendees: 300,
      type: "Academic",
      status: "upcoming",
      color: "border-blue-500",
    },
    {
      id: "2",
      title: "Science Exhibition",
      date: "Mar 25, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Science Block",
      attendees: 200,
      type: "Academic",
      status: "upcoming",
      color: "border-green-500",
    },
    {
      id: "3",
      title: "Parent-Teacher Meeting",
      date: "Apr 2, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Conference Hall",
      attendees: 250,
      type: "Meeting",
      status: "upcoming",
      color: "border-purple-500",
    },
    {
      id: "4",
      title: "Annual Sports Day",
      date: "Apr 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Sports Ground",
      attendees: 500,
      type: "Sports",
      status: "upcoming",
      color: "border-amber-500",
    },
    {
      id: "5",
      title: "School Anniversary Celebration",
      date: "Feb 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
      attendees: 450,
      type: "Cultural",
      status: "past",
      color: "border-red-500",
    },
    {
      id: "6",
      title: "Winter Break",
      date: "Dec 20, 2024 - Jan 5, 2025",
      time: "All Day",
      location: "N/A",
      attendees: 0,
      type: "Holiday",
      status: "past",
      color: "border-blue-500",
    },
  ]

  // Filter events based on timeFilter and searchQuery
  const filteredEvents = events.filter((event) => {
    // Filter by time
    if (timeFilter === "upcoming" && event.status !== "upcoming") return false
    if (timeFilter === "past" && event.status !== "past") return false

    // Filter by search query
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase())) return false

    return true
  })

  return (
    <div className="space-y-4">
      {filteredEvents.length === 0 ? (
        <div className="text-center py-10">
          <Calendar className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
          <h3 className="text-lg font-medium">No events found</h3>
          <p className="text-sm text-muted-foreground">
            {timeFilter === "upcoming"
              ? "There are no upcoming events scheduled."
              : timeFilter === "past"
                ? "There are no past events to display."
                : "No events match your search criteria."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className={`border-l-4 ${event.color} rounded-lg p-4 bg-card shadow-sm`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{event.title}</h3>
                  <div className="flex flex-col text-sm text-muted-foreground mt-1">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <Badge className="mt-2" variant="secondary">
                    {event.type}
                  </Badge>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onSendNotification(event.id)}>
                      <Send className="h-4 w-4 mr-2" />
                      Send Notification
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Event
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">
                      <Trash className="h-4 w-4 mr-2" />
                      Delete Event
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

