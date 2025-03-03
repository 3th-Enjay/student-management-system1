"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Video, FileText } from "lucide-react"
import TeacherSidebar from "@/components/teacher/sidebar"
import TeacherHeader from "@/components/teacher/header"
import TeacherClassList from "@/components/teacher/class-list"
import TeacherUpcomingClasses from "@/components/teacher/upcoming-classes"
import TeacherRecentActivities from "@/components/teacher/recent-activities"

export default function TeacherDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <TeacherSidebar isOpen={isSidebarOpen} />

      <div className={`flex flex-col flex-1 ${isSidebarOpen ? "md:ml-64" : ""}`}>
        <TeacherHeader toggleSidebar={toggleSidebar} />

        <motion.main
          className="flex-1 overflow-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, Prof. Johnson. Here's an overview of your classes and activities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">Across 5 classes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Next class in 45 minutes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assignments</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">5 pending review</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Videos</CardTitle>
                <Video className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">3 uploaded this week</p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Tabs defaultValue="classes">
                <TabsList className="mb-4">
                  <TabsTrigger value="classes">My Classes</TabsTrigger>
                  <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                </TabsList>
                <TabsContent value="classes">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Classes</CardTitle>
                      <CardDescription>Classes you are currently teaching</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TeacherClassList />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="schedule">
                  <Card>
                    <CardHeader>
                      <CardTitle>Today's Schedule</CardTitle>
                      <CardDescription>Your teaching schedule for today</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TeacherUpcomingClasses />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="attendance">
                  <Card>
                    <CardHeader>
                      <CardTitle>Attendance Overview</CardTitle>
                      <CardDescription>Recent attendance records for your classes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Mathematics - Class 10A</h3>
                            <p className="text-sm text-muted-foreground">Today, 9:00 AM</p>
                          </div>
                          <Button>Take Attendance</Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Mathematics - Class 9B</h3>
                            <p className="text-sm text-muted-foreground">Today, 11:00 AM</p>
                          </div>
                          <Button>Take Attendance</Button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Mathematics - Class 11A</h3>
                            <p className="text-sm text-muted-foreground">Today, 2:00 PM</p>
                          </div>
                          <Button>Take Attendance</Button>
                        </div>
                      </div>
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
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Your recent actions and notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <TeacherRecentActivities />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

