import Link from "next/link"
import { ArrowRight, BookOpen, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Gateway to a World of{" "}
            <span className="text-primary">Knowledge</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Discover thousands of books, manage your reading list, and connect with fellow book lovers. BookVault makes library management simple and enjoyable.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="group px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl border border-orange-500/30 bg-black/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-black/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <p className="mt-4 text-3xl font-bold text-white">50K+</p>
              <p className="text-gray-400">Books Available</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-orange-500/30 bg-black/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-black/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <p className="mt-4 text-3xl font-bold text-white">10K+</p>
              <p className="text-gray-400">Active Members</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-orange-500/30 bg-black/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-black/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                <Search className="h-6 w-6 text-orange-500" />
              </div>
              <p className="mt-4 text-3xl font-bold text-white">100+</p>
              <p className="text-gray-400">Book Categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
