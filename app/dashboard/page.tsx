"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, CreditCard, User, FileText, Bell, BarChart3, MessageSquare, Settings, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardStatsCards from "@/components/dashboard/stats-cards"
import DashboardEventsList from "@/components/dashboard/events-list"
import DashboardPaymentsTable from "@/components/dashboard/payments-table"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const sidebarItems = [
    { icon: <Home className="mr-2 h-4 w-4" />, label: "Dashboard", href: "/dashboard" },
    { icon: <User className="mr-2 h-4 w-4" />, label: "Students", href: "/dashboard/students" },
    { icon: <CreditCard className="mr-2 h-4 w-4" />, label: "Payments", href: "/dashboard/payments" },
    { icon: <Calendar className="mr-2 h-4 w-4" />, label: "Events", href: "/dashboard/events" },
    { icon: <FileText className="mr-2 h-4 w-4" />, label: "Academic Records", href: "/dashboard/records" },
    { icon: <BarChart3 className="mr-2 h-4 w-4" />, label: "Reports", href: "/dashboard/reports" },
    { icon: <MessageSquare className="mr-2 h-4 w-4" />, label: "Messages", href: "/dashboard/messages" },
    { icon: <Settings className="mr-2 h-4 w-4" />, label: "Settings", href: "/dashboard/settings" },
  ]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <motion.aside
        className="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r shadow-sm"
        initial={{ x: 0 }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-1 rounded-md">
              <span className="font-bold text-xl">EduHub</span>
            </div>
          </Link>
        </div>

        <div className="py-4">
          <motion.div className="space-y-1 px-3" variants={container} initial="hidden" animate="show">
            {sidebarItems.map((item, index) => (
              <motion.div key={index} variants={item}>
                <Link href={item.href}>
                  <Button variant={item.href === "/dashboard" ? "secondary" : "ghost"} className="w-full justify-start">
                    {item.icon}
                    {item.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className={`flex flex-col flex-1 ${isSidebarOpen ? "ml-64" : ""}`}>
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between h-full px-6">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground">Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <motion.main
          className="flex-1 overflow-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, John. Here's an overview of your school system.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <DashboardStatsCards />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Tabs defaultValue="payments">
                <TabsList className="mb-4">
                  <TabsTrigger value="payments">Recent Payments</TabsTrigger>
                  <TabsTrigger value="registrations">New Registrations</TabsTrigger>
                </TabsList>
                <TabsContent value="payments">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Payments</CardTitle>
                      <CardDescription>A list of recent payments made by students</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DashboardPaymentsTable />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="registrations">
                  <Card>
                    <CardHeader>
                      <CardTitle>New Registrations</CardTitle>
                      <CardDescription>Students who recently registered</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">No new registrations in the last 7 days.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>School events and important dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <DashboardEventsList />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

