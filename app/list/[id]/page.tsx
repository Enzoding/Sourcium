"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Heart,
  Bookmark,
  Share,
  Plus,
  ExternalLink,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Eye,
  Users,
} from "lucide-react"

const listData = {
  id: 1,
  title: "AI & Tech Podcasts",
  description:
    "Curated collection of the best AI and technology podcasts for staying up-to-date with the latest developments in artificial intelligence, machine learning, and tech innovation.",
  author: {
    name: "Sarah Chen",
    avatar: "/placeholder-user.jpg",
    username: "sarahc",
  },
  visibility: "public",
  createdAt: "2 weeks ago",
  updatedAt: "3 days ago",
  bookmarks: 156,
  likes: 89,
  views: 1240,
  tags: ["AI", "Technology", "Podcasts", "Machine Learning"],
  items: [
    {
      id: 1,
      title: "Lex Fridman Podcast",
      description:
        "Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power.",
      url: "https://lexfridman.com/podcast/",
      favicon: "🎙️",
      addedAt: "1 week ago",
    },
    {
      id: 2,
      title: "The AI Podcast",
      description:
        "NVIDIA's official AI podcast featuring conversations with the world's leading experts in artificial intelligence.",
      url: "https://blogs.nvidia.com/ai-podcast/",
      favicon: "🤖",
      addedAt: "1 week ago",
    },
    {
      id: 3,
      title: "Machine Learning Street Talk",
      description: "Technical discussions about machine learning research, papers, and industry developments.",
      url: "https://www.youtube.com/@MachineLearningStreetTalk",
      favicon: "🧠",
      addedAt: "5 days ago",
    },
    {
      id: 4,
      title: "The TWIML AI Podcast",
      description: "This Week in Machine Learning & AI - interviews with leading AI researchers and practitioners.",
      url: "https://twimlai.com/",
      favicon: "🔬",
      addedAt: "3 days ago",
    },
  ],
}

export default function ListPage() {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [newItemUrl, setNewItemUrl] = useState("")
  const [newItemTitle, setNewItemTitle] = useState("")
  const [newItemDescription, setNewItemDescription] = useState("")

  const handleAddItem = () => {
    // Add item logic here
    setNewItemUrl("")
    setNewItemTitle("")
    setNewItemDescription("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* List Header */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={listData.author.avatar || "/placeholder.svg"} alt={listData.author.name} />
                      <AvatarFallback>
                        {listData.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{listData.author.name}</p>
                      <p className="text-sm text-muted-foreground">@{listData.author.username}</p>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      <Eye className="h-3 w-3 mr-1" />
                      Public
                    </Badge>
                  </div>

                  <div>
                    <h1 className="text-3xl font-bold mb-2">{listData.title}</h1>
                    <p className="text-muted-foreground">{listData.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {listData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {listData.items.length} items
                    </span>
                    <span>{listData.views} views</span>
                    <span>Created {listData.createdAt}</span>
                    <span>Updated {listData.updatedAt}</span>
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
                      <Copy className="mr-2 h-4 w-4" />
                      Fork List
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share className="mr-2 h-4 w-4" />
                      Share
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t">
                <Button
                  variant={isLiked ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className="gap-2"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                  {listData.likes + (isLiked ? 1 : 0)}
                </Button>

                <Button
                  variant={isBookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="gap-2"
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                  {listData.bookmarks + (isBookmarked ? 1 : 0)}
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="gap-2">
                      <Plus className="h-4 w-4" />
                      Add Item
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Item</DialogTitle>
                      <DialogDescription>Add a new source to this collection</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">URL</label>
                        <Input
                          placeholder="https://example.com"
                          value={newItemUrl}
                          onChange={(e) => setNewItemUrl(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Title</label>
                        <Input
                          placeholder="Item title"
                          value={newItemTitle}
                          onChange={(e) => setNewItemTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Description (optional)</label>
                        <Textarea
                          placeholder="Brief description of this source"
                          value={newItemDescription}
                          onChange={(e) => setNewItemDescription(e.target.value)}
                        />
                      </div>
                      <Button onClick={handleAddItem} className="w-full">
                        Add Item
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
          </Card>

          {/* Items List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Items ({listData.items.length})</h2>

            {listData.items.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{item.favicon}</div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.url}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>

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
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Remove
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground">Added {item.addedAt}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
