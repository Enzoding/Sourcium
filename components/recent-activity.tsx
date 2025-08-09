import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Bookmark, Plus, Users } from "lucide-react"

const recentActivity = [
  {
    id: 1,
    type: "new_list",
    user: { name: "Emma Wilson", avatar: "/placeholder-user.jpg" },
    action: "created a new list",
    target: "Web3 Resources",
    time: "2 hours ago",
    icon: Plus,
  },
  {
    id: 2,
    type: "bookmark",
    user: { name: "David Kim", avatar: "/placeholder-user.jpg" },
    action: "bookmarked",
    target: "AI & Tech Podcasts",
    time: "4 hours ago",
    icon: Bookmark,
  },
  {
    id: 3,
    type: "like",
    user: { name: "Lisa Zhang", avatar: "/placeholder-user.jpg" },
    action: "liked",
    target: "Design Inspiration",
    time: "6 hours ago",
    icon: Heart,
  },
  {
    id: 4,
    type: "follow",
    user: { name: "Tom Brown", avatar: "/placeholder-user.jpg" },
    action: "started following",
    target: "Sarah Chen",
    time: "8 hours ago",
    icon: Users,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentActivity.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>

              <Icon className="h-4 w-4 text-muted-foreground mt-0.5" />
            </div>
          )
        })}

        <div className="pt-4 border-t">
          <div className="text-center">
            <Badge variant="secondary" className="text-xs">
              🎉 Welcome to Sourcium MVP
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
