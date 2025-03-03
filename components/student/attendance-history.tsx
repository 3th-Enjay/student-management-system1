"use client"

import { motion } from "framer-motion"
import { Calendar, Check, X } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AttendanceHistory() {
  const attendanceData = [
    { month: "January", percentage: 96, days: 22, present: 21, absent: 1 },
    { month: "February", percentage: 92, days: 20, present: 18, absent: 2 },
    { month: "March", percentage: 94, days: 23, present: 22, absent: 1 },
  ]

  const recentAttendance = [
    { date: "Mar 15, 2025", day: "Monday", status: "Present", subject: "Mathematics" },
    { date: "Mar 14, 2025", day: "Friday", status: "Present", subject: "Science" },
    { date: "Mar 13, 2025", day: "Thursday", status: "Present", subject: "English" },
    { date: "Mar 12, 2025", day: "Wednesday", status: "Absent", subject: "History" },
    { date: "Mar 11, 2025", day: "Tuesday", status: "Present", subject: "Computer Science" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {attendanceData.map((month, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-muted/30 p-4 rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{month.month}</h3>
              <span className="text-sm text-muted-foreground">{month.days} days</span>
            </div>
            <div className="mb-2">
              <Progress value={month.percentage} className="h-2" />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-500 flex items-center gap-1">
                <Check className="h-3 w-3" /> {month.present} days
              </span>
              <span className="text-red-500 flex items-center gap-1">
                <X className="h-3 w-3" /> {month.absent} days
              </span>
              <span className="font-medium">{month.percentage}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="bg-muted/50 px-4 py-3 font-medium">Recent Attendance</div>
        <div className="divide-y">
          {recentAttendance.map((record, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{record.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {record.day} - {record.subject}
                  </p>
                </div>
              </div>
              <div>
                {record.status === "Present" ? (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                    <Check className="h-3 w-3" /> Present
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-500">
                    <X className="h-3 w-3" /> Absent
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

