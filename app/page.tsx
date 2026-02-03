import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { BookGrid } from "@/components/book-grid"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedCarousel />
        <BookGrid />
      </main>
      <Footer />
    </div>
  )
}
