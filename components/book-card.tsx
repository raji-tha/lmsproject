"use client"

import Image from "next/image"
import { Star } from "lucide-react"

interface BookCardProps {
  title: string
  author: string
  image: string
  rating: number
  category: string
}

export function BookCard({ title, author, image, rating, category }: BookCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-orange-500/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-xs font-medium text-black">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 font-semibold text-white transition-colors group-hover:text-orange-400">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{author}</p>
        <div className="mt-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">{rating}.0</span>
        </div>
      </div>
    </div>
  )
}
