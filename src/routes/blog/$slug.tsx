import { createFileRoute } from '@tanstack/react-router'
import { getPostBySlug } from '@/lib/mdx'

export const Route = createFileRoute('/blog/$slug')({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug)
    return {
      meta: [
        { title: post?.title ?? 'Post Not Found' },
        { name: 'description', content: post?.excerpt ?? '' },
      ],
    }
  },
  loader: async ({ params }) => {
    const post = getPostBySlug(params.slug)
    return { post }
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const { post } = Route.useLoaderData()

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 md:px-16">
        <h1 className="text-4xl font-bold text-foreground">Post Not Found</h1>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 md:px-16">
      <header className="mb-12">
        <div className="mb-4 font-mono text-sm text-accent">
          $ cat {post.slug}.mdx
        </div>
        <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>
      </header>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </article>
  )
}
