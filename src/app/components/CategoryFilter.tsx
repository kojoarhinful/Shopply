"use client"

import { Button } from "@/components/ui/button"

const categories = ["All", "New Arrivals", "Furniture", "Accessories", "Lighting"]

export default function CategoryFilter() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button key={category} variant="outline" className="rounded-full whitespace-nowrap">
          {category}
        </Button>
      ))}
    </div>
  )
}

