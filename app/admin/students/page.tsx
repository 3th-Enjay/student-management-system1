"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import AdminStudentsList from "@/components/admin/students-list"
import AddStudentDialog from "@/components/admin/add-student-dialog"

export default function AdminStudentsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState<string>("all")
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
                <h1 className="text-3xl font-bold tracking-tight">Students</h1>
                <p className="text-muted-foreground">Manage student registrations and profiles</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsAddStudentOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Student
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Students Directory</CardTitle>
                <CardDescription>View and manage all students in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search students..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Classes</SelectItem>
                        <SelectItem value="10-A">Class 10-A</SelectItem>
                        <SelectItem value="10-B">Class 10-B</SelectItem>
                        <SelectItem value="9-A">Class 9-A</SelectItem>
                        <SelectItem value="9-B">Class 9-B</SelectItem>
                        <SelectItem value="11-A">Class 11-A</SelectItem>
                        <SelectItem value="12-B">Class 12-B</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <AdminStudentsList classFilter={selectedClass} searchQuery={searchQuery} />
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <AddStudentDialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen} />
    </div>
  )
}

