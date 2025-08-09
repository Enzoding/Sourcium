"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Share, Eye, EyeOff, Lock } from "lucide-react"

const userLists = [
  {
    id: 1,
    title: "My AI Resources",
    description: "Personal collection of AI tools and resources",
    itemCount: 15,
    visibility: "private",
    updatedAt: "2 days ago",
    bookmarks: 0,
    items: [
      { title: "ChatGPT", url: "https://chat.openai.com", favicon: "🤖" },
      { title: "Claude", url: "https://claude.ai", favicon: "🧠" },
      { title: "Midjourney", url: "https://midjourney.com", favicon: "🎨" },
    ],
  },
  {
    id: 2,
    title: "Design Tools",
    description: "Essential design tools and resources",
    itemCount: 8,
    visibility: "public",
    updatedAt: "1 week ago",
    bookmarks: 23,
    items: [
      { title: "Figma", url: "https://figma.com", favicon: "🎨" },
      { title: "Framer", url: "https://framer.com", favicon: "⚡" },
      { title: "Linear", url: "https://linear.app", favicon: "📐" },
    ],
  },
  {
    id: 3,
    title: "Unsorted",
    description: "Items waiting to be organized",
    itemCount: 12,
    visibility: "private",
    updatedAt: "3 hours ago",
    bookmarks: 0,
    isUnsorted: true,
    items: [
      { title: "Interesting Article", url: "https://example.com/article", favicon: "📄" },
      { title: "New Tool", url: "https://example.com/tool", favicon: "🔧" },
      { title: "Research Paper", url: "https://example.com/paper", favicon: "📊" },
    ],
  },
]

const bookmarkedLists = [
  {
    id: 4,
    title: "Startup Resources",
    description: "Essential tools for entrepreneurs",
    author: "Mike Johnson",
    itemCount: 31,
    bookmarkedAt: "1 day ago",
  },
  {
    id: 5,
    title: "Web Development",
    description: "Modern web development tools and frameworks",
    author: "Jane Doe",
    itemCount: 27,
    bookmarkedAt: "3 days ago",
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case "public":
        return <Eye className="h-4 w-4" />
      case "unlisted":
        return <EyeOff className="h-4 w-4" />
      case "private":
        return <Lock className="h-4 w-4" />
      default:
        return <Lock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">My Dashboard</h1>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New List
            </Button>
          </div>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search your lists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs defaultValue="my-lists" className="space-y-6">
          <TabsList>
            <TabsTrigger value="my-lists">My Lists ({userLists.length})</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks ({bookmarkedLists.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="my-lists" className="space-y-4">
            {userLists.map((list) => (
              <Card key={list.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{list.title}</CardTitle>
                        {list.isUnsorted && (
                          <Badge variant="outline" className="text-xs">
                            Unsorted
                          </Badge>
                        )}
                        <div className="flex items-center gap-1 text-muted-foreground">
                          {getVisibilityIcon(list.visibility)}
                          <span className="text-xs capitalize">{list.visibility}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{list.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{list.itemCount} items</span>
                        <span>Updated {list.updatedAt}</span>
                        {list.bookmarks > 0 && <span>{list.bookmarks} bookmarks</span>}
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        {!list.isUnsorted && (
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent>
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
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="bookmarks" className="space-y-4">
            {bookmarkedLists.map((list) => (
              <Card key={list.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{list.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{list.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>by {list.author}</span>
                        <span>{list.itemCount} items</span>
                        <span>Bookmarked {list.bookmarkedAt}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      View List
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
