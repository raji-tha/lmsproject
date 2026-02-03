"use client"

import { useState } from "react"
import { BookCard } from "@/components/book-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Fiction", "Non-Fiction", "Science", "Romance", "Fantasy"]

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/images/book1.jpg",
    rating: 5,
    category: "Fiction",
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "/images/book2.jpg",
    rating: 5,
    category: "Romance",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    image: "/images/book3.jpg",
    rating: 5,
    category: "Fiction",
  },
  {
    id: 4,
    title: "The Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "/images/book4.jpg",
    rating: 5,
    category: "Fantasy",
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/images/book5.jpg",
    rating: 5,
    category: "Fiction",
  },
  {
    id: 6,
    title: "The Fellowship",
    author: "J.R.R. Tolkien",
    image: "/images/book6.jpg",
    rating: 5,
    category: "Fantasy",
  },
  {
    id: 7,
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    image: "/images/book7.jpg",
    rating: 4,
    category: "Romance",
  },
  {
    id: 8,
    title: "Dune",
    author: "Frank Herbert",
    image: "/images/book8.jpg",
    rating: 5,
    category: "Science",
  },
]

export function BookGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredBooks =
    activeCategory === "All"
      ? books
      : books.filter((book) => book.category === activeCategory)

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Browse Our Collection
          </h2>
          <p className="mt-2 text-gray-400">
            Explore thousands of books across all genres
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border-orange-500/50 transition-all",
                activeCategory === category 
                  ? "bg-orange-500 text-black shadow-lg shadow-orange-500/30 hover:bg-orange-600" 
                  : "bg-transparent text-white hover:bg-orange-500/20 hover:text-orange-400"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Book Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  )
}
