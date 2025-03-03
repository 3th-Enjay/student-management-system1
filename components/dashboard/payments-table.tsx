"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function DashboardPaymentsTable() {
  const payments = [
    {
      id: "INV-001",
      student: "Jane Cooper",
      studentId: "ST-2023-001",
      amount: "$420.00",
      date: "Mar 2, 2025",
      status: "Paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-002",
      student: "Cody Fisher",
      studentId: "ST-2023-014",
      amount: "$180.00",
      date: "Mar 1, 2025",
      status: "Paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-003",
      student: "Esther Howard",
      studentId: "ST-2023-032",
      amount: "$320.00",
      date: "Feb 28, 2025",
      status: "Pending",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      id: "INV-004",
      student: "Cameron Williamson",
      studentId: "ST-2023-008",
      amount: "$420.00",
      date: "Feb 25, 2025",
      status: "Overdue",
      statusColor: "bg-red-500/10 text-red-500",
    },
    {
      id: "INV-005",
      student: "Brooklyn Simmons",
      studentId: "ST-2023-025",
      amount: "$180.00",
      date: "Feb 22, 2025",
      status: "Paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment, index) => (
            <motion.tr
              key={payment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <TableCell className="font-medium">{payment.id}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{payment.student}</p>
                  <p className="text-xs text-muted-foreground">{payment.studentId}</p>
                </div>
              </TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>
                <Badge className={payment.statusColor}>{payment.status}</Badge>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

