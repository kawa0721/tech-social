import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  BookMarked,
  Code2,
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  Tag,
  TrendingUp,
  Bookmark,
  MoreHorizontal,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container grid grid-cols-1 md:grid-cols-[240px_1fr_300px] gap-6 p-4 md:p-6 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="hidden md:flex flex-col gap-6 h-[calc(100vh-8rem)] sticky top-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold px-4 mb-2">メニュー</h2>
            <Link href="/trending">
              <Button
                variant="ghost"
                className="justify-start gap-2 h-12 px-4 w-full hover:bg-primary/10 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                トレンド
              </Button>
            </Link>
            <Link href="/latest">
              <Button
                variant="ghost"
                className="justify-start gap-2 h-12 px-4 w-full hover:bg-primary/10 transition-colors"
              >
                <Code2 className="w-5 h-5" />
                最新の投稿
              </Button>
            </Link>
            <Link href="/bookmarks">
              <Button
                variant="ghost"
                className="justify-start gap-2 h-12 px-4 w-full hover:bg-primary/10 transition-colors"
              >
                <BookMarked className="w-5 h-5" />
                ブックマーク
              </Button>
            </Link>
            <Link href="/tags">
              <Button
                variant="ghost"
                className="justify-start gap-2 h-12 px-4 w-full hover:bg-primary/10 transition-colors"
              >
                <Tag className="w-5 h-5" />
                タグ一覧
              </Button>
            </Link>
          </div>
          <Separator />
          <div className="flex flex-col gap-3 px-4">
            <h2 className="font-semibold text-lg">人気のタグ</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="hover:bg-primary/10 cursor-pointer transition-colors px-3 py-1">
                #nextjs
              </Badge>
              <Badge variant="secondary" className="hover:bg-primary/10 cursor-pointer transition-colors px-3 py-1">
                #react
              </Badge>
              <Badge variant="secondary" className="hover:bg-primary/10 cursor-pointer transition-colors px-3 py-1">
                #typescript
              </Badge>
              <Badge variant="secondary" className="hover:bg-primary/10 cursor-pointer transition-colors px-3 py-1">
                #javascript
              </Badge>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="User avatar"
                className="rounded-full w-12 h-12 border-2 border-primary/10"
              />
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg hover:text-primary cursor-pointer">@techuser</span>
                    <Badge variant="outline" className="text-xs">
                      Pro
                    </Badge>
                    <span className="text-sm text-muted-foreground">2時間前</span>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-lg leading-relaxed">
                  Next.js 14で新しいプロジェクトを始めました！Server ActionsとServer
                  Componentsの組み合わせが素晴らしいです。みなさんはどう思いますか？ 🚀
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">#nextjs</Badge>
                  <Badge variant="secondary">#react</Badge>
                  <Badge variant="secondary">#webdev</Badge>
                </div>
                <div className="flex gap-6 pt-4">
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    24
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    12
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                    <Bookmark className="w-5 h-5" />
                    保存
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                    <Share2 className="w-5 h-5" />
                    共有
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="User avatar"
                className="rounded-full w-12 h-12 border-2 border-primary/10"
              />
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg hover:text-primary cursor-pointer">@codemaster</span>
                    <Badge variant="outline" className="text-xs">
                      Verified
                    </Badge>
                    <span className="text-sm text-muted-foreground">3時間前</span>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-lg leading-relaxed">TypeScriptの型システムについて解説記事を書きました！</p>
                <pre className="bg-muted p-6 rounded-xl overflow-x-auto font-mono text-sm">
                  <code>{`type User = {
  id: number;
  name: string;
  email?: string;
};`}</code>
                </pre>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">#typescript</Badge>
                  <Badge variant="secondary">#programming</Badge>
                </div>
                <div className="flex gap-6 pt-4">
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    42
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                    <MessageCircle className="w-5 h-5" />8
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                    <Bookmark className="w-5 h-5" />
                    保存
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                    <Share2 className="w-5 h-5" />
                    共有
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:flex flex-col gap-6 h-[calc(100vh-2rem)] sticky top-4">
          <Card className="p-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              トレンド
            </h2>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="font-medium group-hover:text-primary transition-colors">#nextjs</span>
                  <Badge variant="secondary" className="text-xs">
                    急上昇
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">1,234 投稿</p>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="font-medium group-hover:text-primary transition-colors">#typescript</span>
                  <Badge variant="secondary" className="text-xs">
                    注目
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">987 投稿</p>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="font-medium group-hover:text-primary transition-colors">#react</span>
                </div>
                <p className="text-sm text-muted-foreground">756 投稿</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-bold mb-6">おすすめユーザー</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                  className="rounded-full w-10 h-10 border-2 border-primary/10"
                />
                <div className="flex-1">
                  <p className="font-medium hover:text-primary cursor-pointer">@techguru</p>
                  <p className="text-sm text-muted-foreground">フルスタックエンジニア</p>
                </div>
                <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                  フォロー
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="User avatar"
                  className="rounded-full w-10 h-10 border-2 border-primary/10"
                />
                <div className="flex-1">
                  <p className="font-medium hover:text-primary cursor-pointer">@webdev</p>
                  <p className="text-sm text-muted-foreground">フロントエンド開発者</p>
                </div>
                <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                  フォロー
                </Button>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  )
}

