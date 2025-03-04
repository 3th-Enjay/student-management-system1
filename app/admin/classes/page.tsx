"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import AdminClassesList from "@/components/admin/classes-list"
import AddClassDialog from "@/components/admin/add-class-dialog"

export default function AdminClassesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAddClassOpen, setIsAddClassOpen] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState<string>("all")
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
                <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
                <p className="text-muted-foreground">Manage classes, sections, and assignments</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsAddClassOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Class
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Classes Management</CardTitle>
                <CardDescription>View and manage all classes in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="active">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList>
                      <TabsTrigger value="active">Active Classes</TabsTrigger>
                      <TabsTrigger value="archived">Archived Classes</TabsTrigger>
                    </TabsList>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search classes..."
                          className="pl-8 w-full sm:w-[200px]"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Filter by grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Grades</SelectItem>
                          <SelectItem value="9">Grade 9</SelectItem>
                          <SelectItem value="10">Grade 10</SelectItem>
                          <SelectItem value="11">Grade 11</SelectItem>
                          <SelectItem value="12">Grade 12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <TabsContent value="active">
                    <AdminClassesList gradeFilter={selectedGrade} searchQuery={searchQuery} status="active" />
                  </TabsContent>
                  <TabsContent value="archived">
                    <AdminClassesList gradeFilter={selectedGrade} searchQuery={searchQuery} status="archived" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <AddClassDialog open={isAddClassOpen} onOpenChange={setIsAddClassOpen} />
    </div>
  )
}

