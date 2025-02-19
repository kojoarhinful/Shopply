import Link from "next/link"
import ProductGrid from "./components/ProductGrid"
import CategoryFilter from "./components/CategoryFilter"
import SearchBar from "./components/SearchBar"
import Newsletter from "./components/Newsletter"
import FeaturedCollection from "./components/FeaturedCollection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-24 text-center bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold tracking-tight mb-6">Welcome to shopply</h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              The minimal shopping experience for the modern consumer
            </p>
            <SearchBar className="max-w-xl mx-auto mb-8" />
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore collection
            </Link>
          </div>
        </section>

        <FeaturedCollection />

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h2 className="text-3xl font-semibold mb-6 md:mb-0">Our Products</h2>
              <CategoryFilter />
            </div>
            <ProductGrid />
          </div>
        </section>

        <Newsletter />
      </main>
    </div>
  )
}

