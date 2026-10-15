import { useLocale } from "@/components/locale-provider";
export function About() {
  const { t } = useLocale();
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind",
    "mySQL",
    "Git",
    "Figma",
  ];

  return (
    <section id="about" className="min-h-screen px-6 py-24 md:px-16">
      <div className="max-w-4xl">
        <div className="mb-8 font-mono text-sm text-accent">
          $ cat about.txt
        </div>

        <div className="mb-12 rounded-lg border border-border bg-card p-8 shadow-sm">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            {t("About Me", "O mně")}
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              {t(
                "I'm a full-stack developer with a passion for creating beautiful, functional, and accessible web\n              experiences.",
                "Jsem Jakub, full-stack vývojář. Navrhuji a vyvíjím webové aplikace — od uživatelského rozhraní po logiku na serveru.",
              )}
            </p>
            <p>
              {t(
                "My expertise spans modern web technologies. I believe in writing clean, maintainable code and following\n              best practices.",
                "Záleží mi na tom, aby se aplikace dobře používala a dala se dál rozvíjet. Píšu přehledný kód a myslím na rychlost i přístupnost.",
              )}
            </p>
          </div>
        </div>

        <div className="mb-4 font-mono text-sm text-muted-foreground">
          {t("Skills & Technologies", "S čím pracuji")}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-lg border border-border bg-card p-4 text-center transition-all hover:border-accent hover:shadow-md"
            >
              <span className="font-medium text-foreground group-hover:text-accent">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
