"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="search"
        placeholder="Search products..."
        className="w-full pl-10 py-6 text-lg rounded-full border-gray-200 focus:border-blue-500 transition-colors"
      />
    </div>
  )
}

