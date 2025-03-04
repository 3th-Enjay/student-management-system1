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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SendEventNotificationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  eventId: string | null
}

export default function SendEventNotificationDialog({ open, onOpenChange, eventId }: SendEventNotificationDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  // Mock event data - in a real app, you would fetch this based on eventId
  const eventData = {
    title: "Career Fair",
    date: "Mar 18, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Hall",
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Send Event Notification</DialogTitle>
          <DialogDescription>Notify users about this event.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-medium">{eventData.title}</h3>
            <p className="text-sm text-muted-foreground">
              {eventData.date} • {eventData.time} • {eventData.location}
            </p>
          </div>

          <Tabs defaultValue="app">
            <TabsList className="mb-4">
              <TabsTrigger value="app">App Notification</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>

            <TabsContent value="app" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Add any additional information about the event"
                  rows={3}
                  defaultValue={`Please join us for the ${eventData.title} on ${eventData.date}.`}
                />
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emailBody">Email Message</Label>
                <Textarea
                  id="emailBody"
                  placeholder="Enter email body"
                  rows={5}
                  defaultValue={`Dear recipient,

We are pleased to invite you to the ${eventData.title} on ${eventData.date} at ${eventData.time}, which will be held at ${eventData.location}.

Please mark your calendar for this important event.

Best regards,
School Administration`}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-2">
            <Label>Recipients</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="students" defaultChecked />
                <Label htmlFor="students">Students</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="teachers" defaultChecked />
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

