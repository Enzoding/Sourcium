import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Curate • Discover • Share
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Curate Your
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              Information Sources
            </span>
          </h1>

          <p className="mb-8 text-xl text-muted-foreground">
            Organize and share your favorite websites, podcasts, newsletters, and more. Discover curated collections
            from fellow information enthusiasts.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              Start Curating
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    </section>
  )
}
