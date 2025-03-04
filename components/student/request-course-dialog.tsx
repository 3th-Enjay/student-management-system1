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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RequestCourseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function RequestCourseDialog({ open, onOpenChange }: RequestCourseDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Request New Course</DialogTitle>
          <DialogDescription>Fill out this form to request enrollment in a new course.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="courseType">Request Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select request type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="add">Add New Course</SelectItem>
                <SelectItem value="drop">Drop Existing Course</SelectItem>
                <SelectItem value="change">Change Course Section</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MATH201">MATH201 - Advanced Mathematics</SelectItem>
                <SelectItem value="CS101">CS101 - Introduction to Computer Science</SelectItem>
                <SelectItem value="BIO101">BIO101 - Biology</SelectItem>
                <SelectItem value="CHEM101">CHEM101 - Chemistry</SelectItem>
                <SelectItem value="PHYS101">PHYS101 - Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="term">Term</Label>
            <Select defaultValue="next">
              <SelectTrigger>
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Term</SelectItem>
                <SelectItem value="next">Next Term</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Request</Label>
            <Textarea id="reason" placeholder="Please explain why you want to take this course..." rows={3} />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

