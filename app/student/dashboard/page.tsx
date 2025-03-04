"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import StudentSidebar from "@/components/student/sidebar"
import StudentHeader from "@/components/student/header"
import StudentRecentActivities from "@/components/student/recent-activities"
import StudentUpcomingAssignments from "@/components/student/upcoming-assignments"
import StudentTimetable from "@/components/student/timetable"
import StudentStats from "@/components/student/stats"

export default function StudentDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <StudentSidebar isOpen={isSidebarOpen} />

      <div className={`flex flex-col flex-1 ${isSidebarOpen ? "md:ml-64" : ""}`}>
        <StudentHeader toggleSidebar={toggleSidebar} />

        <motion.main
          className="flex-1 overflow-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, John. Here's an overview of your academic progress and activities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <StudentStats />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Tabs defaultValue="activities">
                <TabsList className="mb-4">
                  <TabsTrigger value="activities">Recent Activities</TabsTrigger>
                  <TabsTrigger value="assignments">Upcoming Assignments</TabsTrigger>
                </TabsList>
                <TabsContent value="activities">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                      <CardDescription>Your recent academic and extracurricular activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <StudentRecentActivities />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="assignments">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Assignments</CardTitle>
                      <CardDescription>Assignments due in the next two weeks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <StudentUpcomingAssignments />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Your classes for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <StudentTimetable showToday={true} />
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      View Full Timetable
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

