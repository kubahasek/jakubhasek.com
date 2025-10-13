"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    // { id: "/projects", label: "Projects" },
    { id: "/blog", label: "Blog" },
    { id: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-border bg-background p-8 md:flex">
      <div className="mb-12">
        <div className="mb-2 font-mono text-xs text-accent">~/portfolio</div>
        <div className="text-2xl font-bold text-foreground">Jakub Hašek</div>
        <div className="mt-1 text-sm text-muted-foreground">Full-Stack Developer</div>
      </div>

      <div className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.id
          return (
            <Link
              key={item.id}
              href={item.id}
              className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-all hover:bg-accent/10 ${
                isActive ? "bg-accent/10" : ""
              }`}
            >
              <span
                className={`font-mono text-sm transition-colors ${
                  isActive ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {isActive ? ">" : " "}
              </span>
              <span
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>

      <div className="mt-auto">
        <button
          onClick={toggleTheme}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  )
}
