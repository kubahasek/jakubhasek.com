import { useLocale } from "@/components/locale-provider";
export function Contact() {
  const { t } = useLocale();
  return (
    <section id="contact" className="min-h-screen px-6 py-24 md:px-16">
      <div className="max-w-4xl">
        <div className="mb-8 font-mono text-sm text-accent">
          $ cat contact.txt
        </div>

        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          {t("Get In Touch", "Ozvěte se")}
        </h2>

        <div className="mb-12 rounded-lg border border-border bg-card p-8 shadow-sm">
          <div className="mb-8 space-y-2 text-lg leading-relaxed text-muted-foreground">
            <p>
              {t(
                "Let's work together on your next project.",
                "Máte nápad na aplikaci nebo hledáte vývojáře do týmu?",
              )}
            </p>
            <p>
              {t(
                "I'm always interested in hearing about new opportunities and collaborations.",
                "Napište mi, co řešíte. Rád s vámi proberu, jak bych mohl pomoct.",
              )}
            </p>
          </div>

          <div className="mb-8">
            <div className="mb-3 text-sm font-medium text-muted-foreground">
              Email
            </div>
            <a
              href="mailto:me@jakubhasek.com"
              className="inline-block rounded-lg bg-foreground px-8 py-4 font-medium text-background transition-all hover:bg-foreground/90 hover:shadow-lg"
            >
              me@jakubhasek.com
            </a>
          </div>

          <div>
            <div className="mb-4 text-sm font-medium text-muted-foreground">
              {t("Connect", "Sociální sítě")}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/kubahasek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <span className="text-border">•</span>
              <a
                href="https://www.linkedin.com/in/jakubhasek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <span className="text-border">•</span>
              <a
                href="https://x.com/jakubhasekk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <footer className="border-t border-border pt-8">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jakub Hašek.{" "}
            {t("All rights reserved.", "Všechna práva vyhrazena.")}
          </div>
        </footer>
      </div>
    </section>
  );
}
