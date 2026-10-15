import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";

export const Route = createFileRoute("/about")({
  head: ({ match }) => ({
    meta: [
      {
        title:
          match.context.locale === "cs"
            ? "O mně - Jakub Hašek"
            : "About - Jakub Hašek",
      },
      {
        name: "description",
        content:
          match.context.locale === "cs"
            ? "Jakub Hašek — full-stack vývojář se zájmem o kvalitní webové aplikace."
            : "Learn more about Jakub Hašek, a Full-Stack Developer passionate about creating exceptional web experiences.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <About />;
}
