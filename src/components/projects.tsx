import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const { t } = useLocale();
  const [active, setActive] = useState("akip");

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <h2 id="work-title" data-reveal>{t("Selected work", "Na čem pracuji")}</h2>
      <div className="work-layout">
        <div className="project-index" aria-label={t("Select a project", "Vyberte projekt")}>
          <button type="button" className="project-select" aria-pressed={active === "akip"} aria-controls="project-detail" onClick={() => setActive("akip")} data-reveal>
            <span>AKIP<br />Solutions</span>
            <span className="project-kind">{t("Full-stack development", "Full-stack vývoj")}</span>
          </button>
          <button type="button" className="project-select" aria-pressed={active === "lifeos"} aria-controls="project-detail" onClick={() => setActive("lifeos")} data-reveal>
            <span>LifeOS</span>
            <span className="project-kind">{t("My own application", "Vlastní aplikace")}</span>
          </button>
          <p className="project-hint" data-reveal>{t("Choose a name to see what’s behind it.", "Vyberte název a zjistěte víc.")}</p>
        </div>
        <div className="project-detail" id="project-detail" aria-live="polite" aria-atomic="true">
          {active === "akip" ? (
            <article key="akip" aria-labelledby="akip-title" className="project-story">
              <h3 id="akip-title">AKIP Solutions</h3>
              <p className="project-description">{t("I work with AKIP Solutions as a full-stack developer, contributing across frontend and backend.", "V AKIP Solutions se věnuji vývoji webových aplikací. Pracuji na uživatelském rozhraní i na tom, co běží na serveru.")}</p>
              <dl className="project-facts">
                <div><dt>{t("Collaboration", "Spolupráce")}</dt><dd>{t("Ongoing", "Průběžně")}</dd></div>
                <div><dt>{t("My role", "Moje role")}</dt><dd>{t("Full-stack developer", "Full-stack vývojář")}</dd></div>
              </dl>
              <p className="project-note">{t("Project details are private. I’m happy to talk about my role and how I approach the work.", "Podrobnosti projektů nemohu zveřejnit. Rád vám ale přiblížím svou roli a přístup k vývoji.")}</p>
              <a className="text-link" href="https://www.akip.cz/" target="_blank" rel="noopener noreferrer">{t("Visit AKIP’s website", "Navštívit web AKIP")}<ArrowUpRight size={20} aria-hidden="true" /><span className="sr-only">{t(" (new tab)", " (nová karta)")}</span></a>
            </article>
          ) : (
            <article key="lifeos" aria-labelledby="lifeos-title" className="project-story">
              <h3 id="lifeos-title">LifeOS</h3>
              <p className="project-description">{t("A personal app I’m building to manage my finances and other parts of everyday life. Designed, built, and used by me.", "LifeOS si stavím pro sebe. Pomáhá mi mít přehled o osobních financích i dalších věcech v běžném životě.")}</p>
              <dl className="project-facts">
                <div><dt>{t("My role", "Moje role")}</dt><dd>{t("Design & development", "Návrh i vývoj")}</dd></div>
                <div><dt>{t("Built for", "Pro koho")}</dt><dd>{t("Personal use", "Vlastní potřebu")}</dd></div>
              </dl>
              <p className="project-note">{t("I develop it around what I need day to day. A place to connect personal finance with life management.", "Aplikaci rozvíjím podle toho, co sám potřebuji. Propojuji v ní osobní finance s každodenním přehledem.")}</p>
              <a className="text-link" href="mailto:me@jakubhasek.com?subject=LifeOS">{t("Ask me about LifeOS", "Zeptat se na LifeOS")}<ArrowUpRight size={20} aria-hidden="true" /></a>
            </article>
          )}
        </div>
      </div>
      <noscript><p>{t("LifeOS is my own personal finance and life management app, designed and built for my own daily use.", "LifeOS je moje vlastní aplikace pro osobní finance a každodenní přehled. Navrhuji a vyvíjím ji pro vlastní potřebu.")}</p></noscript>
    </section>
  );
}
