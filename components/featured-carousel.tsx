"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/images/book1.jpg",
    rating: 5,
    description: "A story of decadence and excess, Gatsby explores the American Dream in the Jazz Age.",
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "/images/book2.jpg",
    rating: 5,
    description: "A romantic novel following the emotional development of Elizabeth Bennet.",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    image: "/images/book3.jpg",
    rating: 5,
    description: "A dystopian social science fiction novel and cautionary tale about totalitarianism.",
  },
  {
    id: 4,
    title: "The Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "/images/book4.jpg",
    rating: 5,
    description: "The magical tale of a young wizard discovering his extraordinary destiny.",
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/images/book5.jpg",
    rating: 5,
    description: "A gripping tale of racial injustice and the loss of innocence in the American South.",
  },
  {
    id: 6,
    title: "The Fellowship",
    author: "J.R.R. Tolkien",
    image: "/images/book6.jpg",
    rating: 5,
    description: "An epic fantasy adventure about friendship and the battle between good and evil.",
  },
  {
    id: 7,
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    image: "/images/book7.jpg",
    rating: 4,
    description: "A Gothic romance following the emotions of a strong-willed orphan.",
  },
  {
    id: 8,
    title: "Dune",
    author: "Frank Herbert",
    image: "/images/book8.jpg",
    rating: 5,
    description: "A science fiction masterpiece set in a distant future amidst a huge interstellar empire.",
  },
]

export function FeaturedCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", updateScrollButtons)
      updateScrollButtons()
      return () => container.removeEventListener("scroll", updateScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Featured Books
            </h2>
            <p className="mt-2 text-gray-400">
              Discover our handpicked collection of must-read classics
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="h-10 w-10 rounded-full border-orange-500/50 bg-transparent text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="h-10 w-10 rounded-full border-orange-500/50 bg-transparent text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="mt-8 flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="group relative min-w-[280px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-orange-500/20 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/20 sm:min-w-[300px]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < book.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-white/30 text-white/30"
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white">{book.title}</h3>
                  <p className="text-sm text-white/80">{book.author}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="line-clamp-2 text-sm text-gray-400">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
