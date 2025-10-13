import { About } from '@/components/about';
import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Jakub Hašek',
  description: 'Learn more about Jakub Hašek, a Full-Stack Developer passionate about creating exceptional web experiences.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background scanline">
      <Navigation />
      <main className="pl-0 md:pl-64">
        <About />
      </main>
    </div>
  );
}
