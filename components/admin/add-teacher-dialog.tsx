"use client"

import type React from "react"

import { useState } from "react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AddTeacherDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AddTeacherDialog({ open, onOpenChange }: AddTeacherDialogProps) {
  const [activeTab, setActiveTab] = useState("personal")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Teacher</DialogTitle>
          <DialogDescription>Fill in the teacher details to create a new teacher account.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="professional">Professional Info</TabsTrigger>
              <TabsTrigger value="classes">Classes & Subjects</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter address" />
              </div>
            </TabsContent>

            <TabsContent value="professional" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teacherId">Teacher ID</Label>
                  <Input id="teacherId" placeholder="Enter teacher ID" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="joiningDate">Joining Date</Label>
                  <Input id="joiningDate" type="date" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="qualification">Highest Qualification</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience (Years)</Label>
                  <Input id="experience" type="number" min="0" placeholder="Enter years of experience" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" placeholder="Enter specialization" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio/Description</Label>
                <Textarea id="bio" placeholder="Enter brief bio or description" rows={3} />
              </div>
            </TabsContent>

            <TabsContent value="classes" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mainSubject">Main Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select main subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="geography">Geography</SelectItem>
                    <SelectItem value="computer">Computer Science</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalSubjects">Additional Subjects (if any)</Label>
                <Input id="additionalSubjects" placeholder="Enter additional subjects" />
              </div>
              <div className="space-y-2">
                <Label>Assigned Classes</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="class-10a" className="rounded border-gray-300" />
                    <Label htmlFor="class-10a">Class 10-A</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="class-10b" className="rounded border-gray-300" />
                    <Label htmlFor="class-10b">Class 10-B</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="class-9a" className="rounded border-gray-300" />
                    <Label htmlFor="class-9a">Class 9-A</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="class-9b" className="rounded border-gray-300" />
                    <Label htmlFor="class-9b">Class 9-B</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="class-11a" className="rounded border-gray-300" />
                    <Label htmlFor="class-11a">Class 11-A</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="class-12b" className="rounded border-gray-300" />
                    <Label htmlFor="class-12b">Class 12-B</Label>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Teacher</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

