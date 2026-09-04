import { createFileRoute } from "@tanstack/react-router";
import { usePostHog } from "@posthog/react";

const projects = [
  {
    number: "01",
    title: "Commerce, made clear",
    description: "A full-stack storefront with live inventory, payments, and a focused operations dashboard.",
    tags: ["TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Work, in sync",
    description: "A collaborative task system built around real-time updates, shared spaces, and useful filters.",
    tags: ["React", "Node.js", "WebSockets"],
  },
  {
    number: "03",
    title: "A portfolio, faster",
    description: "A publishing toolkit that helps developers shape and ship a personal site without the busywork.",
    tags: ["TanStack", "Cloudflare", "MDX"],
  },
  {
    number: "04",
    title: "Signals, not noise",
    description: "An analytics workspace that turns live product data into decisions teams can act on.",
    tags: ["React", "Data viz", "Redis"],
  },
];

export const Route = createFileRoute("/")({ component: HomePage });

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HomePage() {
  const posthog = usePostHog();

  const captureEmailContact = (placement: "hero" | "contact") => {
    posthog?.capture("contact_email_initiated", { placement });
  };

  const captureSocialProfile = (network: "github" | "linkedin" | "x") => {
    posthog?.capture("social_profile_opened", { network });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Jakub Hašek, back to top">
          <span className="brand-mark">JH</span>
          <span className="brand-copy">Jakub Hašek<br />Full-stack developer</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="intro-title">
          <div className="eyebrow"><span>Independent developer</span><span>Prague · Worldwide</span></div>
          <h1 id="intro-title">I turn complex<br />ideas into <em>clear</em><br />digital products.</h1>
          <div className="hero-bottom">
            <p>I’m Jakub, a full-stack developer building thoughtful, fast, and useful experiences from first sketch to production.</p>
            <a
              className="round-link"
              href="mailto:me@jakubhasek.com"
              aria-label="Email Jakub"
              onClick={() => captureEmailContact("hero")}
            >
              <Arrow />
            </a>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <span className="section-kicker">Selected work</span>
            <h2 id="work-title">Built to be used.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.number}</span><Arrow /></div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul aria-label="Technologies">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-label"><span>About</span><span className="asterisk">✳</span></div>
          <div className="about-copy">
            <h2 id="about-title">Good software should feel obvious.</h2>
            <p>I work across product thinking, interface design, and engineering. That range helps me remove handoffs, keep the original idea intact, and ship with care.</p>
            <p>My tools change. The goal stays the same: make something people understand, trust, and enjoy using.</p>
          </div>
          <ul className="capabilities">
            <li><span>01</span>Product engineering</li>
            <li><span>02</span>Web applications</li>
            <li><span>03</span>Design systems</li>
            <li><span>04</span>Performance & accessibility</li>
          </ul>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker">Have a project in mind?</p>
          <h2 id="contact-title">Let’s make it<br /><em>real.</em></h2>
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
            onClick={() => window.dispatchEvent(new Event("show-analytics-preferences"))}
          >
            Analytics settings
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
