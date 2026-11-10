import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { LanguageSwitcher, useLocale } from "@/components/locale-provider";
import { cvContent } from "@/lib/cv-content";
import "@/cv.css";

export const Route = createFileRoute("/cv")({
  head: ({ match }) => ({ meta: [{ title: match.context.locale === "cs" ? "Životopis — Jakub Hašek" : "CV — Jakub Hašek" }, { name: "description", content: match.context.locale === "cs" ? "Životopis Jakuba Haška, full-stack vývojáře. Zkušenosti, projekty a vzdělání." : "Jakub Hašek’s CV. Full-stack development experience, projects, skills, and education." }] }),
  component: CVPage,
});

function CVPage() {
  const { locale, t } = useLocale();
  const d = cvContent[locale];
  const sheet = useRef<HTMLDivElement>(null);
  const desk = useRef<HTMLElement>(null);
  useEffect(() => {
    const paper = sheet.current;
    const area = desk.current;
    if (!paper || !area) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0, x = 0, y = 0, tx = 0, ty = 0, previous = 0;
    const tick = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 50) : 16;
      previous = time;
      const factor = 1 - Math.exp(-elapsed / 110);
      x += (tx - x) * factor; y += (ty - y) * factor;
      paper.style.transform = `translate(${Math.round(x * 6)}px,${Math.round(y * 4)}px) rotate(${x * .6}deg) skewX(${y * .5}deg)`;
      frame = 0;
      if (Math.abs(tx - x) + Math.abs(ty - y) > .001) frame = requestAnimationFrame(tick);
      else {
        previous = 0;
        if (tx === 0 && ty === 0) paper.style.transform = "none";
      }
    };
    const start = () => { if (!frame) frame = requestAnimationFrame(tick); };
    const move = (event: PointerEvent) => {
      if (motion.matches || !fine.matches || event.pointerType !== "mouse") return;
      const r = area.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, (event.clientX - r.left - r.width / 2) / (r.width / 2)));
      ty = Math.max(-1, Math.min(1, (event.clientY - r.top - r.height / 2) / (r.height / 2)));
      start();
    };
    const leave = () => { tx = ty = 0; start(); };
    const reset = () => { cancelAnimationFrame(frame); frame = 0; previous = x = y = tx = ty = 0; paper.style.transform = "none"; };
    area.addEventListener("pointermove", move);
    area.addEventListener("pointerleave", leave);
    area.addEventListener("pointercancel", leave);
    motion.addEventListener("change", reset); fine.addEventListener("change", reset);
    return () => { reset(); area.removeEventListener("pointermove", move); area.removeEventListener("pointerleave", leave); area.removeEventListener("pointercancel", leave); motion.removeEventListener("change", reset); fine.removeEventListener("change", reset); };
  }, []);
  return <div className="cv-page">
    <a className="skip-link" href="#cv-content">{t("Skip to content", "Přejít na obsah")}</a>
    <header className="topbar cv-topbar"><a className="brand" href="/" aria-label={t("Home", "Úvod")}>jh.</a><div className="cv-actions"><LanguageSwitcher /><button type="button" onClick={() => window.print()}>{d.print} ↗</button></div></header>
    <main className="cv-desk" ref={desk} id="cv-content"><div className="cv-sheet" ref={sheet}><div className="cv-paper-surface" aria-hidden="true" /><article className="cv-paper">
      <header className="cv-heading"><p className="cv-eyebrow">CURRICULUM VITAE</p><h1>Jakub<br />Hašek.</h1><p className="cv-role">{d.role}</p><div className="cv-postage" aria-label={t("Illustrated Prague postage stamp", "Ilustrovaná pražská známka")}><span>CZECHIA</span><img src="/prague-stamp.svg" width="96" height="88" alt="" /><strong>PRAGUE</strong></div><div className="cv-contact"><span>{d.location}</span><a href="mailto:me@jakubhasek.com">me@jakubhasek.com</a><a href="https://github.com/kubahasek">GitHub ↗</a><a href="https://www.linkedin.com/in/jakubhasek/">LinkedIn ↗</a></div></header>
      <section className="cv-full-width"><h2>{d.profile}</h2><p>{d.summary}</p></section>
      <section className="cv-full-width"><h2>{d.experience}</h2><h3>AKIP Solutions · Full Stack Developer</h3><p className="cv-meta">2023–{d.now}</p><ul>{d.work.map(line => <li key={line}>{line}</li>)}</ul><p className="cv-meta">AngularJS · NestJS · React · MySQL</p></section>
      <section className="cv-full-width"><h2>{d.projects}</h2><h3>LifeOS</h3><p className="cv-meta">2026–{d.now} · TanStack Start</p><ul>{d.life.map(line => <li key={line}>{line}</li>)}</ul></section>
      <section><h2>{d.skills}</h2><dl className="cv-skills">{[[d.languages,"TypeScript, JavaScript"],[d.frontend,"React, Next.js, TanStack Start, AngularJS"],["Backend","NestJS"],[d.databases,"PostgreSQL, MySQL"]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
      <section className="cv-education"><h2>{d.education}</h2><div className="cv-entry"><h3>{d.uni}</h3><p>{d.programme}</p><p className="cv-meta">2023–{d.now}</p><p>{d.degree}</p></div><div className="cv-entry"><h3>{d.school}</h3><p>{d.study}</p><p className="cv-meta">2019–2023</p><p>{d.maturita}</p></div></section>
      <section><h2>{d.cert}</h2><p><strong>{d.czech}</strong> · C2</p><p><strong>{d.english}</strong> · C2</p><p className="cv-meta">{d.exam}</p></section>
      <footer className="cv-bottom"><a href="/">JAKUBHASEK.COM ↗</a><span>{d.role}</span></footer>
    </article></div></main><p className="cv-motion-hint">{d.hint}</p>
  </div>;
}
