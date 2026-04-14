import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '@/components/contact'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact - Jakub Hašek' },
      { name: 'description', content: 'Get in touch with Jakub Hašek for collaboration opportunities, project inquiries, or just to say hello.' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return <Contact />
}
