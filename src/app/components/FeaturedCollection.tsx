import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeaturedCollection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Summer Collection 2025</h2>
            <p className="text-gray-600 text-lg">
              Discover our latest collection of minimal and elegant products designed for modern living.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Shop Collection
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Featured product 1"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg mt-8">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Featured product 2"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

