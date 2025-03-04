"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentSidebar from "@/components/student/sidebar"
import StudentHeader from "@/components/student/header"
import FullTimetable from "@/components/student/full-timetable"

export default function StudentTimetablePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedDay, setSelectedDay] = useState<string>("Monday")

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
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">My Timetable</h1>
                <p className="text-muted-foreground">View your class schedule for the current term</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Term Schedule</CardTitle>
                <CardDescription>Your weekly class timetable for the current term</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Monday" onValueChange={setSelectedDay} className="w-full">
                  <TabsList className="mb-6 w-full justify-start">
                    <TabsTrigger value="Monday">Monday</TabsTrigger>
                    <TabsTrigger value="Tuesday">Tuesday</TabsTrigger>
                    <TabsTrigger value="Wednesday">Wednesday</TabsTrigger>
                    <TabsTrigger value="Thursday">Thursday</TabsTrigger>
                    <TabsTrigger value="Friday">Friday</TabsTrigger>
                  </TabsList>

                  <TabsContent value="Monday">
                    <FullTimetable selectedDay="Monday" />
                  </TabsContent>
                  <TabsContent value="Tuesday">
                    <FullTimetable selectedDay="Tuesday" />
                  </TabsContent>
                  <TabsContent value="Wednesday">
                    <FullTimetable selectedDay="Wednesday" />
                  </TabsContent>
                  <TabsContent value="Thursday">
                    <FullTimetable selectedDay="Thursday" />
                  </TabsContent>
                  <TabsContent value="Friday">
                    <FullTimetable selectedDay="Friday" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

