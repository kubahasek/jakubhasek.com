const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tags: ["TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering.",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description: "SaaS platform that helps developers create beautiful portfolio websites with customizable templates.",
    tags: ["TanStack Start", "Supabase", "Tailwind", "MDX"],
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and export capabilities.",
    tags: ["React", "D3.js", "Express", "Redis"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 md:px-16">
      <div className="max-w-6xl">
        <div className="mb-8 font-mono text-sm text-accent">$ ls projects/</div>

        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-accent hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-accent md:text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  View Code →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
