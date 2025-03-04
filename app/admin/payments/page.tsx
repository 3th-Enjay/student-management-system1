"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Plus, Download, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import AdminPaymentsList from "@/components/admin/payments-list"
import AddPaymentDialog from "@/components/admin/add-payment-dialog"

export default function AdminPaymentsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AdminSidebar isOpen={isSidebarOpen} />

      <div className={`flex flex-col flex-1 ${isSidebarOpen ? "md:ml-64" : ""}`}>
        <AdminHeader toggleSidebar={toggleSidebar} />

        <motion.main
          className="flex-1 overflow-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
                <p className="text-muted-foreground">Manage student fees and payment records</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsAddPaymentOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$256,789.00</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$42,560.00</div>
                  <p className="text-xs text-muted-foreground">15 students with pending payments</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">+2% from last term</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Payment Records</CardTitle>
                <CardDescription>View and manage all payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList>
                      <TabsTrigger value="all">All Payments</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="overdue">Overdue</TabsTrigger>
                    </TabsList>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search payments..."
                          className="pl-8 w-full sm:w-[200px]"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Statuses</SelectItem>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="overdue">Overdue</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <TabsContent value="all">
                    <AdminPaymentsList statusFilter={selectedStatus} searchQuery={searchQuery} />
                  </TabsContent>
                  <TabsContent value="pending">
                    <AdminPaymentsList statusFilter="pending" searchQuery={searchQuery} />
                  </TabsContent>
                  <TabsContent value="overdue">
                    <AdminPaymentsList statusFilter="overdue" searchQuery={searchQuery} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <AddPaymentDialog open={isAddPaymentOpen} onOpenChange={setIsAddPaymentOpen} />
    </div>
  )
}

