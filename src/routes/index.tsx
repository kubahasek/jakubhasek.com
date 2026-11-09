import { LanguageSwitcher, useLocale } from "@/components/locale-provider";
import { createFileRoute } from "@tanstack/react-router";
import { usePostHog } from "@posthog/react";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Projects } from "@/components/projects";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  const { t } = useLocale();
  const posthog = usePostHog();
  const { theme, toggleTheme } = useTheme();
  const email = (placement: "hero" | "contact") => posthog?.capture("contact_email_initiated", { placement });
  const social = (network: "github" | "linkedin" | "x") => posthog?.capture("social_profile_opened", { network });

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{t("Skip to content", "Přejít na obsah")}</a>
      <header className="topbar">
        <a className="brand" href="#top" aria-label={t("Jakub Hašek, back to top", "Jakub Hašek, zpět nahoru")}>jh.</a>
        <nav aria-label={t("Main navigation", "Hlavní navigace")}>
          <a href="#work">{t("Work", "Projekty")}</a>
          <a href="#about">{t("About", "O mně")}</a>
          <a href="#contact">{t("Contact", "Kontakt")}</a>
          <a href="/cv">{t("CV", "Životopis")}</a>
        </nav>
        <div className="topbar-actions">
          <LanguageSwitcher />
          <button className="theme-toggle" type="button" onClick={toggleTheme}
            aria-label={t("Dark mode", "Tmavý režim")} aria-pressed={theme === "dark"}>
            <Moon className="theme-icon-moon" size={20} aria-hidden="true" />
            <Sun className="theme-icon-sun" size={20} aria-hidden="true" />
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="portfolio-hero" id="top" aria-labelledby="intro-title">
          <h1 className="name-lockup" id="intro-title" aria-label="Jakub Hašek">
            <span className="name-first">Jakub</span>
            <span className="name-last">Hašek</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-role">{t("Full-stack developer", "Full-stack vývojář")}</p>
            <p>{t("I design and build web apps, from the first sketch to the code that runs them.", "Navrhuji a vyvíjím webové aplikace. Od prvního náčrtu po kód, který je pohání.")}</p>
            <a className="button" href="mailto:me@jakubhasek.com" onClick={() => email("hero")}>
              {t("Email me", "Napište mi")}<ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </section>

        <Projects />

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-facts">
            <h2 id="about-title">{t("About me", "O mně")}</h2>
            <dl>
              <div><dt>{t("My focus", "Zaměření")}</dt><dd>Frontend & backend</dd></div>
              <div><dt>{t("My tools", "Nástroje")}</dt><dd>React, TypeScript, Node.js</dd></div>
              <div><dt>{t("Also working with", "Pracuji také s")}</dt><dd>Tailwind, MySQL, Git, Figma</dd></div>
            </dl>
          </div>
          <div className="about-copy">
            <p className="about-statement">{t("I care about what happens on both sides of the screen.", "Zajímá mě, co se děje na obou stranách obrazovky.")}</p>
            <p>{t("I’m Jakub. I connect interface design with frontend and backend development. I want the app to make sense to the people using it and the people building it next.", "Jsem Jakub. Propojuji návrh rozhraní s vývojem frontendu i backendu. Chci, aby aplikace dávala smysl lidem, kteří ji používají, i těm, kteří ji budou dál rozvíjet.")}</p>
            <p>{t("That means clear controls, accessible interfaces, fast pages and code you can build on. I choose the tools to fit the project.", "To znamená přehledné ovládání, přístupné rozhraní, rychlé stránky a kód, na kterém se dá stavět. Nástroje vybírám podle projektu.")}</p>
            <ul className="capabilities" aria-label={t("What I do", "Čemu se věnuji")}>
              <li>{t("Product engineering", "Vývoj produktů")}</li>
              <li>{t("Web applications", "Webové aplikace")}</li>
              <li>{t("Design systems", "Systémy UI komponent")}</li>
              <li>{t("Performance & accessibility", "Výkon a přístupnost")}</li>
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-intro">
            <h2 id="contact-title">{t("Let’s talk", "Pojďme to probrat")}</h2>
            <p>{t("Have an app in mind? Looking for a developer for your team? Tell me what you’re working on.", "Máte nápad na aplikaci? Hledáte vývojáře do týmu? Napište mi, co řešíte.")}</p>
          </div>
          <a className="contact-address" href="mailto:me@jakubhasek.com" onClick={() => email("contact")}>me@jakubhasek.com</a>
          <div className="contact-links">
            <a href="https://github.com/kubahasek" target="_blank" rel="noopener noreferrer" onClick={() => social("github")}>GitHub<span className="sr-only">{t(" (new tab)", " (nová karta)")}</span></a>
            <a href="https://www.linkedin.com/in/jakubhasek/" target="_blank" rel="noopener noreferrer" onClick={() => social("linkedin")}>LinkedIn<span className="sr-only">{t(" (new tab)", " (nová karta)")}</span></a>
            <a href="https://x.com/jakubhasekk" target="_blank" rel="noopener noreferrer" onClick={() => social("x")}>X<span className="sr-only">{t(" (new tab)", " (nová karta)")}</span></a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Jakub Hašek</span>
          <a href="#top">{t("Back to top", "Zpět nahoru")}</a>
          <button className="footer-button" type="button" onClick={() => window.dispatchEvent(new Event("show-analytics-preferences"))}>{t("Analytics settings", "Nastavení analytiky")}</button>
        </div>
        <div className="footer-name" aria-hidden="true">Jakub Hašek</div>
      </footer>
    </div>
  );
}
