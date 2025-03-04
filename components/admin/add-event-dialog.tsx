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

interface AddEventDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AddEventDialog({ open, onOpenChange }: AddEventDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
          <DialogDescription>Fill in the details to create a new school event.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="eventTitle">Event Title</Label>
            <Input id="eventTitle" placeholder="Enter event title" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventDate">Date</Label>
              <Input id="eventDate" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eventTime">Time</Label>
              <Input id="eventTime" type="time" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventLocation">Location</Label>
            <Input id="eventLocation" placeholder="Enter event location" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType">Event Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
                <SelectItem value="holiday">Holiday</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter event description" rows={3} required />
          </div>

          <div className="space-y-2">
            <Label>Participants</Label>
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

          <div className="flex items-center space-x-2">
            <Checkbox id="sendNotification" />
            <Label htmlFor="sendNotification">Send notification to participants</Label>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

