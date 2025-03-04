"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CreateNotificationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CreateNotificationDialog({ open, onOpenChange }: CreateNotificationDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create Notification</DialogTitle>
          <DialogDescription>Send a notification to students, teachers, or parents.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Tabs defaultValue="app">
            <TabsList className="mb-4">
              <TabsTrigger value="app">App Notification</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>

            <TabsContent value="app" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Notification Title</Label>
                <Input id="title" placeholder="Enter notification title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter notification message" rows={3} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Notification Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select notification type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="reminder">Reminder</SelectItem>
                    <SelectItem value="alert">Alert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Email Subject</Label>
                <Input id="subject" placeholder="Enter email subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailBody">Email Body</Label>
                <Textarea id="emailBody" placeholder="Enter email body" rows={5} required />
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-2">
            <Label>Recipients</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="students" />
                <Label htmlFor="students">Students</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="teachers" />
                <Label htmlFor="teachers">Teachers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="parents" />
                <Label htmlFor="parents">Parents</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="staff" />
                <Label htmlFor="staff">Staff</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetClass">Target Class (Optional)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select target class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="10-A">Class 10-A</SelectItem>
                <SelectItem value="10-B">Class 10-B</SelectItem>
                <SelectItem value="9-A">Class 9-A</SelectItem>
                <SelectItem value="9-B">Class 9-B</SelectItem>
                <SelectItem value="11-A">Class 11-A</SelectItem>
                <SelectItem value="12-B">Class 12-B</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="sendNow" defaultChecked />
            <Label htmlFor="sendNow">Send immediately</Label>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Send Notification</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

