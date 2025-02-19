"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useCart } from "../context/CartContext"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import Image from "next/image"

export default function CartDrawer() {
  const { cart, removeFromCart, getCartTotal } = useCart()

  return (
    <Sheet>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col h-full">
          <div className="flex-1 overflow-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4 items-start">
                <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-gray-100">
                  <Image src="/placeholder.svg" alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-sm font-medium">${item.price}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-medium">${getCartTotal().toFixed(2)}</span>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Checkout</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

