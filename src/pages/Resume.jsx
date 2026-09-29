// src/pages/Resume.jsx
import React from "react";
import { Link } from "react-router-dom";

import {
  profile,
  experience,
  education,
  skillGroups,
  flagships,
  projects,
} from "../data/portfolio";
import { Stack, Status, Jobs, Skills } from "../components/Blocks";
import useReveal from "../hooks/useReveal";

export default function Resume() {
  useReveal();

  const earlierProjects = projects.filter((p) => !p.featured).slice(0, 9);

  return (
    <main id="main" className="page">
      <div className="wrap">
        <header className="page-head" data-reveal>
          <p className="section-kicker mono">
            <b>CV</b> Resume
          </p>
          <h1 className="page-title">{profile.name}</h1>
          <p>
            {profile.title}, {profile.subtitle}.
          </p>

          <div className="resume-contact mono">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">
              {profile.phone}
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>

          <div className="page-actions">
            <a href={profile.cv} className="btn btn-primary" download>
              <i className="bx bx-download"></i> Download PDF
            </a>
            <a href={`mailto:${profile.email}`} className="btn">
              <i className="bx bx-envelope"></i> Email me
            </a>
          </div>
        </header>

        <section className="block" data-reveal>
          <h2 className="block-title">
            <span className="mono">01</span> Profile
          </h2>
          <p>{profile.summary}</p>
          <p>{profile.summaryLong}</p>
        </section>

        <section className="block">
          <h2 className="block-title" data-reveal>
            <span className="mono">02</span> Experience
          </h2>
          <Jobs experience={experience} />
        </section>

        <section className="block">
          <h2 className="block-title" data-reveal>
            <span className="mono">03</span> Key projects
          </h2>
          <div className="resume-projects">
            {flagships.map((f) => (
              <article className="resume-project" key={f.title} data-reveal>
                <div>
                  <h3>{f.title}</h3>
                  <span className="mono">
                    {f.org} / {f.platform}
                  </span>
                  <div>
                    <Status text={f.status} live={f.statusType === "live"} />
                  </div>
                </div>
                <div>
                  <p>{f.tagline}</p>
                  <ul>
                    {f.highlights.map((h) => (
                      <li key={h.name}>
                        <strong>{h.name}:</strong> {h.text}
                      </li>
                    ))}
                  </ul>
                  <Stack items={f.stack} />
                  {f.links && (
                    <div className="project-links">
                      {f.links.map((l) => (
                        <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                          {l.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <h3 className="block-title" style={{ fontSize: "2rem", marginTop: "5.6rem" }} data-reveal>
            Earlier projects
          </h3>
          <div className="mini-projects">
            {earlierProjects.map((p) => (
              <div className="mini-project" key={p.title} data-reveal>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <Stack items={p.stack} />
              </div>
            ))}
          </div>
        </section>

        <section className="block">
          <h2 className="block-title" data-reveal>
            <span className="mono">04</span> Skills
          </h2>
          <Skills groups={skillGroups} />
        </section>

        <section className="block">
          <h2 className="block-title" data-reveal>
            <span className="mono">05</span> Education
          </h2>
          <Jobs experience={[]} education={education} />
        </section>

        <div className="page-end">
          <a href={profile.cv} className="btn btn-primary" download>
            <i className="bx bx-download"></i> Download the PDF
          </a>
          <Link to="/#projects" className="btn">
            See the projects
          </Link>
        </div>
      </div>
    </main>
  );
}
