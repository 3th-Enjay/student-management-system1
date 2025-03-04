"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, CreditCard, DollarSign, ReceiptIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import StudentSidebar from "@/components/student/sidebar"
import StudentHeader from "@/components/student/header"
import StudentPaymentsList from "@/components/student/payments-list"
import MakePaymentDialog from "@/components/student/make-payment-dialog"

export default function StudentPaymentsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMakePaymentOpen, setIsMakePaymentOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <StudentSidebar isOpen={isSidebarOpen} />

      <div className={`flex flex-col flex-1 ${isSidebarOpen ? "md:ml-64" : ""}`}>
        <StudentHeader toggleSidebar={toggleSidebar} />

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
                <p className="text-muted-foreground">View and manage your tuition and fee payments</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsMakePaymentOpen(true)}>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Make Payment
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,325.00</div>
                  <p className="text-xs text-muted-foreground">For current term</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,200.00</div>
                  <p className="text-xs text-muted-foreground">Due in 15 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Payment History</CardTitle>
                  <ReceiptIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Total transactions</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Payment Records</CardTitle>
                <CardDescription>View all your fee payment records</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <TabsList>
                      <TabsTrigger value="all">All Payments</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
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
                          <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="tuition">Tuition</SelectItem>
                          <SelectItem value="library">Library Fee</SelectItem>
                          <SelectItem value="lab">Laboratory Fee</SelectItem>
                          <SelectItem value="other">Other Fees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <TabsContent value="all">
                    <StudentPaymentsList typeFilter={selectedStatus} searchQuery={searchQuery} statusFilter="all" />
                  </TabsContent>
                  <TabsContent value="pending">
                    <StudentPaymentsList typeFilter={selectedStatus} searchQuery={searchQuery} statusFilter="pending" />
                  </TabsContent>
                  <TabsContent value="completed">
                    <StudentPaymentsList typeFilter={selectedStatus} searchQuery={searchQuery} statusFilter="paid" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>

      <MakePaymentDialog open={isMakePaymentOpen} onOpenChange={setIsMakePaymentOpen} />
    </div>
  )
}

