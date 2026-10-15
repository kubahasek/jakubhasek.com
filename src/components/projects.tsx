export function Projects() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <span className="section-kicker">Projects & experience</span>
        <h2 id="work-title">Built to be used.</h2>
      </div>

      <article className="collaboration" aria-labelledby="akip-title">
        <div className="collaboration-copy">
          <div className="collaboration-meta">
            <span>Current collaboration</span>
            <span className="collaboration-status">Ongoing</span>
          </div>
          <div className="collaboration-intro">
            <p className="collaboration-company">AKIP Solutions</p>
            <h3 id="akip-title">Full-stack<br />developer.</h3>
            <p className="collaboration-description">
              I work with AKIP Solutions as a full-stack developer,
              contributing across frontend and backend.
            </p>
          </div>
          <div className="collaboration-scope" aria-label="Development focus">
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
            <span className="collaboration-note-label">Behind the scenes</span>
            <p>
              Project details are private. I’m happy to talk about
              my role and how I approach the work.
            </p>
          </div>
          <a
            className="collaboration-link"
            href="https://www.akip.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit AKIP’s website<span className="sr-only"> (opens in a new tab)</span></span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <article className="personal-project" aria-labelledby="lifeos-title">
        <div className="personal-project-intro">
          <span className="collaboration-note-label">Personal project · Solo</span>
          <h3 id="lifeos-title">LifeOS<span aria-hidden="true">.</span></h3>
          <p className="personal-project-tagline">A little more order. A little more life.</p>
          <div className="collaboration-scope" aria-label="Project focus">
            <span>Personal finance</span>
            <span>Life management</span>
          </div>
        </div>
        <div className="personal-project-details">
          <p className="personal-project-description">
            A personal app I’m building to manage my finances and other
            parts of everyday life. Designed, built, and used by me.
          </p>
          <div className="personal-project-note">
            <span className="collaboration-note-label">Built for an audience of one</span>
            <p>My own tool for daily life, built for personal use.</p>
          </div>
        </div>
      </article>
    </section>
  );
}
