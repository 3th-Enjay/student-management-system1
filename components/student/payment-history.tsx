"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function PaymentHistory() {
  const payments = [
    {
      id: "INV-001",
      description: "First Term Tuition Fee",
      amount: "$1,200.00",
      date: "Jan 15, 2025",
      status: "Paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-002",
      description: "Library Fee",
      amount: "$50.00",
      date: "Jan 20, 2025",
      status: "Paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-003",
      description: "Laboratory Fee",
      amount: "$75.00",
      date: "Jan 25, 2025",
      status: "Paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-004",
      description: "Second Term Tuition Fee",
      amount: "$1,200.00",
      date: "Mar 10, 2025",
      status: "Pending",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      id: "INV-005",
      description: "Extracurricular Activities",
      amount: "$120.00",
      date: "Mar 15, 2025",
      status: "Unpaid",
      statusColor: "bg-red-500/10 text-red-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-muted/30 p-4 rounded-lg"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Paid</h3>
          <p className="text-2xl font-bold">$1,325.00</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-muted/30 p-4 rounded-lg"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Pending</h3>
          <p className="text-2xl font-bold">$1,200.00</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-muted/30 p-4 rounded-lg"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Unpaid</h3>
          <p className="text-2xl font-bold">$120.00</p>
        </motion.div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
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
                <TableCell>{payment.description}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <Badge className={payment.statusColor}>{payment.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  {payment.status === "Paid" ? (
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download Receipt</span>
                    </Button>
                  ) : payment.status === "Pending" ? (
                    <Button variant="outline" size="sm">
                      Pay Now
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      Pay Now
                    </Button>
                  )}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

