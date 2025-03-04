"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, Send, Mail, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import AdminNotificationsList from "@/components/admin/notifications-list"
import CreateNotificationDialog from "@/components/admin/create-notification-dialog"

export default function AdminNotificationsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isCreateNotificationOpen, setIsCreateNotificationOpen] = useState(false)
  const [selectedType, setSelectedType] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

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
                <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                <p className="text-muted-foreground">Send and manage notifications to students and teachers</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsCreateNotificationOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Notification
                </Button>
                <Button variant="outline">
                  <Send className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">App Notifications</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">Sent in the last 30 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Email Notifications</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">Sent in the last 30 days</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Notification History</CardTitle>
                <CardDescription>View and manage all sent notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList>
                      <TabsTrigger value="all">All Notifications</TabsTrigger>
                      <TabsTrigger value="app">App Notifications</TabsTrigger>
                      <TabsTrigger value="email">Email Notifications</TabsTrigger>
                    </TabsList>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search notifications..."
                          className="pl-8 w-full sm:w-[200px]"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="event">Event</SelectItem>
                          <SelectItem value="announcement">Announcement</SelectItem>
                          <SelectItem value="reminder">Reminder</SelectItem>
                          <SelectItem value="alert">Alert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <TabsContent value="all">
                    <AdminNotificationsList typeFilter={selectedType} searchQuery={searchQuery} medium="all" />
                  </TabsContent>
                  <TabsContent value="app">
                    <AdminNotificationsList typeFilter={selectedType} searchQuery={searchQuery} medium="app" />
                  </TabsContent>
                  <TabsContent value="email">
                    <AdminNotificationsList typeFilter={selectedType} searchQuery={searchQuery} medium="email" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <CreateNotificationDialog open={isCreateNotificationOpen} onOpenChange={setIsCreateNotificationOpen} />
    </div>
  )
}

