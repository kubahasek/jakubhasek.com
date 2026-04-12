import { createFileRoute } from '@tanstack/react-router'
import { About } from '@/components/about'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About - Jakub Hašek' },
      { name: 'description', content: 'Learn more about Jakub Hašek, a Full-Stack Developer passionate about creating exceptional web experiences.' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return <About />
}
