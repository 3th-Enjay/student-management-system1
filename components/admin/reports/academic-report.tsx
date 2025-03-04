"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface AdminAcademicReportProps {
  period: string
}

export default function AdminAcademicReport({ period }: AdminAcademicReportProps) {
  // Mock performance trend data
  const performanceTrendData = [
    { month: "Jan", average: 3.2 },
    { month: "Feb", average: 3.4 },
    { month: "Mar", average: 3.3 },
    { month: "Apr", average: 3.5 },
    { month: "May", average: 3.6 },
    { month: "Jun", average: 3.7 },
  ]

  // Mock subject performance data
  const subjectPerformanceData = [
    { subject: "Mathematics", grade: "B+", percentage: 85, status: "Above Average" },
    { subject: "Science", grade: "A-", percentage: 90, status: "Excellent" },
    { subject: "English", grade: "B", percentage: 82, status: "Above Average" },
    { subject: "History", grade: "C+", percentage: 75, status: "Average" },
    { subject: "Geography", grade: "B-", percentage: 80, status: "Above Average" },
    { subject: "Computer Science", grade: "A", percentage: 92, status: "Excellent" },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="trend">
        <TabsList>
          <TabsTrigger value="trend">Performance Trend</TabsTrigger>
          <TabsTrigger value="subjects">Subject Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="trend" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance Trend</CardTitle>
              <CardDescription>
                Average GPA trend for{" "}
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
                  <LineChart data={performanceTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 4]} />
                    <Tooltip formatter={(value) => [value, "Average GPA"]} />
                    <Legend />
                    <Line type="monotone" dataKey="average" name="Average GPA" stroke="#3b82f6" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="subjects" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance Report</CardTitle>
              <CardDescription>
                Performance breakdown by subject for{" "}
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
                    <TableHead>Subject</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjectPerformanceData.map((row) => (
                    <TableRow key={row.subject}>
                      <TableCell className="font-medium">{row.subject}</TableCell>
                      <TableCell>{row.grade}</TableCell>
                      <TableCell>{row.percentage}%</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            row.status === "Excellent"
                              ? "bg-green-500/10 text-green-500"
                              : row.status === "Above Average"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-amber-500/10 text-amber-500"
                          }
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
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

