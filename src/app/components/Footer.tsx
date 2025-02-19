import { Github, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">shopply</h3>
            <p className="text-gray-600 text-sm">Modern shopping experience for the minimal consumer.</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/new-arrivals">New Arrivals</Link>
              </li>
              <li>
                <Link href="/featured">Featured</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>@shopply</p>
          <p className="text-sm">made by Bismark</p>
        </div>
      </div>
    </footer>
  )
}

