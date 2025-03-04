"use client"

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
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Calendar, Clock, Download, FileIcon, User, Award } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface ViewAssignmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  assignmentId: number | null
}

export default function ViewAssignmentDialog({ open, onOpenChange, assignmentId }: ViewAssignmentDialogProps) {
  // Mock data - in a real app, you would fetch this based on assignmentId
  const assignment = {
    id: 1,
    title: "Algebra Problem Set",
    subject: "Mathematics",
    code: "MATH101",
    teacher: "Dr. Sarah Johnson",
    description:
      "Complete problems 1-20 in Chapter 5. Show all your work and provide clear explanations for each step of your solutions. Points will be deducted for incomplete work or missing explanations.",
    assignedDate: "Mar 10, 2025",
    dueDate: "Mar 18, 2025",
    daysLeft: 2,
    status: "pending",
    statusColor: "bg-yellow-500/10 text-yellow-500",
    progress: 0,
    grade: null,
    comments: null,
    resources: [
      {
        name: "Chapter 5 - Reference Material.pdf",
        size: "2.4 MB",
        type: "pdf",
      },
      {
        name: "Formula Sheet.pdf",
        size: "1.1 MB",
        type: "pdf",
      },
    ],
    submitted: null,
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle>{assignment.title}</DialogTitle>
            <Badge className={assignment.statusColor}>
              {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
            </Badge>
          </div>
          <DialogDescription>
            {assignment.subject} ({assignment.code})
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label className="text-sm text-muted-foreground">Description</Label>
            <p className="mt-1">{assignment.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <Label className="text-sm text-muted-foreground">Assigned</Label>
              <div className="flex items-center mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{assignment.assignedDate}</span>
              </div>
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Due Date</Label>
              <div className="flex items-center mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{assignment.dueDate}</span>
              </div>
            </div>
            <div>
              <Label className="text-sm text-muted-foreground">Time Remaining</Label>
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{assignment.daysLeft > 0 ? `${assignment.daysLeft} days left` : "Past due"}</span>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm text-muted-foreground">Teacher</Label>
            <div className="flex items-center mt-1">
              <User className="h-4 w-4 mr-1" />
              <span>{assignment.teacher}</span>
            </div>
          </div>

          {assignment.status === "graded" && (
            <div>
              <Label className="text-sm text-muted-foreground">Grade</Label>
              <div className="flex items-center mt-1">
                <Award className="h-4 w-4 mr-1" />
                <span className="font-medium">{assignment.grade}</span>
              </div>
              {assignment.comments && (
                <div className="mt-2 text-sm">
                  <Label className="text-sm text-muted-foreground">Teacher Comments</Label>
                  <p className="mt-1 p-2 bg-muted/50 rounded-md">{assignment.comments}</p>
                </div>
              )}
            </div>
          )}

          {assignment.status === "pending" && (
            <div className="space-y-1">
              <Label className="text-sm text-muted-foreground">Progress</Label>
              <div className="flex justify-between text-sm">
                <span>Completion</span>
                <span className="font-medium">{assignment.progress}%</span>
              </div>
              <Progress value={assignment.progress} className="h-2" />
            </div>
          )}

          <Separator />

          <div>
            <Label className="text-sm text-muted-foreground">Resources</Label>
            <div className="mt-2 space-y-2">
              {assignment.resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                  <div className="flex items-center gap-2">
                    <FileIcon className="h-4 w-4 text-primary" />
                    <span>{resource.name}</span>
                    <span className="text-xs text-muted-foreground">({resource.size})</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {assignment.submitted && (
            <div>
              <Label className="text-sm text-muted-foreground">Your Submission</Label>
              <div className="mt-2 flex items-center justify-between p-2 border rounded-md">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span>{assignment.submitted.fileName}</span>
                  <span className="text-xs text-muted-foreground">({assignment.submitted.size})</span>
                  <span className="text-xs text-muted-foreground">Submitted on {assignment.submitted.date}</span>
                </div>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          {assignment.status === "pending" && <Button>Submit Assignment</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

