"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AdminAttendanceReportProps {
  period: string
}

export default function AdminAttendanceReport({ period }: AdminAttendanceReportProps) {
  // Mock attendance data
  const attendanceData = [
    { name: "Class 9-A", attendance: 96 },
    { name: "Class 9-B", attendance: 92 },
    { name: "Class 10-A", attendance: 96 },
    { name: "Class 10-B", attendance: 94 },
    { name: "Class 11-A", attendance: 90 },
    { name: "Class 12-B", attendance: 88 },
  ]

  // Mock detailed attendance data
  const detailedAttendanceData = [
    { class: "Class 9-A", present: 28, absent: 2, leave: 1, total: 31, percentage: 96 },
    { class: "Class 9-B", present: 26, absent: 3, leave: 0, total: 29, percentage: 92 },
    { class: "Class 10-A", present: 31, absent: 1, leave: 0, total: 32, percentage: 98 },
    { class: "Class 10-B", present: 26, absent: 2, leave: 0, total: 28, percentage: 94 },
    { class: "Class 11-A", present: 23, absent: 3, leave: 0, total: 26, percentage: 90 },
    { class: "Class 12-B", present: 21, absent: 3, leave: 0, total: 24, percentage: 88 },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="chart">
        <TabsList>
          <TabsTrigger value="chart">Chart View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
        </TabsList>
        <TabsContent value="chart" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Rate by Class</CardTitle>
              <CardDescription>
                Average attendance rate for{" "}
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
                  <BarChart data={attendanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, "Attendance"]} />
                    <Legend />
                    <Bar dataKey="attendance" name="Attendance Rate (%)" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="table" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Attendance Report</CardTitle>
              <CardDescription>
                Detailed attendance statistics for{" "}
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
                    <TableHead>Present</TableHead>
                    <TableHead>Absent</TableHead>
                    <TableHead>On Leave</TableHead>
                    <TableHead>Total Students</TableHead>
                    <TableHead>Attendance %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {detailedAttendanceData.map((row) => (
                    <TableRow key={row.class}>
                      <TableCell className="font-medium">{row.class}</TableCell>
                      <TableCell>{row.present}</TableCell>
                      <TableCell>{row.absent}</TableCell>
                      <TableCell>{row.leave}</TableCell>
                      <TableCell>{row.total}</TableCell>
                      <TableCell>{row.percentage}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

