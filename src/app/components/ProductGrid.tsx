import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "Minimal Desk Lamp",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Leather Notebook",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Ceramic Mug",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Wool Blanket",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

