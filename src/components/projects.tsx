import { useLocale } from "@/components/locale-provider";
export function Projects() {
  const { t } = useLocale();
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <span className="section-kicker">
          {t("Projects & experience", "Projekty a zkušenosti")}
        </span>
        <h2 id="work-title">{t("Built to be used.", "Pro skutečný život.")}</h2>
      </div>

      <article className="collaboration" aria-labelledby="akip-title">
        <div className="collaboration-copy">
          <div className="collaboration-meta">
            <span>{t("Current collaboration", "Aktuální spolupráce")}</span>
            <span className="collaboration-status">
              {t("Ongoing", "Probíhá")}
            </span>
          </div>
          <div className="collaboration-intro">
            <p className="collaboration-company">AKIP Solutions</p>
            <h3 id="akip-title">
              Full-stack
              <br />
              {t("developer.", "vývojář.")}
            </h3>
            <p className="collaboration-description">
              {t(
                "I work with AKIP Solutions as a full-stack developer,\n              contributing across frontend and backend.",
                "S AKIP Solutions spolupracuji jako full-stack vývojář. Podílím se na vývoji frontendu i backendu.",
              )}
            </p>
          </div>
          <div
            className="collaboration-scope"
            aria-label={t("Development focus", "Zaměření vývoje")}
          >
            <span>Frontend</span>
            <span>Backend</span>
          </div>
        </div>

        <div className="collaboration-details">
          <div className="collaboration-wordmark" aria-hidden="true">
            <span>AKIP</span>
            <span>Solutions</span>
          </div>
          <div className="collaboration-note">
            <span className="collaboration-note-label">
              {t("Behind the scenes", "Ze zákulisí")}
            </span>
            <p>
              {t(
                "Project details are private. I’m happy to talk about\n              my role and how I approach the work.",
                "Detaily projektů jsou neveřejné. Rád ale proberu svou roli a přístup k práci.",
              )}
            </p>
          </div>
          <a
            className="collaboration-link"
            href="https://www.akip.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              {t("Visit AKIP’s website", "Navštívit web AKIP")}
              <span className="sr-only">
                {t(" (opens in a new tab)", " (otevře se v nové kartě)")}
              </span>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <article className="personal-project" aria-labelledby="lifeos-title">
        <div className="personal-project-intro">
          <span className="collaboration-note-label">
            {t("Personal project · Solo", "Vlastní projekt · Solo")}
          </span>
          <h3 id="lifeos-title">
            LifeOS<span aria-hidden="true">.</span>
          </h3>
          <p className="personal-project-tagline">
            {t(
              "A little more order. A little more life.",
              "Trochu víc pořádku. Trochu víc života.",
            )}
          </p>
          <div
            className="collaboration-scope"
            aria-label={t("Project focus", "Zaměření projektu")}
          >
            <span>{t("Personal finance", "Osobní finance")}</span>
            <span>{t("Life management", "Organizace života")}</span>
          </div>
        </div>
        <div className="personal-project-details">
          <p className="personal-project-description">
            {t(
              "A personal app I’m building to manage my finances and other\n            parts of everyday life. Designed, built, and used by me.",
              "Vlastní aplikace pro správu financí a dalších oblastí každodenního života. Sám ji navrhuji, vyvíjím i používám.",
            )}
          </p>
          <div className="personal-project-note">
            <span className="collaboration-note-label">
              {t(
                "Built for an audience of one",
                "Vytvořeno pro jednoho uživatele",
              )}
            </span>
            <p>
              {t(
                "My own tool for daily life, built for personal use.",
                "Můj vlastní nástroj pro každodenní život a osobní použití.",
              )}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
