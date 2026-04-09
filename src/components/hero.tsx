import { useEffect, useState } from 'react'

export function Hero() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="flex min-h-screen items-center px-6 py-24 md:px-16">
      <div className="max-w-4xl">
        <div className="mb-6 font-mono text-sm text-accent">$ whoami</div>

        <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-7xl">
          Hello, I'm <span className="text-accent">Jakub</span>
        </h1>

        <div className="mb-8 space-y-2 text-xl text-muted-foreground md:text-2xl">
          <p>Full-Stack Developer</p>
          <p>Building digital experiences</p>
        </div>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A creative developer crafting digital experiences through clean code. I
          build accessible, performant web applications that make a difference.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="rounded-lg bg-foreground px-8 py-4 font-medium text-background transition-all hover:bg-foreground/90 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="rounded-lg border-2 border-border bg-transparent px-8 py-4 font-medium text-foreground transition-all hover:border-accent hover:bg-accent/5"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 flex items-center gap-1 font-mono text-sm text-muted-foreground">
          <span className="text-accent">{">"}</span>
          <span>Ready to build something amazing</span>
          {showCursor && <span className="inline-block h-5 w-2 bg-accent"></span>}
        </div>
      </div>
    </section>
  )
}
