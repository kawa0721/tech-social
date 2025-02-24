"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BookMarked, Code2, Moon, Mountain, Sparkles, Sun, Tag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <Card className="fixed left-0 top-0 z-50 flex h-16 w-full items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold">TechShare</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/trending"
              className={`flex items-center gap-2 text-sm font-medium ${
                pathname === "/trending" ? "text-primary" : "text-muted-foreground"
              } hover:text-primary transition-colors`}
            >
              <Sparkles className="w-4 h-4" />
              トレンド
            </Link>
            <Link
              href="/latest"
              className={`flex items-center gap-2 text-sm font-medium ${
                pathname === "/latest" ? "text-primary" : "text-muted-foreground"
              } hover:text-primary transition-colors`}
            >
              <Code2 className="w-4 h-4" />
              最新の投稿
            </Link>
            <Link
              href="/bookmarks"
              className={`flex items-center gap-2 text-sm font-medium ${
                pathname === "/bookmarks" ? "text-primary" : "text-muted-foreground"
              } hover:text-primary transition-colors`}
            >
              <BookMarked className="w-4 h-4" />
              ブックマーク
            </Link>
            <Link
              href="/tags"
              className={`flex items-center gap-2 text-sm font-medium ${
                pathname === "/tags" ? "text-primary" : "text-muted-foreground"
              } hover:text-primary transition-colors`}
            >
              <Tag className="w-4 h-4" />
              タグ一覧
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">テーマを切り替える</span>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button>新規投稿</Button>
        </div>
      </div>
    </Card>
  )
}

