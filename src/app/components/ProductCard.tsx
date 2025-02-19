import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, ShoppingCart } from "lucide-react"

export default function ProductCard({ product }: { product: any }) {
  if (!product) {
    return null // Or you could return a placeholder/skeleton component
  }

  return (
    <div className="group">
      <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name || "Product image"}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Eye className="w-4 h-4" />
          </Button>
          <Button size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-lg mb-1 group-hover:text-blue-600 transition-colors">
            {product.name || "Unnamed Product"}
          </h3>
          <p className="text-gray-600">${product.price?.toFixed(2) || "N/A"}</p>
        </Link>
      </div>
    </div>
  )
}

