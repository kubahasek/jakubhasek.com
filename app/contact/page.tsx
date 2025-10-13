import { Contact } from '@/components/contact';
import { Navigation } from '@/components/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Jakub Hašek',
  description: 'Get in touch with Jakub Hašek for collaboration opportunities, project inquiries, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background scanline">
      <Navigation />
      <main className="pl-0 md:pl-64">
        <Contact />
      </main>
    </div>
  );
}
