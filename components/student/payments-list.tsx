"use client"

import { motion } from "framer-motion"
import { Download, Eye, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface StudentPaymentsListProps {
  typeFilter: string
  searchQuery: string
  statusFilter: string
}

export default function StudentPaymentsList({ typeFilter, searchQuery, statusFilter }: StudentPaymentsListProps) {
  // Mock payments data
  const payments = [
    {
      id: "INV-001",
      description: "First Term Tuition Fee",
      type: "tuition",
      amount: "$1,200.00",
      date: "Jan 15, 2025",
      dueDate: "Jan 15, 2025",
      status: "paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-002",
      description: "Library Fee",
      type: "library",
      amount: "$50.00",
      date: "Jan 20, 2025",
      dueDate: "Jan 20, 2025",
      status: "paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-003",
      description: "Laboratory Fee",
      type: "lab",
      amount: "$75.00",
      date: "Jan 25, 2025",
      dueDate: "Jan 25, 2025",
      status: "paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-004",
      description: "Second Term Tuition Fee",
      type: "tuition",
      amount: "$1,200.00",
      date: "Mar 10, 2025",
      dueDate: "Mar 25, 2025",
      status: "pending",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      id: "INV-005",
      description: "Extracurricular Activities",
      type: "other",
      amount: "$120.00",
      date: "Mar 15, 2025",
      dueDate: "Mar 30, 2025",
      status: "pending",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
  ]

  // Filter payments based on filters
  const filteredPayments = payments.filter((payment) => {
    // Filter by status
    if (statusFilter !== "all" && payment.status !== statusFilter) return false

    // Filter by type
    if (typeFilter !== "all" && payment.type !== typeFilter) return false

    // Filter by search query
    if (
      searchQuery &&
      !payment.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !payment.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false

    return true
  })

  return (
    <div className="space-y-4">
      {filteredPayments.length === 0 ? (
        <div className="text-center py-10">
          <Receipt className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
          <h3 className="text-lg font-medium">No payments found</h3>
          <p className="text-sm text-muted-foreground">There are no payments matching your criteria.</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment, index) => (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.description}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.dueDate}</TableCell>
                  <TableCell>
                    <Badge className={payment.statusColor}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {payment.status === "paid" ? (
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download Receipt</span>
                      </Button>
                    ) : payment.status === "pending" ? (
                      <Button variant="outline" size="sm">
                        Pay Now
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View Details</span>
                      </Button>
                    )}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

