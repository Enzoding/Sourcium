"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, TrendingUp, Clock, Heart, Bookmark, Users, Grid3X3, List } from "lucide-react"

const discoverLists = [
  {
    id: 1,
    title: "Web3 & Blockchain Resources",
    description: "Comprehensive guide to Web3 development and blockchain technology",
    author: { name: "Alex Rivera", avatar: "/placeholder-user.jpg", username: "alexr" },
    itemCount: 42,
    bookmarks: 234,
    likes: 156,
    tags: ["Web3", "Blockchain", "DeFi", "NFT"],
    trending: true,
    updatedAt: "1 day ago",
  },
  {
    id: 2,
    title: "Remote Work Tools",
    description: "Essential tools and resources for remote teams and digital nomads",
    author: { name: "Emma Wilson", avatar: "/placeholder-user.jpg", username: "emmaw" },
    itemCount: 28,
    bookmarks: 189,
    likes: 98,
    tags: ["Remote Work", "Productivity", "Tools"],
    trending: false,
    updatedAt: "3 days ago",
  },
  {
    id: 3,
    title: "Climate Tech Startups",
    description: "Innovative companies working on climate change solutions",
    author: { name: "David Kim", avatar: "/placeholder-user.jpg", username: "davidk" },
    itemCount: 35,
    bookmarks: 167,
    likes: 203,
    tags: ["Climate", "Sustainability", "Startups"],
    trending: true,
    updatedAt: "2 days ago",
  },
  {
    id: 4,
    title: "UX Research Methods",
    description: "Tools and methodologies for user experience research",
    author: { name: "Lisa Zhang", avatar: "/placeholder-user.jpg", username: "lisaz" },
    itemCount: 19,
    bookmarks: 145,
    likes: 87,
    tags: ["UX", "Research", "Design"],
    trending: false,
    updatedAt: "1 week ago",
  },
]

const trendingTags = ["AI", "Web3", "Design", "Productivity", "Startups", "Climate", "Remote Work", "UX"]

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("trending")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredLists = discoverLists.filter((list) => {
    const matchesSearch =
      list.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      list.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      list.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesTag = !selectedTag || list.tags.includes(selectedTag)

    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Discover Collections</h1>
            <p className="text-muted-foreground">
              Explore curated collections from the community and discover new sources of information
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search collections, tags, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Trending
                    </div>
                  </SelectItem>
                  <SelectItem value="recent">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Recent
                    </div>
                  </SelectItem>
                  <SelectItem value="popular">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Popular
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Trending Tags */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Button>
              {trendingTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{filteredLists.length} collections found</p>
            </div>

            <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
              {filteredLists.map((list) => (
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
                      {list.trending && (
                        <Badge variant="secondary" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    <CardTitle className="text-lg">{list.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{list.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {list.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
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
                      <span>Updated {list.updatedAt}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Heart className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Bookmark className="h-4 w-4 mr-1" />
                        Bookmark
                      </Button>
                      <Button size="sm" className="flex-1">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
