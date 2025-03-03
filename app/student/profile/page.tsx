"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import StudentSidebar from "@/components/student/sidebar"
import StudentHeader from "@/components/student/header"
import AttendanceHistory from "@/components/student/attendance-history"
import PaymentHistory from "@/components/student/payment-history"
import EnrolledCourses from "@/components/student/enrolled-courses"

export default function StudentProfilePage() {
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
          <div className="flex flex-col gap-6">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <Card className="w-full md:w-1/3">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Student" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="text-muted-foreground">Student ID: ST-2023-001</p>
                    <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">Class 10-A</Badge>

                    <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                      <div className="flex flex-col items-center p-3 bg-muted/50 rounded-md">
                        <p className="text-sm text-muted-foreground">Attendance</p>
                        <p className="text-xl font-bold">94%</p>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-muted/50 rounded-md">
                        <p className="text-sm text-muted-foreground">GPA</p>
                        <p className="text-xl font-bold">3.8</p>
                      </div>
                    </div>

                    <div className="mt-6 w-full">
                      <Button className="w-full">Edit Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-2/3">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your personal and contact details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">John Doe</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-medium">January 15, 2005</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Email Address</p>
                      <p className="font-medium">john.doe@example.com</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Phone Number</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Parent/Guardian</p>
                      <p className="font-medium">Robert & Jane Doe</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Parent Contact</p>
                      <p className="font-medium">+1 (555) 987-6543</p>
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">123 Education Street, Learning City, ED 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Academic Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Tabs defaultValue="courses">
                <TabsList className="mb-4">
                  <TabsTrigger value="courses">Enrolled Courses</TabsTrigger>
                  <TabsTrigger value="attendance">Attendance</TabsTrigger>
                  <TabsTrigger value="payments">Payments</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="courses">
                  <Card>
                    <CardHeader>
                      <CardTitle>Enrolled Courses</CardTitle>
                      <CardDescription>Courses you are currently enrolled in</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <EnrolledCourses />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="attendance">
                  <Card>
                    <CardHeader>
                      <CardTitle>Attendance History</CardTitle>
                      <CardDescription>Your attendance record for the current semester</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AttendanceHistory />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="payments">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment History</CardTitle>
                      <CardDescription>Record of your fee payments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PaymentHistory />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents">
                  <Card>
                    <CardHeader>
                      <CardTitle>Documents</CardTitle>
                      <CardDescription>Your academic and personal documents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-8 w-8 text-primary" />
                            <div>
                              <p className="font-medium">Birth Certificate</p>
                              <p className="text-sm text-muted-foreground">Uploaded on Jan 10, 2023</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-8 w-8 text-primary" />
                            <div>
                              <p className="font-medium">Previous School Records</p>
                              <p className="text-sm text-muted-foreground">Uploaded on Jan 10, 2023</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-8 w-8 text-primary" />
                            <div>
                              <p className="font-medium">Medical Records</p>
                              <p className="text-sm text-muted-foreground">Uploaded on Jan 10, 2023</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

