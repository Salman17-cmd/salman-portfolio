// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  profile,
  stats,
  experience,
  education,
  skillGroups,
  flagships,
  filters,
  projects,
  services,
} from "../data/portfolio";
import { SectionHead, Stack, Status, Jobs, Skills } from "../components/Blocks";
import useReveal from "../hooks/useReveal";

const REEL = [
  { src: "/images/EH.png", title: "Da1Expo Hall", meta: "Meta Quest 3" },
  { src: "/images/empire-avenue.jpg", title: "Empire Avenue", meta: "Android, online" },
  { src: "/images/DCS4.PNG", title: "Car VR Simulation", meta: "XR Toolkit" },
  { src: "/images/zs2.PNG", title: "Waste Land of Living Dead", meta: "Photon PUN" },
  { src: "/images/HS1.PNG", title: "Horror Survival", meta: "Google Play" },
];

// The flagships already have their own section; the grid shows the rest.
const moreProjects = projects.filter((p) => !p.featured);

const PLATFORM_LABEL = {
  vr: "VR",
  ar: "AR",
  webgl: "WebGL",
  android: "Android",
  pc: "PC",
  web: "Web",
};

function Reel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % REEL.length), 4200);
    return () => clearInterval(timer);
  }, [index]);

  const shot = REEL[index];

  return (
    <figure className="reel">
      <div className="reel-screen">
        {REEL.map((r, i) => (
          <img
            key={r.src}
            src={r.src}
            alt={i === index ? `${r.title} screenshot` : ""}
            className={i === index ? "is-on" : ""}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <figcaption className="reel-bar mono">
        <span>
          <strong>{shot.title}</strong> / {shot.meta}
        </span>
        <span className="reel-dots">
          {REEL.map((r, i) => (
            <button
              key={r.src}
              type="button"
              className={i === index ? "is-on" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Show ${r.title}`}
            />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

const EMPTY_FORM = {
  fullName: "",
  emailAddress: "",
  contactNumber: "",
  emailSubject: "",
  message: "",
};

export default function Home() {
  /* ── Contact form ── */
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ submitting: false, error: false, msg: null });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: false, msg: null });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.status === 200) {
        setStatus({ submitting: false, error: false, msg: data.success });
        setFormData(EMPTY_FORM);
      } else {
        setStatus({ submitting: false, error: true, msg: data.error });
      }
    } catch {
      setStatus({
        submitting: false,
        error: true,
        msg: "Something went wrong. Please email me directly instead.",
      });
    }
  };

  /* ── Project filtering ── */
  const [activeFilter, setActiveFilter] = useState("all");
  const counts = useMemo(() => {
    const c = { all: moreProjects.length };
    moreProjects.forEach((p) => p.tags.forEach((t) => (c[t] = (c[t] || 0) + 1)));
    return c;
  }, []);
  const visibleProjects = useMemo(
    () => moreProjects.filter((p) => activeFilter === "all" || p.tags.includes(activeFilter)),
    [activeFilter]
  );

  useReveal([activeFilter]);

  return (
    <main id="main">
      {/* ── Hero ── */}
      <section className="hero" id="home">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <a
                className="news-link mono"
                href={profile.socials.itch}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="tag-new">New</span>
                Empire Avenue v0.4 is live on itch.io
                <i className="bx bx-right-arrow-alt"></i>
              </a>

              <h1>
                I build VR worlds, multiplayer games <em>and the servers behind them.</em>
              </h1>

              <p className="hero-lede">
                I&apos;m <strong>{profile.name}</strong>, a Unity developer in Lahore. For two
                years I&apos;ve shipped to Meta Quest 3, Android and the browser: AI teachers
                that talk back, a 10-player VR meeting room, and{" "}
                <strong>Empire Avenue</strong>, an online board game I built, host and run
                myself.
              </p>

              <div className="hero-cta">
                <a href="#work" className="btn btn-primary">
                  See my work <i className="bx bx-down-arrow-alt"></i>
                </a>
                <a href={profile.cv} className="btn" download>
                  <i className="bx bx-download"></i> Download CV
                </a>
              </div>

              <div className="hero-socials mono">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a>
                <a href={profile.socials.itch} target="_blank" rel="noopener noreferrer">itch.io ↗</a>
              </div>
            </div>

            <div className="hero-media">
              <Reel />
            </div>
          </div>

          <div className="stats" data-reveal>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className="section" id="work">
        <div className="wrap">
          <SectionHead index="01" label="Selected work" title="Things I've built and shipped">
            Four projects that show how I work, from an enterprise VR campus to a game I
            designed, built, hosted and released on my own.
          </SectionHead>

          <div className="cases">
            {flagships.map((f, i) => (
              <article className="case" key={f.title}>
                <div className={`case-media ${f.logo ? "is-logo" : ""}`} data-reveal>
                  <img src={f.image} alt={`${f.title} screenshot`} loading="lazy" />
                  <span className="case-index mono">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div data-reveal>
                  <div className="case-meta mono">
                    <span>{f.org}</span>
                    <span>{f.platform}</span>
                    <Status text={f.status} live={f.statusType === "live"} />
                  </div>
                  <h3>{f.title}</h3>
                  <p className="case-tagline">{f.tagline}</p>

                  <ul className="case-points">
                    {f.highlights.slice(0, 4).map((h) => (
                      <li key={h.name}>
                        <strong>{h.name}</strong>
                        {h.text}
                      </li>
                    ))}
                  </ul>

                  <Stack items={f.stack} />

                  {f.links && (
                    <div className="case-links">
                      {f.links.map((l, li) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-sm ${li === 0 ? "btn-primary" : ""}`}
                        >
                          <i className={l.icon}></i> {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── More projects ── */}
      <section className="section" id="projects">
        <div className="wrap">
          <SectionHead index="02" label="Projects" title="More builds">
            Client work from UET Game Studio and side projects, across VR, AR, mobile, PC,
            WebGL and the web.
          </SectionHead>

          <div className="filters mono" role="tablist" aria-label="Filter projects">
            {filters.filter((f) => counts[f.key]).map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === f.key}
                className={activeFilter === f.key ? "is-active" : ""}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
                <sup>{counts[f.key] || 0}</sup>
              </button>
            ))}
          </div>

          <div className="projects">
            {visibleProjects.map((p) => (
              <article className="project" key={p.title}>
                <div className={`project-thumb ${p.logo ? "is-logo" : ""}`}>
                  <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                  {p.status && <span className="status mono is-live">{p.status}</span>}
                </div>
                <div className="project-head">
                  <h4>{p.title}</h4>
                  <span className="mono">
                    {p.tags.map((t) => PLATFORM_LABEL[t]).join(" / ")}
                  </span>
                </div>
                <p>{p.description}</p>
                <Stack items={p.stack} />
                {p.links.length > 0 && (
                  <div className="project-links">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                        aria-label={`${p.title}: ${l.label}`}
                      >
                        {l.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section" id="about">
        <div className="wrap">
          <SectionHead index="03" label="About" title="A game developer who also ships the backend" />

          <div className="about-grid">
            <figure className="about-photo" data-reveal>
              <img src="/images/salman.png" alt={profile.name} loading="lazy" />
              <figcaption className="mono">Lahore, Pakistan</figcaption>
            </figure>

            <div className="about-copy" data-reveal>
              <p>
                I started with a Unity racing game in the last semester of my master&apos;s and
                haven&apos;t stopped since. At <strong>UET Game Studio</strong> I shipped VR,
                mobile, PC and WebGL titles. At <strong>Ilmversity</strong> I built enterprise
                VR for Meta Quest 3: AI teachers that lip-sync to their own speech, a
                multiplayer meeting room, and live screen streaming into VR.
              </p>
              <p>
                What I enjoy most is the part players never see: keeping a headset at{" "}
                <strong>72/90 FPS</strong>, making a room survive a player dropping out, and
                writing the <strong>.NET server</strong> my own game runs on.
              </p>

              <dl className="facts">
                <div>
                  <dt className="mono">Focus</dt>
                  <dd>VR, multiplayer, Android</dd>
                </div>
                <div>
                  <dt className="mono">Main tools</dt>
                  <dd>Unity, C#, .NET</dd>
                </div>
                <div>
                  <dt className="mono">Education</dt>
                  <dd>MCS, University of Okara</dd>
                </div>
                <div>
                  <dt className="mono">Email</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="services">
            {services.map((s, i) => (
              <div className="service" key={s.title} data-reveal>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="section" id="experience">
        <div className="wrap">
          <SectionHead index="04" label="Experience" title="Where I've worked">
            Two studios, two years, and the degrees behind them. The full list is on the{" "}
            <Link to="/resume" className="link-arrow">resume</Link>.
          </SectionHead>
          <Jobs experience={experience} education={education} limit={4} />
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section" id="skills">
        <div className="wrap">
          <SectionHead index="05" label="Skills" title="Toolbox">
            Grouped the way I actually use them on a project.
          </SectionHead>
          <Skills groups={skillGroups} />
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-lead" data-reveal>
            <p className="section-kicker mono">
              <b>06</b> Contact
            </p>
            <h2>Have a game or XR project? Let&apos;s talk.</h2>
            <p>
              I&apos;m open to Unity, VR and multiplayer roles and freelance work. The fastest
              way to reach me is email, and I usually reply the same day.
            </p>
            <a className="big-email" href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>

            <div className="contact-list">
              <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp <span className="mono">{profile.phone}</span>
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span className="mono">salman-sadiq ↗</span>
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                GitHub <span className="mono">Salman17-cmd ↗</span>
              </a>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit} data-reveal>
            <div className="form-row">
              <div className="field">
                <label className="mono" htmlFor="f-name">Name</label>
                <input id="f-name" type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required autoComplete="name" />
              </div>
              <div className="field">
                <label className="mono" htmlFor="f-email">Email</label>
                <input id="f-email" type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} required autoComplete="email" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label className="mono" htmlFor="f-phone">Phone (optional)</label>
                <input id="f-phone" type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} autoComplete="tel" />
              </div>
              <div className="field">
                <label className="mono" htmlFor="f-subject">Subject</label>
                <input id="f-subject" type="text" name="emailSubject" value={formData.emailSubject} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="field">
              <label className="mono" htmlFor="f-message">Message</label>
              <textarea id="f-message" name="message" value={formData.message} onChange={handleInputChange} required />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status.submitting}>
              {status.submitting ? "Sending…" : "Send message"}
              {!status.submitting && <i className="bx bx-send"></i>}
            </button>

            {status.msg && (
              <p className={`form-msg ${status.error ? "is-error" : "is-ok"}`} role="status">
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
