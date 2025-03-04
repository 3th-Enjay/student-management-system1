"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import AdminEventsList from "@/components/admin/events-list"
import AddEventDialog from "@/components/admin/add-event-dialog"
import SendEventNotificationDialog from "@/components/admin/send-event-notification-dialog"

export default function AdminEventsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [isSendNotificationOpen, setIsSendNotificationOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleSendNotification = (eventId: string) => {
    setSelectedEvent(eventId)
    setIsSendNotificationOpen(true)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar isOpen={isSidebarOpen} />

      <div className={`flex flex-col flex-1 ${isSidebarOpen ? "md:ml-64" : ""}`}>
        <AdminHeader toggleSidebar={toggleSidebar} />

        <motion.main
          className="flex-1 overflow-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Events</h1>
                <p className="text-muted-foreground">Manage school events and notifications</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsAddEventOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Calendar View
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>School Events</CardTitle>
                <CardDescription>View and manage all school events</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="past">Past Events</TabsTrigger>
                      <TabsTrigger value="all">All Events</TabsTrigger>
                    </TabsList>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search events..."
                        className="pl-8 w-full sm:w-[250px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  <TabsContent value="upcoming">
                    <AdminEventsList
                      timeFilter="upcoming"
                      searchQuery={searchQuery}
                      onSendNotification={handleSendNotification}
                    />
                  </TabsContent>
                  <TabsContent value="past">
                    <AdminEventsList
                      timeFilter="past"
                      searchQuery={searchQuery}
                      onSendNotification={handleSendNotification}
                    />
                  </TabsContent>
                  <TabsContent value="all">
                    <AdminEventsList
                      timeFilter="all"
                      searchQuery={searchQuery}
                      onSendNotification={handleSendNotification}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <AddEventDialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen} />
      <SendEventNotificationDialog
        open={isSendNotificationOpen}
        onOpenChange={setIsSendNotificationOpen}
        eventId={selectedEvent}
      />
    </div>
  )
}

