"use client"

import { motion } from "framer-motion"
import { Download, Eye, Send, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdminPaymentsListProps {
  statusFilter: string
  searchQuery: string
}

export default function AdminPaymentsList({ statusFilter, searchQuery }: AdminPaymentsListProps) {
  // Mock payments data
  const payments = [
    {
      id: "INV-001",
      student: "Jane Cooper",
      studentId: "ST-2023-001",
      description: "First Term Tuition Fee",
      amount: "$1,200.00",
      date: "Mar 2, 2025",
      status: "paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-002",
      student: "Cody Fisher",
      studentId: "ST-2023-014",
      description: "Library Fee",
      amount: "$50.00",
      date: "Mar 1, 2025",
      status: "paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-003",
      student: "Esther Howard",
      studentId: "ST-2023-032",
      description: "Laboratory Fee",
      amount: "$75.00",
      date: "Feb 28, 2025",
      status: "pending",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      id: "INV-004",
      student: "Cameron Williamson",
      studentId: "ST-2023-008",
      description: "Second Term Tuition Fee",
      amount: "$1,200.00",
      date: "Feb 25, 2025",
      status: "overdue",
      statusColor: "bg-red-500/10 text-red-500",
    },
    {
      id: "INV-005",
      student: "Brooklyn Simmons",
      studentId: "ST-2023-025",
      description: "Extracurricular Activities",
      amount: "$120.00",
      date: "Feb 22, 2025",
      status: "paid",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "INV-006",
      student: "Leslie Alexander",
      studentId: "ST-2023-019",
      description: "Transportation Fee",
      amount: "$200.00",
      date: "Feb 20, 2025",
      status: "cancelled",
      statusColor: "bg-gray-500/10 text-gray-500",
    },
  ]

  // Filter payments based on statusFilter and searchQuery
  const filteredPayments = payments.filter((payment) => {
    // Filter by status
    if (statusFilter !== "all" && payment.status !== statusFilter) return false

    // Filter by search query
    if (
      searchQuery &&
      !payment.student.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !payment.studentId.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !payment.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false

    return true
  })

  return (
    <div className="space-y-4">
      {filteredPayments.length === 0 ? (
        <div className="text-center py-10">
          <Download className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
          <h3 className="text-lg font-medium">No payments found</h3>
          <p className="text-sm text-muted-foreground">There are no payments matching your criteria.</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
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
                  <TableCell>
                    <div>
                      <p className="font-medium">{payment.student}</p>
                      <p className="text-xs text-muted-foreground">{payment.studentId}</p>
                    </div>
                  </TableCell>
                  <TableCell>{payment.description}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>
                    <Badge className={payment.statusColor}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        {payment.status === "paid" && (
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download Receipt
                          </DropdownMenuItem>
                        )}
                        {(payment.status === "pending" || payment.status === "overdue") && (
                          <DropdownMenuItem>
                            <Send className="h-4 w-4 mr-2" />
                            Send Reminder
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        {payment.status !== "cancelled" && (
                          <DropdownMenuItem className="text-red-500">Cancel Payment</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
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

