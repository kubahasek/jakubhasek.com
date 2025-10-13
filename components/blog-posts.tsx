import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export async function BlogPosts() {
  const posts = getAllPosts();
  return (
    <section id="blog" className="min-h-screen px-6 py-24 md:px-16">
      <div className="max-w-6xl">
        <div className="mb-8 font-mono text-sm text-accent">$ cat blog.log</div>

        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">Blog Posts</h2>
        {posts.length === 0 && (
          <p className="text-muted-foreground">Nothing to see here yet...</p>
        )}

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-accent md:text-2xl">
                {post.title}
              </h3>

              <p className="mb-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>

              <div className="font-medium text-accent">Read more →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
