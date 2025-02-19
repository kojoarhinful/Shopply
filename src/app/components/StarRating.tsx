import { Star } from "lucide-react"

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`w-5 h-5 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-400"}`} />
      ))}
    </div>
  )
}

