"use client"

import Link from "next/link"
import { useCart } from "../context/CartContext"
import { ShoppingCart } from "lucide-react"

export default function FloatingCart() {
  const { getCartCount } = useCart()

  return (
    <Link
      href="/cart"
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
    >
      <ShoppingCart className="w-6 h-6" />
      {getCartCount() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {getCartCount()}
        </span>
      )}
    </Link>
  )
}

