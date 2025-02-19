"use client"

import { useState } from "react"

export default function AddToCartButton({ product }: { product: { id: number; name: string; price: number } }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // Here you would typically update your cart state or send a request to your backend
    console.log(`Added ${product.name} to cart`)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
        isAdded ? "bg-green-500 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
      }`}
    >
      {isAdded ? "Added to Cart!" : "Add to Cart"}
    </button>
  )
}

