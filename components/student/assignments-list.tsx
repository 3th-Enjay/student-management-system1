"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, Clock, Eye, Upload, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface StudentAssignmentsListProps {
  subjectFilter: string
  searchQuery: string
  statusFilter: string
  onViewAssignment: (id: number) => void
}

export default function StudentAssignmentsList({
  subjectFilter,
  searchQuery,
  statusFilter,
  onViewAssignment,
}: StudentAssignmentsListProps) {
  // Mock data
  const assignments = [
    {
      id: 1,
      title: "Algebra Problem Set",
      subject: "mathematics",
      subjectName: "Mathematics",
      teacher: "Dr. Sarah Johnson",
      description: "Complete problems 1-20 in Chapter 5",
      assignedDate: "Mar 10, 2025",
      dueDate: "Mar 18, 2025",
      daysLeft: 2,
      status: "pending",
      progress: 0,
      grade: null,
      comments: null,
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      id: 2,
      title: "Chemical Reactions Lab Report",
      subject: "science",
      subjectName: "Science",
      teacher: "Prof. Michael Thompson",
      description: "Write a lab report on the chemical reactions observed in class",
      assignedDate: "Mar 8, 2025",
      dueDate: "Mar 20, 2025",
      daysLeft: 4,
      status: "pending",
      progress: 45,
      grade: null,
      comments: null,
      statusColor: "bg-yellow-500/10 text-yellow-500",
    },
    {
      id: 3,
      title: "Literary Analysis Essay",
      subject: "english",
      subjectName: "English",
      teacher: "Ms. Jennifer Rodriguez",
      description: "Write a 5-page analysis of 'To Kill a Mockingbird'",
      assignedDate: "Mar 5, 2025",
      dueDate: "Mar 22, 2025",
      daysLeft: 6,
      status: "submitted",
      progress: 100,
      grade: null,
      comments: null,
      statusColor: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 4,
      title: "World War II Research Paper",
      subject: "history",
      subjectName: "History",
      teacher: "Mr. Robert Wilson",
      description: "Write a research paper on a specific aspect of World War II",
      assignedDate: "Feb 25, 2025",
      dueDate: "Mar 15, 2025",
      daysLeft: 0,
      status: "submitted",
      progress: 100,
      grade: null,
      comments: null,
      statusColor: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 5,
      title: "Python Programming Assignment",
      subject: "computer",
      subjectName: "Computer Science",
      teacher: "Mrs. Emily Davis",
      description: "Create a simple game using Python",
      assignedDate: "Feb 20, 2025",
      dueDate: "Mar 10, 2025",
      daysLeft: 0,
      status: "graded",
      progress: 100,
      grade: "A",
      comments: "Excellent work! Your code is clean and well-commented.",
      statusColor: "bg-green-500/10 text-green-500",
    },
    {
      id: 6,
      title: "Geometry Problem Set",
      subject: "mathematics",
      subjectName: "Mathematics",
      teacher: "Dr. Sarah Johnson",
      description: "Complete problems 1-15 in Chapter 7",
      assignedDate: "Feb 15, 2025",
      dueDate: "Mar 1, 2025",
      daysLeft: 0,
      status: "graded",
      progress: 100,
      grade: "B+",
      comments: "Good work, but some calculation errors in problems 10 and 12.",
      statusColor: "bg-green-500/10 text-green-500",
    },
  ]

  // Filter assignments based on filters
  const filteredAssignments = assignments.filter((assignment) => {
    // Filter by status
    if (statusFilter !== "all" && assignment.status !== statusFilter) return false

    // Filter by subject
    if (subjectFilter !== "all" && assignment.subject !== subjectFilter) return false

    // Filter by search query
    if (
      searchQuery &&
      !assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !assignment.subject.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false

    return true
  })

  if (filteredAssignments.length === 0) {
    return (
      <div className="text-center py-10">
        <FileText className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
        <h3 className="text-lg font-medium">No assignments found</h3>
        <p className="text-sm text-muted-foreground">
          {statusFilter === "pending"
            ? "You have no pending assignments at the moment."
            : statusFilter === "submitted"
              ? "You have not submitted any assignments yet."
              : statusFilter === "graded"
                ? "You have no graded assignments yet."
                : "No assignments match your search criteria."}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {filteredAssignments.map((assignment, index) => (
        <motion.div
          key={assignment.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="flex flex-col gap-3 p-4 border rounded-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{assignment.title}</h3>
                <p className="text-sm text-muted-foreground">{assignment.subjectName}</p>
              </div>
            </div>
            <Badge className={assignment.statusColor}>
              {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground">{assignment.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">Due: {assignment.dueDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">
                {assignment.daysLeft > 0 ? `${assignment.daysLeft} days left` : "Past due"}
              </span>
            </div>
            {assignment.status === "graded" && (
              <div className="flex items-center">
                <Award className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">Grade: {assignment.grade}</span>
              </div>
            )}
          </div>

          {assignment.status === "pending" && (
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{assignment.progress}%</span>
              </div>
              <Progress value={assignment.progress} className="h-2" />
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button size="sm" variant="outline" onClick={() => onViewAssignment(assignment.id)}>
              <Eye className="h-3.5 w-3.5 mr-1" />
              View Details
            </Button>
            {assignment.status === "pending" && (
              <Button size="sm">
                <Upload className="h-3.5 w-3.5 mr-1" />
                Submit
              </Button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

