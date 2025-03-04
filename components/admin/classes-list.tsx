"use client"

import { motion } from "framer-motion"
import { Edit, Trash, Users, BookOpen, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdminClassesListProps {
  gradeFilter: string
  searchQuery: string
  status: "active" | "archived"
}

export default function AdminClassesList({ gradeFilter, searchQuery, status }: AdminClassesListProps) {
  // Mock classes data
  const classes = [
    {
      id: 1,
      name: "Class 10-A",
      grade: "10",
      section: "A",
      teacher: "Dr. Sarah Johnson",
      students: 32,
      room: "Room 101",
      status: "active",
      color: "border-blue-500",
    },
    {
      id: 2,
      name: "Class 10-B",
      grade: "10",
      section: "B",
      teacher: "Prof. Michael Thompson",
      students: 28,
      room: "Room 102",
      status: "active",
      color: "border-green-500",
    },
    {
      id: 3,
      name: "Class 9-A",
      grade: "9",
      section: "A",
      teacher: "Ms. Jennifer Rodriguez",
      students: 30,
      room: "Room 103",
      status: "active",
      color: "border-purple-500",
    },
    {
      id: 4,
      name: "Class 9-B",
      grade: "9",
      section: "B",
      teacher: "Mr. Robert Wilson",
      students: 29,
      room: "Room 104",
      status: "active",
      color: "border-amber-500",
    },
    {
      id: 5,
      name: "Class 11-A",
      grade: "11",
      section: "A",
      teacher: "Mrs. Emily Davis",
      students: 26,
      room: "Room 201",
      status: "active",
      color: "border-red-500",
    },
    {
      id: 6,
      name: "Class 12-B",
      grade: "12",
      section: "B",
      teacher: "Dr. David Miller",
      students: 24,
      room: "Room 202",
      status: "active",
      color: "border-blue-500",
    },
    {
      id: 7,
      name: "Class 8-A",
      grade: "8",
      section: "A",
      teacher: "Ms. Laura Johnson",
      students: 0,
      room: "Room 105",
      status: "archived",
      color: "border-gray-500",
    },
    {
      id: 8,
      name: "Class 7-B",
      grade: "7",
      section: "B",
      teacher: "Mr. James Smith",
      students: 0,
      room: "Room 106",
      status: "archived",
      color: "border-gray-500",
    },
  ]

  // Filter classes based on gradeFilter, searchQuery, and status
  const filteredClasses = classes.filter((cls) => {
    // Filter by status
    if (cls.status !== status) return false

    // Filter by grade
    if (gradeFilter !== "all" && cls.grade !== gradeFilter) return false

    // Filter by search query
    if (searchQuery && !cls.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

    return true
  })

  return (
    <div className="space-y-4">
      {filteredClasses.length === 0 ? (
        <div className="text-center py-10">
          <BookOpen className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
          <h3 className="text-lg font-medium">No classes found</h3>
          <p className="text-sm text-muted-foreground">
            {status === "active"
              ? "There are no active classes matching your criteria."
              : "There are no archived classes matching your criteria."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredClasses.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className={`border-l-4 ${cls.color} rounded-lg p-4 bg-card shadow-sm`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{cls.name}</h3>
                  <div className="flex flex-col text-sm text-muted-foreground mt-1">
                    <p>Teacher: {cls.teacher}</p>
                    <div className="flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1" />
                      <span>{cls.students} students</span>
                    </div>
                    <p>Room: {cls.room}</p>
                  </div>
                  {cls.status === "archived" && (
                    <Badge className="mt-2" variant="outline">
                      Archived
                    </Badge>
                  )}
                </div>
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
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Class
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="h-4 w-4 mr-2" />
                      Manage Students
                    </DropdownMenuItem>
                    {cls.status === "active" ? (
                      <DropdownMenuItem>
                        <BookOpen className="h-4 w-4 mr-2" />
                        Archive Class
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem>
                        <BookOpen className="h-4 w-4 mr-2" />
                        Restore Class
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">
                      <Trash className="h-4 w-4 mr-2" />
                      Delete Class
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

