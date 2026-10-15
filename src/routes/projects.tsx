import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/projects";

export const Route = createFileRoute("/projects")({
  head: ({ match }) => ({
    meta: [
      {
        title:
          match.context.locale === "cs"
            ? "Projekty - Jakub Hašek"
            : "Projects - Jakub Hašek",
      },
      {
        name: "description",
        content:
          match.context.locale === "cs"
            ? "Na čem pracuji: vývoj webových aplikací v AKIP Solutions a vlastní aplikace LifeOS pro přehled o financích a běžném životě."
            : "Jakub Hašek’s full-stack work with AKIP Solutions and LifeOS, a solo project for personal finance and life management.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}
