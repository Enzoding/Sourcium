"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Bookmark, Users, ExternalLink, Grid3X3, List } from "lucide-react"

const featuredLists = [
  {
    id: 1,
    title: "AI & Tech Podcasts",
    description: "Curated collection of the best AI and technology podcasts for staying up-to-date",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder-user.jpg",
      username: "sarahc",
    },
    itemCount: 24,
    bookmarks: 156,
    likes: 89,
    tags: ["AI", "Technology", "Podcasts"],
    items: [
      { title: "Lex Fridman Podcast", url: "https://lexfridman.com/podcast/", favicon: "🎙️" },
      { title: "The AI Podcast", url: "https://blogs.nvidia.com/ai-podcast/", favicon: "🤖" },
      {
        title: "Machine Learning Street Talk",
        url: "https://www.youtube.com/@MachineLearningStreetTalk",
        favicon: "🧠",
      },
    ],
  },
  {
    id: 2,
    title: "Design Inspiration",
    description: "Beautiful websites and design resources that inspire creativity",
    author: {
      name: "Alex Rivera",
      avatar: "/placeholder-user.jpg",
      username: "alexr",
    },
    itemCount: 18,
    bookmarks: 203,
    likes: 127,
    tags: ["Design", "UI/UX", "Inspiration"],
    items: [
      { title: "Dribbble", url: "https://dribbble.com", favicon: "🎨" },
      { title: "Behance", url: "https://behance.net", favicon: "🖼️" },
      { title: "Awwwards", url: "https://awwwards.com", favicon: "🏆" },
    ],
  },
  {
    id: 3,
    title: "Startup Resources",
    description: "Essential tools and resources for entrepreneurs and startup founders",
    author: {
      name: "Mike Johnson",
      avatar: "/placeholder-user.jpg",
      username: "mikej",
    },
    itemCount: 31,
    bookmarks: 98,
    likes: 67,
    tags: ["Startup", "Business", "Tools"],
    items: [
      { title: "Y Combinator", url: "https://ycombinator.com", favicon: "🚀" },
      { title: "Product Hunt", url: "https://producthunt.com", favicon: "🦄" },
      { title: "Indie Hackers", url: "https://indiehackers.com", favicon: "💡" },
    ],
  },
]

export function FeaturedLists() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Collections</h2>
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2" : "space-y-4"}>
        {featuredLists.map((list) => (
          <Card key={list.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={list.author.avatar || "/placeholder.svg"} alt={list.author.name} />
                    <AvatarFallback>
                      {list.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{list.author.name}</p>
                    <p className="text-xs text-muted-foreground">@{list.author.username}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <CardTitle className="text-lg">{list.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{list.description}</p>

              <div className="flex flex-wrap gap-1">
                {list.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                {list.items.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg border p-2">
                    <span className="text-lg">{item.favicon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.url}</p>
                    </div>
                  </div>
                ))}
                {list.itemCount > 3 && (
                  <p className="text-xs text-muted-foreground text-center py-2">+{list.itemCount - 3} more items</p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {list.itemCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="h-4 w-4" />
                    {list.bookmarks}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {list.likes}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
