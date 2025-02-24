import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, Bookmark, Heart, MessageCircle, Share2, TrendingUp } from "lucide-react"

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold">トレンド</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              技術コミュニティで話題になっているトピックをチェックしましょう
            </p>
          </div>

          {/* Filters */}
          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-4 border-b">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <Tabs defaultValue="24h" className="w-full sm:w-auto">
                <TabsList>
                  <TabsTrigger value="24h">24時間</TabsTrigger>
                  <TabsTrigger value="week">週間</TabsTrigger>
                  <TabsTrigger value="month">月間</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex gap-4 w-full sm:w-auto">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="カテゴリー" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="frontend">フロントエンド</SelectItem>
                    <SelectItem value="backend">バックエンド</SelectItem>
                    <SelectItem value="mobile">モバイル</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="並び替え" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">人気順</SelectItem>
                    <SelectItem value="recent">新着順</SelectItem>
                    <SelectItem value="comments">コメント数</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Trending Posts */}
          <div className="grid gap-6">
            {/* Trending Post 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2 pr-4 border-r">
                  <span className="text-2xl font-bold text-primary">#1</span>
                  <div className="flex items-center gap-1 text-green-500">
                    <ArrowUp className="w-4 h-4" />
                    <span className="text-sm font-medium">5</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="User avatar"
                      className="rounded-full w-12 h-12 border-2 border-primary/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg hover:text-primary cursor-pointer">@techexpert</span>
                          <Badge variant="outline" className="text-xs">
                            Verified
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">4時間前</span>
                      </div>
                      <h2 className="text-xl font-semibold mt-2 hover:text-primary cursor-pointer">
                        Next.js 14の新機能まとめ：Server Actionsが変える開発手法
                      </h2>
                      <p className="mt-2 text-muted-foreground line-clamp-2">
                        Next.js 14がリリースされ、Server ActionsやPartial Prerendering等の
                        革新的な機能が追加されました。この記事では実際のユースケースと
                        ベストプラクティスについて解説します...
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary">#nextjs</Badge>
                        <Badge variant="secondary">#react</Badge>
                        <Badge variant="secondary">#serveractions</Badge>
                      </div>
                      <div className="flex gap-6 mt-4">
                        <Button variant="ghost" size="sm" className="gap-2 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          2.4k
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          156
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
                </div>
              </div>
            </Card>

            {/* Trending Post 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2 pr-4 border-r">
                  <span className="text-2xl font-bold text-primary/80">#2</span>
                  <div className="flex items-center gap-1 text-green-500">
                    <ArrowUp className="w-4 h-4" />
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="User avatar"
                      className="rounded-full w-12 h-12 border-2 border-primary/10"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg hover:text-primary cursor-pointer">@aidev</span>
                          <Badge variant="outline" className="text-xs">
                            Pro
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">6時間前</span>
                      </div>
                      <h2 className="text-xl font-semibold mt-2 hover:text-primary cursor-pointer">
                        AI時代のフロントエンド開発：新しいベストプラクティス
                      </h2>
                      <p className="mt-2 text-muted-foreground line-clamp-2">
                        AIツールを活用したフロントエンド開発の効率化について解説します。
                        コード生成からテスト自動化まで、実践的なテクニックを紹介...
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary">#ai</Badge>
                        <Badge variant="secondary">#frontend</Badge>
                        <Badge variant="secondary">#development</Badge>
                      </div>
                      <div className="flex gap-6 mt-4">
                        <Button variant="ghost" size="sm" className="gap-2 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          1.8k
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 hover:text-primary transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          98
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
                </div>
              </div>
            </Card>

            {/* More trending posts can be added here */}
          </div>
        </div>
      </div>
    </div>
  )
}

