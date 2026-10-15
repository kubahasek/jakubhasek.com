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
            ? "Plánujete webovou aplikaci nebo hledáte vývojáře do týmu? Napište mi a probereme možnosti spolupráce."
            : "Get in touch with Jakub Hašek for collaboration opportunities, project inquiries, or just to say hello.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <Contact />;
}
