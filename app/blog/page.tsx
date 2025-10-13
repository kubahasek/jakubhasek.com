import { BlogPosts } from '@/components/blog-posts';
import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Jakub Hašek',
  description: 'Read Jakub Hašek\'s latest thoughts on web development, React, TypeScript, and modern development practices.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background scanline">
      <Navigation />
      <main className="pl-0 md:pl-64">
        <BlogPosts />
      </main>
    </div>
  );
}
