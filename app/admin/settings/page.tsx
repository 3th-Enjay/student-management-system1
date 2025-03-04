"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Lock, Bell, Globe, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"

export default function AdminSettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    // Toggle dark class on document element
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

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
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="profile">
                  <TabsList className="mb-6">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="appearance">Appearance</TabsTrigger>
                  </TabsList>

                  <TabsContent value="profile">
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-2xl font-bold">AD</span>
                            </div>
                            <Button variant="outline" size="sm">
                              Change Avatar
                            </Button>
                          </div>
                        </div>
                        <div className="md:w-2/3 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" defaultValue="Admin" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" defaultValue="User" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="admin@example.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" defaultValue="+1 (555) 123-4567" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                              id="bio"
                              defaultValue="School administrator with 10+ years of experience in educational management."
                              rows={4}
                            />
                          </div>
                          <Button>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="password">
                    <div className="space-y-4 max-w-md">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>
                        <Lock className="h-4 w-4 mr-2" />
                        Update Password
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Email Notifications</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="emailNotifications">Email Notifications</Label>
                              <p className="text-sm text-muted-foreground">Receive email notifications</p>
                            </div>
                            <Switch id="emailNotifications" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="studentRegistrations">Student Registrations</Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications for new student registrations
                              </p>
                            </div>
                            <Switch id="studentRegistrations" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="paymentNotifications">Payment Notifications</Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications for payment activities
                              </p>
                            </div>
                            <Switch id="paymentNotifications" defaultChecked />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">System Notifications</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="systemUpdates">System Updates</Label>
                              <p className="text-sm text-muted-foreground">Receive notifications for system updates</p>
                            </div>
                            <Switch id="systemUpdates" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="securityAlerts">Security Alerts</Label>
                              <p className="text-sm text-muted-foreground">Receive notifications for security alerts</p>
                            </div>
                            <Switch id="securityAlerts" defaultChecked />
                          </div>
                        </div>
                      </div>

                      <Button>
                        <Bell className="h-4 w-4 mr-2" />
                        Save Notification Settings
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="appearance">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Theme</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="darkMode">Dark Mode</Label>
                            <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4 text-muted-foreground" />
                            <Switch id="darkMode" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                            <Moon className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Language</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="language">Display Language</Label>
                            <p className="text-sm text-muted-foreground">Select your preferred language</p>
                          </div>
                          <Select defaultValue="en">
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                              <SelectItem value="zh">Chinese</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button>
                        <Globe className="h-4 w-4 mr-2" />
                        Save Appearance Settings
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

