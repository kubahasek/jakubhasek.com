import { createFileRoute } from '@tanstack/react-router'
import { Projects } from '@/components/projects'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: 'Projects - Jakub Hašek' },
      { name: 'description', content: 'Explore Jakub Hašek\'s portfolio of web development projects and technical solutions.' },
    ],
  }),
  component: ProjectsPage,
})

function ProjectsPage() {
  return <Projects />
}
