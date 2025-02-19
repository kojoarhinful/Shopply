"use client"

import Link from "next/link"
import { useCart } from "../context/CartContext"
import { Trash2 } from "lucide-react"

export default function Cart() {
  const { cart, removeFromCart, getCartTotal } = useCart()

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
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is currently empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-400">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-blue-400 mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl font-semibold">Total: ${getCartTotal().toFixed(2)}</p>
              <Link
                href="/checkout"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
        <Link href="/" className="inline-block mt-8 text-blue-400 hover:text-blue-300">
          ← Continue Shopping
        </Link>
      </main>
    </div>
  )
}

