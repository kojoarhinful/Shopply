"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "../context/CartContext"
import Link from "next/link"

export default function Checkout() {
  const { getCartTotal, clearCart } = useCart()
  const [isOrdered, setIsOrdered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment and create an order
    setIsOrdered(true)
    clearCart()
  }

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
          <p className="mb-8">Your order has been placed successfully.</p>
          <Link
            href="/"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            NightOwl Market
          </Link>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
              Shipping Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
            ></textarea>
          </div>
          <div className="mb-8">
            <p className="text-xl font-semibold">Total: ${getCartTotal().toFixed(2)}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Place Order
          </button>
        </form>
      </main>
    </div>
  )
}

