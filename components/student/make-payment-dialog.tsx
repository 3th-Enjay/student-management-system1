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
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, DollarSign } from "lucide-react"

interface MakePaymentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function MakePaymentDialog({ open, onOpenChange }: MakePaymentDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Make a Payment</DialogTitle>
          <DialogDescription>Pay your fees securely online.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="paymentFor">Payment For</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select fee type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tuition">Tuition Fee - $1,200.00</SelectItem>
                <SelectItem value="lab">Laboratory Fee - $75.00</SelectItem>
                <SelectItem value="activities">Extracurricular Activities - $120.00</SelectItem>
                <SelectItem value="other">Other Fees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="card">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card">
                <CreditCard className="h-4 w-4 mr-2" />
                Credit Card
              </TabsTrigger>
              <TabsTrigger value="bank">
                <DollarSign className="h-4 w-4 mr-2" />
                Bank Transfer
              </TabsTrigger>
            </TabsList>
            <TabsContent value="card" className="space-y-4">
              <div className="space-y-2">
                <Label>Card Type</Label>
                <RadioGroup defaultValue="visa" className="flex space-x-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="visa" id="visa" />
                    <Label htmlFor="visa">Visa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mastercard" id="mastercard" />
                    <Label htmlFor="mastercard">Mastercard</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="amex" id="amex" />
                    <Label htmlFor="amex">American Express</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="border rounded-md p-2">•••• •••• •••• 4242</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <div className="border rounded-md p-2">04/25</div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <div className="border rounded-md p-2">•••</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bank" className="space-y-4">
              <div className="rounded-md bg-muted/50 p-4 text-sm">
                <p className="font-medium">Bank Transfer Instructions</p>
                <p className="mt-2 text-muted-foreground">Please use the following details to make a bank transfer:</p>
                <div className="mt-2 space-y-1">
                  <p>
                    <span className="font-medium">Bank Name:</span> Example Bank
                  </p>
                  <p>
                    <span className="font-medium">Account Name:</span> EduHub School
                  </p>
                  <p>
                    <span className="font-medium">Account Number:</span> 1234567890
                  </p>
                  <p>
                    <span className="font-medium">Routing Number:</span> 987654321
                  </p>
                  <p>
                    <span className="font-medium">Reference:</span> Your Student ID (ST-2023-001)
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                After making the transfer, please allow 2-3 business days for processing.
              </p>
            </TabsContent>
          </Tabs>

          <Separator />

          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal:</span>
            <span>$1,200.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Processing Fee:</span>
            <span>$0.00</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>$1,200.00</span>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Complete Payment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

