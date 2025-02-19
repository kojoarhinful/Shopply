import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Minimal Desk Lamp",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A sleek and minimal desk lamp perfect for your workspace.",
  },
  {
    id: 2,
    name: "Leather Notebook",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Premium leather notebook for your daily thoughts and ideas.",
  },
  {
    id: 3,
    name: "Ceramic Mug",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Handcrafted ceramic mug for your morning coffee or tea.",
  },
  {
    id: 4,
    name: "Wool Blanket",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Cozy wool blanket made from premium materials.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            shopply
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-medium mb-8">${product.price}</p>
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

