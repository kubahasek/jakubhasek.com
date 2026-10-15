import { LanguageSwitcher, useLocale } from "@/components/locale-provider";
import { createFileRoute } from "@tanstack/react-router";
import { usePostHog } from "@posthog/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Projects } from "@/components/projects";

export const Route = createFileRoute("/")({ component: HomePage });

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HomePage() {
  const { t } = useLocale();
  const posthog = usePostHog();
  const { theme, toggleTheme } = useTheme();

  const captureEmailContact = (placement: "hero" | "contact") => {
    posthog?.capture("contact_email_initiated", { placement });
  };

  const captureSocialProfile = (network: "github" | "linkedin" | "x") => {
    posthog?.capture("social_profile_opened", { network });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#top"
          aria-label={t("Jakub Hašek, back to top", "Jakub Hašek, zpět nahoru")}
        >
          <span className="brand-mark">JH</span>
          <span className="brand-copy">
            Jakub Hašek
            <br />
            {t("Full-stack developer", "Full-stack vývojář")}
          </span>
        </a>
        <div className="topbar-actions">
          <nav aria-label={t("Main navigation", "Hlavní navigace")}>
            <a href="#work">{t("Work", "Projekty")}</a>
            <a href="#about">{t("About", "O mně")}</a>
            <a href="#contact">{t("Contact", "Kontakt")}</a>
          </nav>
          <LanguageSwitcher />
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={t("Dark mode", "Tmavý režim")}
            aria-pressed={theme === "dark"}
            title={t(
              "Toggle light / dark mode",
              "Přepnout světlý / tmavý režim",
            )}
          >
            <Moon className="theme-icon-moon" size={16} aria-hidden="true" />
            <Sun className="theme-icon-sun" size={16} aria-hidden="true" />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="intro-title">
          <div className="eyebrow">
            <span>{t("Independent developer", "Nezávislý vývojář")}</span>
            <span>{t("Prague · Worldwide", "Praha · Celý svět")}</span>
          </div>
          <h1 id="intro-title">
            {t("I turn complex", "Měním složité")}
            <br />
            {t("ideas into", "nápady v")} <em>{t("clear", "jasné")}</em>
            <br />
            {t("digital products.", "digitální produkty.")}
          </h1>
          <div className="hero-bottom">
            <p>
              {t(
                "I’m Jakub, a full-stack developer building thoughtful, fast, and useful experiences from first sketch to production.",
                "Jsem Jakub, full-stack vývojář. Tvořím promyšlené, rychlé a užitečné aplikace od prvního náčrtu po spuštění.",
              )}
            </p>
            <a
              className="round-link"
              href="mailto:me@jakubhasek.com"
              aria-label={t("Email Jakub", "Napsat Jakubovi")}
              onClick={() => captureEmailContact("hero")}
            >
              <Arrow />
            </a>
          </div>
        </section>

        <Projects />

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-label">
            <span>{t("About", "O mně")}</span>
            <span className="asterisk">✳</span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">
              {t(
                "Good software should feel obvious.",
                "Dobrý software se používá přirozeně.",
              )}
            </h2>
            <p>
              {t(
                "I work across product thinking, interface design, and engineering. That range helps me remove handoffs, keep the original idea intact, and ship with care.",
                "Propojuji produktové myšlení, návrh rozhraní a vývoj. Díky tomu ubývá předávání práce, původní myšlenka se neztrácí a výsledek drží pohromadě.",
              )}
            </p>
            <p>
              {t(
                "My tools change. The goal stays the same: make something people understand, trust, and enjoy using.",
                "Nástroje se mění. Cíl zůstává: tvořit věci, kterým lidé rozumí, důvěřují a rádi je používají.",
              )}
            </p>
          </div>
          <ul className="capabilities">
            <li>
              <span>01</span>
              {t("Product engineering", "Produktový vývoj")}
            </li>
            <li>
              <span>02</span>
              {t("Web applications", "Webové aplikace")}
            </li>
            <li>
              <span>03</span>
              {t("Design systems", "Design systémy")}
            </li>
            <li>
              <span>04</span>
              {t("Performance & accessibility", "Výkon a přístupnost")}
            </li>
          </ul>
        </section>

        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="section-kicker">
            {t("Have a project in mind?", "Máte nápad na projekt?")}
          </p>
          <h2 id="contact-title">
            {t("Let’s make it", "Pojďme to")}
            <br />
            <em>{t("real.", "vytvořit.")}</em>
          </h2>
          <a
            className="email-link"
            href="mailto:me@jakubhasek.com"
            onClick={() => captureEmailContact("contact")}
          >
            me@jakubhasek.com <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Jakub Hašek</span>
        <div>
          <button
            className="footer-button"
            type="button"
            onClick={() =>
              window.dispatchEvent(new Event("show-analytics-preferences"))
            }
          >
            {t("Analytics settings", "Nastavení analytiky")}
          </button>
          <a
            href="https://github.com/kubahasek"
            target="_blank"
            rel="noreferrer"
            onClick={() => captureSocialProfile("github")}
          >
            GitHub <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/jakubhasek/"
            target="_blank"
            rel="noreferrer"
            onClick={() => captureSocialProfile("linkedin")}
          >
            LinkedIn <Arrow />
          </a>
          <a
            href="https://x.com/jakubhasekk"
            target="_blank"
            rel="noreferrer"
            onClick={() => captureSocialProfile("x")}
          >
            X <Arrow />
          </a>
        </div>
      </footer>
    </div>
  );
}
