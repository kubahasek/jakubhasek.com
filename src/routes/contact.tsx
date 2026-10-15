import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/contact";

export const Route = createFileRoute("/contact")({
  head: ({ match }) => ({
    meta: [
      {
        title:
          match.context.locale === "cs"
            ? "Kontakt - Jakub Hašek"
            : "Contact - Jakub Hašek",
      },
      {
        name: "description",
        content:
          match.context.locale === "cs"
            ? "Kontaktujte Jakuba Haška ohledně spolupráce nebo nového projektu."
            : "Get in touch with Jakub Hašek for collaboration opportunities, project inquiries, or just to say hello.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <Contact />;
}
