import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import '@/globals.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: 'Terminal Portfolio' },
      { name: 'description', content: 'Personal landing page with terminal UI' },
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-mono scanline">
        <Navigation />
        <main className="pl-0 md:pl-64">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}
