import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";

export const metadata = {
  title: "Jakub Hašek - Full-Stack Developer",
  description:
    "Personal portfolio of Jakub Hašek, a Full-Stack Developer passionate about creating exceptional web experiences.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background scanline">
      <Navigation />
      <main className="pl-0 md:pl-64">
        <Hero />
      </main>
    </div>
  );
}
