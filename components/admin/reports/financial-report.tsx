"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AdminFinancialReportProps {
  period: string
}

export default function AdminFinancialReport({ period }: AdminFinancialReportProps) {
  // Mock fee collection data
  const feeCollectionData = [
    { name: "Tuition Fee", value: 250000 },
    { name: "Library Fee", value: 15000 },
    { name: "Laboratory Fee", value: 25000 },
    { name: "Transportation Fee", value: 35000 },
    { name: "Extracurricular", value: 20000 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  // Mock payment status data
  const paymentStatusData = [
    { category: "Tuition Fee", collected: 250000, pending: 30000, total: 280000, percentage: 89 },
    { category: "Library Fee", collected: 15000, pending: 2000, total: 17000, percentage: 88 },
    { category: "Laboratory Fee", collected: 25000, pending: 3000, total: 28000, percentage: 89 },
    { category: "Transportation Fee", collected: 35000, pending: 5000, total: 40000, percentage: 88 },
    { category: "Extracurricular", collected: 20000, pending: 4000, total: 24000, percentage: 83 },
  ]

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="distribution">
        <TabsList>
          <TabsTrigger value="distribution">Fee Distribution</TabsTrigger>
          <TabsTrigger value="status">Payment Status</TabsTrigger>
        </TabsList>
        <TabsContent value="distribution" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Fee Collection Distribution</CardTitle>
              <CardDescription>
                Breakdown of fee collection for{" "}
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
                  <PieChart>
                    <Pie
                      data={feeCollectionData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {feeCollectionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [formatCurrency(value as number), "Amount"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="status" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Status Report</CardTitle>
              <CardDescription>
                Detailed payment status for{" "}
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
                    <TableHead>Category</TableHead>
                    <TableHead>Collected</TableHead>
                    <TableHead>Pending</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Collection %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentStatusData.map((row) => (
                    <TableRow key={row.category}>
                      <TableCell className="font-medium">{row.category}</TableCell>
                      <TableCell>{formatCurrency(row.collected)}</TableCell>
                      <TableCell>{formatCurrency(row.pending)}</TableCell>
                      <TableCell>{formatCurrency(row.total)}</TableCell>
                      <TableCell>{row.percentage}%</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-bold">Total</TableCell>
                    <TableCell className="font-bold">
                      {formatCurrency(paymentStatusData.reduce((sum, item) => sum + item.collected, 0))}
                    </TableCell>
                    <TableCell className="font-bold">
                      {formatCurrency(paymentStatusData.reduce((sum, item) => sum + item.pending, 0))}
                    </TableCell>
                    <TableCell className="font-bold">
                      {formatCurrency(paymentStatusData.reduce((sum, item) => sum + item.total, 0))}
                    </TableCell>
                    <TableCell className="font-bold">
                      {Math.round(
                        (paymentStatusData.reduce((sum, item) => sum + item.collected, 0) /
                          paymentStatusData.reduce((sum, item) => sum + item.total, 0)) *
                          100,
                      )}
                      %
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

