// src/pages/Resume.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import {
  profile,
  stats,
  experience,
  education,
  skillGroups,
  flagships,
  projects,
} from "../data/portfolio";

export default function Resume() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".sr-up", {
      distance: "50px",
      duration: 900,
      origin: "bottom",
      interval: 90,
      cleanup: true,
    });
    sr.reveal(".sr-top", { distance: "40px", duration: 900, origin: "top", cleanup: true });
  }, []);

  const earlierProjects = projects.filter((p) => !p.featured).slice(0, 8);

  return (
    <main className="page resume-page">
      <div className="container">
        {/* ── Header card ── */}
        <header className="resume-hero sr-top">
          <img src="/images/salman.png" alt={profile.name} />
          <div>
            <h1>
              {profile.name.split(" ")[0]}{" "}
              <span className="gradient-text">{profile.name.split(" ")[1]}</span>
            </h1>
            <p className="resume-role">
              {profile.title} | {profile.subtitle}
            </p>
            <ul className="resume-contact">
              <li><i className="bx bx-map"></i> {profile.location}</li>
              <li>
                <i className="bx bx-envelope"></i>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <i className="bx bxl-whatsapp"></i>
                <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                  {profile.phone}
                </a>
              </li>
              <li>
                <i className="bx bxl-linkedin"></i>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <i className="bx bxl-github"></i>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>

            <div className="cta">
              <a href={profile.cv} className="btn" download>
                <i className="bi bi-download"></i> Download PDF
              </a>
              <a href={`mailto:${profile.email}`} className="btn ghost">
                <i className="bi bi-envelope"></i> Contact Me
              </a>
              <Link to="/#projects" className="btn link-btn">
                <i className="bi bi-collection"></i> See Projects
              </Link>
            </div>
          </div>
        </header>

        {/* ── Stats ── */}
        <div className="stat-strip sr-up">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <i className={s.icon}></i>
              <div>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Profile ── */}
        <section className="resume-block sr-up">
          <h2 className="block-title">
            <i className="bx bx-user-voice"></i> Profile
          </h2>
          <p>{profile.summary}</p>
          <p className="subtle">{profile.summaryLong}</p>
        </section>

        {/* ── Experience ── */}
        <section className="resume-block sr-up">
          <h2 className="block-title">
            <i className="bx bx-briefcase"></i> Experience
          </h2>

          <div className="timeline">
            {experience.map((job) => (
              <div className="timeline-item" key={job.role + job.company}>
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-top">
                    <span className="tag">{job.period}</span>
                    {job.current && <span className="live-pill">Current</span>}
                  </div>
                  <h3>{job.role}</h3>
                  <strong className="timeline-org">
                    {job.company} · {job.location}
                  </strong>
                  <ul>
                    {job.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="chip-row">
                    {job.stack.map((s) => (
                      <span className="mini-tag" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="resume-block sr-up">
          <h2 className="block-title">
            <i className="bx bx-code-block"></i> Skills
          </h2>
          <div className="skill-table">
            {skillGroups.map((g) => (
              <div className="skill-row" key={g.title}>
                <div className="skill-row-label">
                  <i className={g.icon}></i> {g.title}
                </div>
                <div className="chip-row">
                  {g.skills.map((s) => (
                    <span className="mini-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="resume-block sr-up">
          <h2 className="block-title">
            <i className="bx bx-book-reader"></i> Education
          </h2>
          <div className="edu-grid">
            {education.map((ed) => (
              <div className="edu-card" key={ed.degree}>
                <span className="tag">{ed.period}</span>
                <h3>{ed.degree}</h3>
                <strong className="timeline-org">{ed.school}</strong>
                <p className="subtle">{ed.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key projects ── */}
        <section className="resume-block sr-up">
          <h2 className="block-title">
            <i className="bx bx-cube-alt"></i> Key Projects
          </h2>

          {flagships.map((f) => (
            <div className="resume-project" key={f.title}>
              <h3>
                {f.title} <span className="org-note">| {f.org}</span>
              </h3>
              {f.status && (
                <span className={`wip-pill ${f.statusType === "live" ? "is-live" : ""}`}>
                  {f.status}
                </span>
              )}
              <p className="subtle">{f.tagline}</p>
              <ul>
                {f.highlights.map((h) => (
                  <li key={h.name}>
                    <strong>{h.name}:</strong> {h.text}
                  </li>
                ))}
              </ul>
              <div className="chip-row">
                {f.stack.map((s) => (
                  <span className="mini-tag" key={s}>{s}</span>
                ))}
                {f.links &&
                  f.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-tag is-link"
                    >
                      <i className={l.icon}></i> {l.label}
                    </a>
                  ))}
              </div>
            </div>
          ))}

          <h3 className="sub-heading">Earlier Projects · UET Game Studio</h3>
          <div className="mini-project-grid">
            {earlierProjects.map((p) => (
              <div className="mini-project" key={p.title}>
                <h4>{p.title}</h4>
                <p className="subtle">{p.description}</p>
                <div className="chip-row">
                  {p.stack.map((s) => (
                    <span className="mini-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-3">
          <a href={profile.cv} className="btn" download>
            <i className="bi bi-download"></i> Download the PDF version
          </a>
        </div>
      </div>
    </main>
  );
}
