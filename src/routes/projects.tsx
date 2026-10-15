import { createFileRoute } from '@tanstack/react-router'
import { Projects } from '@/components/projects'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: 'Projects - Jakub Hašek' },
      { name: 'description', content: 'Jakub Hašek’s full-stack work with AKIP Solutions and LifeOS, a solo project for personal finance and life management.' },
    ],
  }),
  component: ProjectsPage,
})

function ProjectsPage() {
  return <main><Projects /></main>
}
