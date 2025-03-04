"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, BarChart3, PieChart, LineChart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import AdminAttendanceReport from "@/components/admin/reports/attendance-report"
import AdminAcademicReport from "@/components/admin/reports/academic-report"
import AdminFinancialReport from "@/components/admin/reports/financial-report"
import AdminEnrollmentReport from "@/components/admin/reports/enrollment-report"

export default function AdminReportsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState<string>("current-term")

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
                <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
                <p className="text-muted-foreground">View and generate reports on various school metrics</p>
              </div>
              <div className="flex gap-2">
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-term">Current Term</SelectItem>
                    <SelectItem value="last-term">Last Term</SelectItem>
                    <SelectItem value="current-year">Current Year</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.2%</div>
                  <p className="text-xs text-muted-foreground">+1.2% from last term</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Academic Performance</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">B+</div>
                  <p className="text-xs text-muted-foreground">Average grade across all classes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Student Enrollment</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+12% from last year</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Reports</CardTitle>
                <CardDescription>View detailed reports on various school metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="attendance">
                  <TabsList className="mb-6">
                    <TabsTrigger value="attendance">Attendance</TabsTrigger>
                    <TabsTrigger value="academic">Academic</TabsTrigger>
                    <TabsTrigger value="financial">Financial</TabsTrigger>
                    <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
                  </TabsList>

                  <TabsContent value="attendance">
                    <AdminAttendanceReport period={selectedPeriod} />
                  </TabsContent>
                  <TabsContent value="academic">
                    <AdminAcademicReport period={selectedPeriod} />
                  </TabsContent>
                  <TabsContent value="financial">
                    <AdminFinancialReport period={selectedPeriod} />
                  </TabsContent>
                  <TabsContent value="enrollment">
                    <AdminEnrollmentReport period={selectedPeriod} />
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

