import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/hero'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Jakub Hašek - Full-Stack Developer' },
      { name: 'description', content: 'Personal portfolio of Jakub Hašek, a Full-Stack Developer passionate about creating exceptional web experiences.' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return <Hero />
}
