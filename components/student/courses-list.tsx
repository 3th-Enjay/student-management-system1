"use client"

import { motion } from "framer-motion"
import { BookOpen, User, Calendar, ChevronRight, History, ClockIcon } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface StudentCoursesListProps {
  searchQuery: string
  status: "current" | "previous" | "requested"
}

export default function StudentCoursesList({ searchQuery, status }: StudentCoursesListProps) {
  // Mock data
  const currentCourses = [
    {
      id: 1,
      name: "Mathematics",
      code: "MATH101",
      teacher: "Dr. Sarah Johnson",
      progress: 75,
      schedule: "Mon, Wed, Fri - 9:00 AM",
      grade: "A-",
      status: "active",
      color: "border-blue-500",
    },
    {
      id: 2,
      name: "Science",
      code: "SCI102",
      teacher: "Prof. Michael Thompson",
      progress: 60,
      schedule: "Tue, Thu - 11:00 AM",
      grade: "B+",
      status: "active",
      color: "border-green-500",
    },
    {
      id: 3,
      name: "English Literature",
      code: "ENG103",
      teacher: "Ms. Jennifer Rodriguez",
      progress: 85,
      schedule: "Mon, Wed - 1:00 PM",
      grade: "A",
      status: "active",
      color: "border-purple-500",
    },
    {
      id: 4,
      name: "History",
      code: "HIS104",
      teacher: "Mr. Robert Wilson",
      progress: 45,
      schedule: "Tue, Fri - 2:00 PM",
      grade: "B",
      status: "active",
      color: "border-amber-500",
    },
  ]

  const previousCourses = [
    {
      id: 5,
      name: "Geography",
      code: "GEO105",
      teacher: "Mrs. Emily Davis",
      progress: 100,
      schedule: "Last Term",
      grade: "A-",
      status: "completed",
      color: "border-gray-500",
    },
    {
      id: 6,
      name: "Physics",
      code: "PHY106",
      teacher: "Dr. Daniel Brown",
      progress: 100,
      schedule: "Last Term",
      grade: "B+",
      status: "completed",
      color: "border-gray-500",
    },
  ]

  const requestedCourses = [
    {
      id: 7,
      name: "Advanced Mathematics",
      code: "MATH201",
      teacher: "TBD",
      progress: 0,
      schedule: "Next Term",
      status: "pending",
      color: "border-yellow-500",
    },
    {
      id: 8,
      name: "Computer Science",
      code: "CS101",
      teacher: "TBD",
      progress: 0,
      schedule: "Next Term",
      status: "pending",
      color: "border-yellow-500",
    },
  ]

  let coursesToDisplay = []
  if (status === "current") coursesToDisplay = currentCourses
  else if (status === "previous") coursesToDisplay = previousCourses
  else coursesToDisplay = requestedCourses

  // Filter courses based on search query
  const filteredCourses = coursesToDisplay.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (filteredCourses.length === 0) {
    return (
      <div className="text-center py-10">
        <BookOpen className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
        <h3 className="text-lg font-medium">No courses found</h3>
        <p className="text-sm text-muted-foreground">
          {status === "current"
            ? "You are not enrolled in any courses this term."
            : status === "previous"
              ? "You have no previous course history."
              : "You have no requested courses."}
        </p>
      </div>
    )
  }

  return (
    <motion.div className="grid gap-6 md:grid-cols-2" variants={container} initial="hidden" animate="show">
      {filteredCourses.map((course) => (
        <motion.div
          key={course.id}
          variants={item}
          className={`border-l-4 ${course.color} rounded-lg p-5 bg-card shadow-sm`}
        >
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">{course.name}</h3>
                <p className="text-sm text-muted-foreground">{course.code}</p>
              </div>
              {status === "current" && course.grade && (
                <Badge className="bg-primary/10 text-primary">{course.grade}</Badge>
              )}
              {status === "previous" && course.grade && (
                <Badge className="bg-primary/10 text-primary">{course.grade}</Badge>
              )}
              {status === "requested" && <Badge className="bg-yellow-500/10 text-yellow-500">Pending</Badge>}
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              {status === "current" || status === "previous" ? (
                <User className="h-3.5 w-3.5 mr-1" />
              ) : (
                <ClockIcon className="h-3.5 w-3.5 mr-1" />
              )}
              <span>{course.teacher}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              {status === "current" ? (
                <Calendar className="h-3.5 w-3.5 mr-1" />
              ) : (
                <History className="h-3.5 w-3.5 mr-1" />
              )}
              <span>{course.schedule}</span>
            </div>

            {status === "current" && (
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            )}

            <div className="flex justify-between">
              {status === "requested" ? (
                <Button variant="outline" size="sm" className="text-red-500">
                  Cancel Request
                </Button>
              ) : (
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Materials
                </Button>
              )}
              <Button size="sm">
                View Course
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

