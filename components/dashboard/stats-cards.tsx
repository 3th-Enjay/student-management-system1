"use client"

import { motion } from "framer-motion"
import { Users, CreditCard, Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardStatsCards() {
  const statsData = [
    {
      title: "Total Students",
      value: "1,248",
      description: "+12% from last month",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
      color: "bg-blue-500/10",
    },
    {
      title: "Fee Collection",
      value: "$56,289",
      description: "92% collection rate",
      icon: <CreditCard className="h-5 w-5 text-muted-foreground" />,
      color: "bg-green-500/10",
    },
    {
      title: "Upcoming Events",
      value: "8",
      description: "Next: Career Fair (2 days)",
      icon: <Calendar className="h-5 w-5 text-muted-foreground" />,
      color: "bg-purple-500/10",
    },
    {
      title: "Attendance Rate",
      value: "94.2%",
      description: "Last 30 days average",
      icon: <Clock className="h-5 w-5 text-muted-foreground" />,
      color: "bg-amber-500/10",
    },
  ]

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

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {statsData.map((stat, index) => (
        <motion.div key={index} variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`${stat.color} p-2 rounded-full`}>{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

