"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentSidebar from "@/components/student/sidebar"
import StudentHeader from "@/components/student/header"
import StudentCoursesList from "@/components/student/courses-list"
import RequestCourseDialog from "@/components/student/request-course-dialog"

export default function StudentCoursesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isRequestCourseOpen, setIsRequestCourseOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

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
                <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
                <p className="text-muted-foreground">Manage your enrolled courses and academic progress</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsRequestCourseOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Request Course
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Enrolled Courses</CardTitle>
                <CardDescription>Your currently enrolled courses and academic progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search courses..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <Tabs defaultValue="current">
                  <TabsList className="mb-4">
                    <TabsTrigger value="current">Current Term</TabsTrigger>
                    <TabsTrigger value="previous">Previous Terms</TabsTrigger>
                    <TabsTrigger value="requested">Requested</TabsTrigger>
                  </TabsList>

                  <TabsContent value="current">
                    <StudentCoursesList searchQuery={searchQuery} status="current" />
                  </TabsContent>
                  <TabsContent value="previous">
                    <StudentCoursesList searchQuery={searchQuery} status="previous" />
                  </TabsContent>
                  <TabsContent value="requested">
                    <StudentCoursesList searchQuery={searchQuery} status="requested" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <RequestCourseDialog open={isRequestCourseOpen} onOpenChange={setIsRequestCourseOpen} />
    </div>
  )
}

