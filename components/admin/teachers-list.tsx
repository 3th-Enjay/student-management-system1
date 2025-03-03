"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminTeachersList() {
  const teachers = [
    {
      id: "TCH-2023-001",
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      email: "sarah.johnson@example.com",
      status: "Active",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "TCH-2023-002",
      name: "Prof. Michael Thompson",
      subject: "Science",
      email: "michael.thompson@example.com",
      status: "Active",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "TCH-2023-003",
      name: "Ms. Jennifer Rodriguez",
      subject: "English",
      email: "jennifer.rodriguez@example.com",
      status: "Active",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: "TCH-2023-004",
      name: "Mr. Robert Wilson",
      subject: "History",
      email: "robert.wilson@example.com",
      status: "On Leave",
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      id: "TCH-2023-005",
      name: "Mrs. Emily Davis",
      subject: "Geography",
      email: "emily.davis@example.com",
      status: "Active",
      statusColor: "bg-green-500/10 text-green-500",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search teachers..." className="pl-8" />
        </div>
        <Button>Add New Teacher</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map((teacher, index) => (
              <motion.tr
                key={teacher.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <TableCell className="font-medium">{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>
                  <Badge className={teacher.statusColor}>{teacher.status}</Badge>
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
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Assign Classes</DropdownMenuItem>
                      <DropdownMenuItem>View Schedule</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-500">Deactivate</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Showing 5 of 64 teachers</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

