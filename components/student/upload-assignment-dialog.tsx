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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadCloud } from "lucide-react"

interface UploadAssignmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function UploadAssignmentDialog({ open, onOpenChange }: UploadAssignmentDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Assignment</DialogTitle>
          <DialogDescription>Submit your completed assignment for grading.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="assignment">Assignment</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select assignment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Algebra Problem Set</SelectItem>
                <SelectItem value="2">Chemical Reactions Lab Report</SelectItem>
                <SelectItem value="3">Literary Analysis Essay</SelectItem>
                <SelectItem value="4">World War II Research Paper</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Upload File</Label>
            <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
              <UploadCloud className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Drag & drop file here or click to browse</p>
              <p className="text-xs text-muted-foreground mt-1">
                Supported formats: PDF, DOCX, PPTX, ZIP (Max size: 10MB)
              </p>
              <Input id="file" type="file" className="hidden" accept=".pdf,.docx,.pptx,.zip" />
              <Button type="button" variant="outline" size="sm" className="mt-4">
                Browse Files
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">Comments (Optional)</Label>
            <Textarea id="comments" placeholder="Add any comments or notes for your teacher..." rows={3} />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit Assignment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

