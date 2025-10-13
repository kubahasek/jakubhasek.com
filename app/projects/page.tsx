import { Projects } from '@/components/projects';
import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Jakub Hašek',
  description: 'Explore Jakub Hašek\'s portfolio of web development projects and technical solutions.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background scanline">
      <Navigation />
      <main className="pl-0 md:pl-64">
        {/* <Projects /> */}
      </main>
    </div>
  );
}
