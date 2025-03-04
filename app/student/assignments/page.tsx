"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Upload, FileBox } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import StudentSidebar from "@/components/student/sidebar"
import StudentHeader from "@/components/student/header"
import StudentAssignmentsList from "@/components/student/assignments-list"
import UploadAssignmentDialog from "@/components/student/upload-assignment-dialog"
import ViewAssignmentDialog from "@/components/student/view-assignment-dialog"

export default function StudentAssignmentsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isUploadAssignmentOpen, setIsUploadAssignmentOpen] = useState(false)
  const [isViewAssignmentOpen, setIsViewAssignmentOpen] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleViewAssignment = (assignmentId: number) => {
    setSelectedAssignment(assignmentId)
    setIsViewAssignmentOpen(true)
  }

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
                <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
                <p className="text-muted-foreground">View and manage your course assignments</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <FileBox className="h-4 w-4 mr-2" />
                  Resources
                </Button>
                <Button onClick={() => setIsUploadAssignmentOpen(true)}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Assignment
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>My Assignments</CardTitle>
                <CardDescription>All assignments for your enrolled courses</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="pending">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="submitted">Submitted</TabsTrigger>
                      <TabsTrigger value="graded">Graded</TabsTrigger>
                      <TabsTrigger value="all">All</TabsTrigger>
                    </TabsList>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search assignments..."
                          className="pl-8 w-full sm:w-[200px]"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Filter by subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Subjects</SelectItem>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="computer">Computer Science</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <TabsContent value="pending">
                    <StudentAssignmentsList
                      subjectFilter={selectedSubject}
                      searchQuery={searchQuery}
                      statusFilter="pending"
                      onViewAssignment={handleViewAssignment}
                    />
                  </TabsContent>
                  <TabsContent value="submitted">
                    <StudentAssignmentsList
                      subjectFilter={selectedSubject}
                      searchQuery={searchQuery}
                      statusFilter="submitted"
                      onViewAssignment={handleViewAssignment}
                    />
                  </TabsContent>
                  <TabsContent value="graded">
                    <StudentAssignmentsList
                      subjectFilter={selectedSubject}
                      searchQuery={searchQuery}
                      statusFilter="graded"
                      onViewAssignment={handleViewAssignment}
                    />
                  </TabsContent>
                  <TabsContent value="all">
                    <StudentAssignmentsList
                      subjectFilter={selectedSubject}
                      searchQuery={searchQuery}
                      statusFilter="all"
                      onViewAssignment={handleViewAssignment}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <UploadAssignmentDialog open={isUploadAssignmentOpen} onOpenChange={setIsUploadAssignmentOpen} />
      <ViewAssignmentDialog
        open={isViewAssignmentOpen}
        onOpenChange={setIsViewAssignmentOpen}
        assignmentId={selectedAssignment}
      />
    </div>
  )
}

