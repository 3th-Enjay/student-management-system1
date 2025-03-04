"use client"

import { useState } from "react"

export default function StudentMessagesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isComposeMessageOpen, setIsComposeMessageOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedFolder, setSelectedFolder] = useState<string>("inbox")
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return\

