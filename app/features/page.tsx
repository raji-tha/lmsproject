import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Search,
  BarChart3,
  Users,
  Bell,
  Shield,
  Smartphone,
  Cloud,
  Zap,
  Heart,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const mainFeatures = [
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find any book instantly with our powerful search engine. Search by title, author, genre, ISBN, or even keywords from the content.",
    highlights: ["Full-text search", "Advanced filters", "Search history"],
  },
  {
    icon: BookOpen,
    title: "Digital Catalog",
    description:
      "Browse our extensive digital catalog with over 50,000 books. Rich metadata, cover images, and detailed descriptions for every title.",
    highlights: ["50K+ books", "Rich metadata", "High-res covers"],
  },
  {
    icon: BarChart3,
    title: "Reading Analytics",
    description:
      "Track your reading habits and progress. Set goals, monitor your reading speed, and discover insights about your reading journey.",
    highlights: ["Reading goals", "Progress tracking", "Personal insights"],
  },
  {
    icon: Users,
    title: "Book Clubs",
    description:
      "Join virtual book clubs, participate in discussions, and connect with readers who share your interests from around the world.",
    highlights: ["Group discussions", "Reading challenges", "Community events"],
  },
]

const additionalFeatures = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get notified about due dates, new arrivals, and recommendations tailored to your taste.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your reading history and personal data are protected with enterprise-grade security.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Access your library on any device with our fully responsive design and native apps.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Your reading progress and bookmarks sync seamlessly across all your devices.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures quick load times and smooth browsing experience.",
  },
  {
    icon: Heart,
    title: "Wishlist & Favorites",
    description: "Save books to your wishlist and mark favorites for quick access anytime.",
  },
  {
    icon: Clock,
    title: "Reading History",
    description: "Keep track of all the books you have read with detailed history and statistics.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Access books and interface in multiple languages to suit your preferences.",
  },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual readers",
    features: [
      "Access to basic catalog",
      "5 books per month",
      "Basic search",
      "Mobile access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9",
    period: "per month",
    description: "For avid readers",
    features: [
      "Full catalog access",
      "Unlimited books",
      "Advanced search & filters",
      "Reading analytics",
      "Priority support",
      "Ad-free experience",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Library",
    price: "$49",
    period: "per month",
    description: "For organizations",
    features: [
      "Everything in Premium",
      "Multi-user accounts",
      "Admin dashboard",
      "Usage analytics",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl">
              Powerful Features for{" "}
              <span className="text-orange-500">Modern Libraries</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-gray-400">
              Everything you need to manage your reading life. From discovery to tracking, we have got you covered.
            </p>
          </div>
        </section>

        {/* Main Features */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {mainFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-orange-500/20 bg-black/50 p-8 backdrop-blur-sm transition-all hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/20 transition-colors group-hover:bg-orange-500">
                    <feature.icon className="h-7 w-7 text-orange-500 transition-colors group-hover:text-black" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-400"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                And Much More
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Discover all the features that make BookVault the best choice for managing your library
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-orange-500/20 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-orange-500/40 hover:shadow-md hover:shadow-orange-500/10"
                >
                  <feature.icon className="h-8 w-8 text-orange-500" />
                  <h3 className="mt-4 font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Choose the plan that best fits your needs. Start free, upgrade anytime.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-8 backdrop-blur-sm ${
                    plan.highlighted
                      ? "border-orange-500 bg-black/70 shadow-lg shadow-orange-500/20"
                      : "border-orange-500/20 bg-black/50"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-sm font-medium text-black">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" className="mt-8 block">
                    <Button
                      className={`w-full ${plan.highlighted ? "bg-orange-500 text-black hover:bg-orange-600" : "border-orange-500/50 bg-transparent text-white hover:bg-orange-500/20"}`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Reading Experience?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Join thousands of readers who have already discovered the joy of modern library management.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button
                  size="lg"
                  className="group bg-black text-white hover:bg-black/90"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
