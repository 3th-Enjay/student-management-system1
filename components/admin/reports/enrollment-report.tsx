"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AdminEnrollmentReportProps {
  period: string
}

export default function AdminEnrollmentReport({ period }: AdminEnrollmentReportProps) {
  // Mock enrollment by grade data
  const enrollmentByGradeData = [
    { grade: "Grade 9", students: 250 },
    { grade: "Grade 10", students: 320 },
    { grade: "Grade 11", students: 280 },
    { grade: "Grade 12", students: 240 },
  ]

  // Mock enrollment trend data
  const enrollmentTrendData = [
    { year: "2020", students: 980 },
    { year: "2021", students: 1050 },
    { year: "2022", students: 1120 },
    { year: "2023", students: 1180 },
    { year: "2024", students: 1090 },
    { year: "2025", students: 1248 },
  ]

  // Mock detailed enrollment data
  const detailedEnrollmentData = [
    { class: "Class 9-A", boys: 18, girls: 14, total: 32 },
    { class: "Class 9-B", boys: 16, girls: 13, total: 29 },
    { class: "Class 10-A", boys: 17, girls: 15, total: 32 },
    { class: "Class 10-B", boys: 15, girls: 13, total: 28 },
    { class: "Class 11-A", boys: 14, girls: 12, total: 26 },
    { class: "Class 12-B", boys: 13, girls: 11, total: 24 },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="byGrade">
        <TabsList>
          <TabsTrigger value="byGrade">By Grade</TabsTrigger>
          <TabsTrigger value="trend">Enrollment Trend</TabsTrigger>
          <TabsTrigger value="detailed">Detailed View</TabsTrigger>
        </TabsList>
        <TabsContent value="byGrade" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Enrollment by Grade</CardTitle>
              <CardDescription>
                Student enrollment breakdown by grade for{" "}
                {period === "current-term"
                  ? "the current term"
                  : period === "last-term"
                    ? "the last term"
                    : period === "current-year"
                      ? "the current year"
                      : "the last year"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={enrollmentByGradeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="grade" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, "Students"]} />
                    <Legend />
                    <Bar dataKey="students" name="Number of Students" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trend" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Enrollment Trend</CardTitle>
              <CardDescription>Student enrollment trend over the years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={enrollmentTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, "Students"]} />
                    <Legend />
                    <Bar dataKey="students" name="Number of Students" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="detailed" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Enrollment Report</CardTitle>
              <CardDescription>
                Detailed enrollment statistics by class for{" "}
                {period === "current-term"
                  ? "the current term"
                  : period === "last-term"
                    ? "the last term"
                    : period === "current-year"
                      ? "the current year"
                      : "the last year"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Boys</TableHead>
                    <TableHead>Girls</TableHead>
                    <TableHead>Total Students</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {detailedEnrollmentData.map((row) => (
                    <TableRow key={row.class}>
                      <TableCell className="font-medium">{row.class}</TableCell>
                      <TableCell>{row.boys}</TableCell>
                      <TableCell>{row.girls}</TableCell>
                      <TableCell>{row.total}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-bold">Total</TableCell>
                    <TableCell className="font-bold">
                      {detailedEnrollmentData.reduce((sum, item) => sum + item.boys, 0)}
                    </TableCell>
                    <TableCell className="font-bold">
                      {detailedEnrollmentData.reduce((sum, item) => sum + item.girls, 0)}
                    </TableCell>
                    <TableCell className="font-bold">
                      {detailedEnrollmentData.reduce((sum, item) => sum + item.total, 0)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

