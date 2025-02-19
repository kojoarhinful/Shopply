"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates in your inbox.",
    })
    setEmail("")
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Subscribe to our newsletter for exclusive offers and new product updates.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full"
            required
          />
          <Button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-700">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

