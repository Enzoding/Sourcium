import { Suspense } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedLists } from "@/components/featured-lists"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <Suspense fallback={<div>Loading featured lists...</div>}>
            <FeaturedLists />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
