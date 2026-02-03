import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Heart, Users, Target, Award, Globe } from "lucide-react"

const stats = [
  { label: "Books in Collection", value: "50,000+" },
  { label: "Active Members", value: "10,000+" },
  { label: "Partner Libraries", value: "200+" },
  { label: "Years of Service", value: "15+" },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Reading",
    description: "We believe in the transformative power of books and their ability to change lives.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building connections between readers and fostering a love for literature together.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "Making knowledge accessible to everyone, regardless of background or location.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to providing the best library management experience possible.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/images/book1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    image: "/images/book2.jpg",
  },
  {
    name: "Emily Williams",
    role: "Head of Community",
    image: "/images/book3.jpg",
  },
  {
    name: "David Brown",
    role: "Head of Operations",
    image: "/images/book4.jpg",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black/20">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold text-white sm:text-5xl">
              About BookVault
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/80">
              We are on a mission to make reading accessible to everyone and to build a global community of book lovers.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-orange-500/20 bg-black/60 py-12 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-orange-500 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-gray-400">
                  <p>
                    BookVault was founded in 2010 with a simple yet powerful vision: to create a digital platform that would revolutionize how people discover, borrow, and enjoy books.
                  </p>
                  <p>
                    What started as a small community library management tool has grown into a comprehensive platform serving thousands of readers and hundreds of libraries worldwide.
                  </p>
                  <p>
                    Today, we continue to innovate and expand our services, always keeping our core mission at heart - making the joy of reading accessible to everyone.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl border border-orange-500/20 bg-black/50">
                  <div className="grid h-full w-full grid-cols-2 gap-4 p-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/images/book5.jpg"
                        alt="Library collection"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/images/book6.jpg"
                        alt="Reading community"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/images/book7.jpg"
                        alt="Book lovers"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/images/book8.jpg"
                        alt="Digital library"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                The principles that guide everything we do at BookVault
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-orange-500/20 bg-black/50 p-6 text-center backdrop-blur-sm transition-all hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                    <value.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                The passionate individuals behind BookVault
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group overflow-hidden rounded-2xl border border-orange-500/20 bg-black/50 backdrop-blur-sm transition-all hover:border-orange-500/40"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Globe className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
              To democratize access to knowledge and create a world where everyone can discover the joy of reading. We believe that books have the power to educate, inspire, and transform lives, and we are committed to making that power accessible to all.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
