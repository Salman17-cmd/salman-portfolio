// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import {
  profile,
  stats,
  experience,
  education,
  skillGroups,
  proficiencies,
  flagships,
  filters,
  projects,
  services,
  techMarquee,
} from "../data/portfolio";

/* ── Rotating role headline ── */
function useTypedRole(words, typeSpeed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? typeSpeed / 2 : typeSpeed;

    if (!deleting && text === word) {
      delay = pause;
    } else if (deleting && text === "") {
      delay = 200;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, pause]);

  return text;
}

export default function Home() {
  /* ── Contact form ── */
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    emailSubject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleResponse = (code, msg) => {
    if (code === 200) {
      setStatus({ submitting: false, info: { error: false, msg } });
      setFormData({
        fullName: "",
        emailAddress: "",
        contactNumber: "",
        emailSubject: "",
        message: "",
      });
    } else {
      setStatus({ submitting: false, info: { error: true, msg } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, submitting: true }));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      handleResponse(res.status, data.success || data.error);
    } catch {
      handleResponse(500, "Something went wrong. Please try again later.");
    }
  };

  /* ── Project filtering + search ── */
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesFilter =
        activeFilter === "all" || p.tags.includes(activeFilter);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const typedRole = useTypedRole(profile.roles);

  /* ── Reveal animations ── */
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".sr-top", { distance: "50px", duration: 900, origin: "top", cleanup: true });
    sr.reveal(".sr-up", {
      distance: "50px",
      duration: 900,
      origin: "bottom",
      interval: 90,
      cleanup: true,
    });
  }, []);

  /* ── Scroll spy for the header nav ── */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 160) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach((link) => {
        const href = link.getAttribute("href") || "";
        link.classList.toggle(
          "active",
          href === `#${current}` || href === `/#${current}`
        );
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="hero" id="home">
        <div className="hero-aurora" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="status-pill">
              <span className="dot" /> Available for XR &amp; Unity work
            </span>

            <h1 className="title">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="typed-line">
              <span className="typed-text">{typedRole}</span>
              <span className="caret" />
            </p>

            <p className="hero-lede">{profile.summary}</p>

            <div className="hero-chips">
              <span className="tag">Meta Quest 2/3</span>
              <span className="tag">Multiplayer</span>
              <span className="tag">Android</span>
              <span className="tag">WebRTC</span>
              <span className="tag">Azure TTS</span>
              <span className="tag">WebGL</span>
            </div>

            {/* ── Player card: HUD readout of the stack ── */}
            <div className="hero-player">
              <div className="hero-player-top">
                <span className="lvl">LVL 02</span>
                <span>Class <b>Unity / XR Engineer</b></span>
                <span className="sep">/</span>
                <span>Region <b>{profile.location.split(",")[0]}, PK</b></span>
                <span className="sep">/</span>
                <span>Status <b>Online</b></span>
              </div>

              <div className="xp-row">
                <div className="xp-label">
                  <span>XP · Shipped VR &amp; multiplayer builds</span>
                  <span>15 / 20</span>
                </div>
                <div className="xp-bar">
                  <div className="xp-fill" style={{ width: "75%" }} />
                </div>
              </div>

              <div className="hero-perks">
                <span className="perk"><i className="bx bxl-unity" /> Unity Mastery</span>
                <span className="perk"><i className="bx bx-vr" /> Quest 3 Native</span>
                <span className="perk"><i className="bx bx-group" /> 10-Player Co-op</span>
                <span className="perk"><i className="bx bx-tachometer" /> 90 FPS Locked</span>
              </div>
            </div>

            <div className="cta">
              <a href={profile.cv} className="btn" download>
                <i className="bi bi-download"></i> Download CV
              </a>
              <Link to="/resume" className="btn ghost">
                <i className="bi bi-file-earmark-person"></i> View Resume
              </Link>
              <a href="#contact" className="btn link-btn">
                <i className="bi bi-envelope"></i> Hire Me
              </a>
            </div>

            <div className="social-media">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="bx bxl-github"></i></a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
              <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="bx bxl-youtube"></i></a>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
              <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bx bxl-whatsapp"></i></a>
            </div>
          </div>

          <div className="bento-container">
            <span className="tag">What I build</span>
            <div className="bento-grid">
              <div className="bento-item large glass">
                <i className="bx bx-vr"></i>
                <div className="bento-info">
                  <h3>VR Systems</h3>
                  <p>
                    Standalone Quest 3 experiences that hold 72/90 FPS - AI
                    classrooms, expo halls, and explorable campuses.
                  </p>
                </div>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-group"></i>
                <span>Multiplayer</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-broadcast"></i>
                <span>WebRTC</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-bot"></i>
                <span>AI Avatars</span>
              </div>
              <div className="bento-item medium glass">
                <i className="bx bx-tachometer"></i>
                <div className="bento-info">
                  <h3>Optimization</h3>
                  <p>LODs, batching, occlusion culling &amp; baked lighting.</p>
                </div>
              </div>
              <div className="bento-item glass">
                <i className="bx bxl-android"></i>
                <span>Android Games</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-server"></i>
                <span>Node APIs</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bxl-unity"></i>
                <span>Unity / C#</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
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
        </div>
      </section>

      {/* ── Tech marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span className="marquee-item" key={`${tech}-${i}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ==========================================================
          ABOUT
      ========================================================== */}
      <section id="about">
        <div className="container">
          <h2 className="heading sr-top">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-lede sr-top">
            Unity Developer based in {profile.location}, focused on VR, AR,
            multiplayer and AI-driven applications.
          </p>

          <div className="about-grid">
            <div className="card sr-up about-intro">
              <img src="/images/salman.png" alt="Salman Sadiq" />
              <h3>{profile.title} | {profile.subtitle}</h3>
              <p className="subtle">{profile.summaryLong}</p>
              <p className="subtle">
                Day to day that means shipping to Meta Quest 3 and Android
                against a strict frame budget, wiring multiplayer sessions from
                UGS Relay to my own .NET game server, and turning speech into
                believable facial animation.
              </p>
              <div className="mt-2 about-actions">
                <Link to="/resume" className="btn">Full Resume</Link>
                <a href={`mailto:${profile.email}`} className="btn ghost">Email Me</a>
              </div>
            </div>

            <div className="about-facts sr-up">
              <div className="fact-card">
                <i className="bx bx-briefcase-alt-2"></i>
                <div>
                  <strong>Latest role</strong>
                  <span>Associate Software Engineer @ Ilmversity</span>
                </div>
              </div>
              <div className="fact-card">
                <i className="bx bx-map"></i>
                <div>
                  <strong>Based in</strong>
                  <span>{profile.location}</span>
                </div>
              </div>
              <div className="fact-card">
                <i className="bx bx-headphone"></i>
                <div>
                  <strong>Primary target</strong>
                  <span>Meta Quest 2 / 3 standalone VR</span>
                </div>
              </div>
              <div className="fact-card">
                <i className="bx bx-graduation"></i>
                <div>
                  <strong>Education</strong>
                  <span>MCS, University of Okara</span>
                </div>
              </div>
              <div className="fact-card">
                <i className="bx bx-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
              <div className="fact-card">
                <i className="bx bx-phone"></i>
                <div>
                  <strong>Phone</strong>
                  <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          FLAGSHIP WORK
      ========================================================== */}
      <section id="work" className="flagship">
        <div className="container">
          <h2 className="heading sr-top">
            Flagship <span className="gradient-text">Work</span>
          </h2>
          <p className="section-lede sr-top">
            Enterprise VR and web work from Ilmversity, plus the online
            multiplayer board game I built and released on my own time.
          </p>

          {flagships.map((f, index) => (
            <article
              className={`spotlight sr-up ${index % 2 ? "reverse" : ""}`}
              key={f.title}
            >
              <div className={`spotlight-media ${f.logo ? "is-logo" : ""}`}>
                <img src={f.image} alt={f.title} loading="lazy" />
                <span className="spotlight-org">{f.org}</span>
              </div>

              <div className="spotlight-body">
                <h3>{f.title}</h3>
                {f.status && (
                  <span className={`wip-pill ${f.statusType === "live" ? "is-live" : ""}`}>
                    {f.status}
                  </span>
                )}
                <p className="subtle">{f.tagline}</p>

                <ul className="spotlight-points">
                  {f.highlights.map((h) => (
                    <li key={h.name}>
                      <i className="bx bx-check-circle"></i>
                      <span>
                        <strong>{h.name}:</strong> {h.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="chip-row">
                  {f.stack.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>

                {f.links && (
                  <div className="spotlight-links">
                    {f.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn ghost"
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
      </section>

      {/* ==========================================================
          SERVICES
      ========================================================== */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="heading sr-top">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="section-lede sr-top">
            The areas I am hired for most often.
          </p>

          <div className="service-grid">
            {services.map((s) => (
              <div className="service-card sr-up" key={s.title}>
                <i className={s.icon}></i>
                <h3>{s.title}</h3>
                <p className="subtle">{s.text}</p>
                <Link to={s.link} className="btn ghost mt-2">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROJECTS
      ========================================================== */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="heading sr-top">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-lede sr-top">
            {projects.length} shipped builds across VR, AR, mobile, PC, WebGL and the web.
          </p>

          <div className="project-toolbar sr-top">
            <ul className="project-filter">
              {filters.map((f) => (
                <li
                  key={f.key}
                  className={activeFilter === f.key ? "project-filter-active" : ""}
                  onClick={() => setActiveFilter(f.key)}
                >
                  {f.label}
                </li>
              ))}
            </ul>

            <div className="project-search">
              <i className="bx bx-search"></i>
              <input
                type="search"
                value={query}
                placeholder="Search projects or tech…"
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search projects"
              />
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((p) => (
              <article className="project-card" key={p.title}>
                <div className={`project-thumb ${p.logo ? "is-logo" : ""}`}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  {p.featured && <span className="featured-badge">Featured</span>}
                </div>

                <div className="project-body">
                  <h4>{p.title}</h4>
                  {p.status && (
                    <span className={`wip-pill ${p.statusType === "live" ? "is-live" : ""}`}>
                      {p.status}
                    </span>
                  )}
                  <p>{p.description}</p>

                  <div className="chip-row">
                    {p.stack.map((s) => (
                      <span className="mini-tag" key={s}>{s}</span>
                    ))}
                  </div>

                  <div className="icon-container">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={l.label}
                        aria-label={`${p.title}: ${l.label}`}
                      >
                        <i className={l.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            {visibleProjects.length === 0 && (
              <p className="empty-state">
                No projects match that search. Try another keyword.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SKILLS
      ========================================================== */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="heading sr-top">
            Skills &amp; <span className="gradient-text">Toolset</span>
          </h2>
          <p className="section-lede sr-top">
            The stack I work in, grouped the way I use it.
          </p>

          <div className="skill-grid">
            {skillGroups.map((g) => (
              <div className="skill-card sr-up" key={g.title}>
                <div className="skill-head">
                  <i className={g.icon}></i>
                  <h3>{g.title}</h3>
                </div>
                <div className="chip-row">
                  {g.skills.map((s) => (
                    <span className="mini-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="sub-heading sr-top">Proficiency</h3>
          <div className="prof-grid">
            {proficiencies.map((p) => (
              <div className="prof-card sr-up" key={p.name}>
                <div className="ring" style={{ "--percent": p.percent }}>
                  <svg viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" />
                    <circle cx="60" cy="60" r="52" />
                  </svg>
                  <span className="ring-val">{p.percent}%</span>
                </div>
                <h4>{p.name}</h4>
                <p>{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          EXPERIENCE & EDUCATION
      ========================================================== */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="heading sr-top">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-lede sr-top">
            Two years of shipping, and the degrees behind it.
          </p>

          <div className="timeline">
            {experience.map((job) => (
              <div className="timeline-item sr-up" key={job.role + job.company}>
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
                  <p className="subtle">{job.summary}</p>
                  <ul>
                    {job.points.slice(0, 4).map((pt, i) => (
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

            {education.map((ed) => (
              <div className="timeline-item sr-up" key={ed.degree}>
                <span className="timeline-dot edu" />
                <div className="timeline-card">
                  <span className="tag">{ed.period}</span>
                  <h3>{ed.degree}</h3>
                  <strong className="timeline-org">{ed.school}</strong>
                  <p className="subtle">{ed.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-3">
            <Link to="/resume" className="btn">
              <i className="bi bi-file-earmark-person"></i> See the full resume
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          CONTACT
      ========================================================== */}
      <section id="contact">
        <div className="container">
          <h2 className="heading sr-top">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-lede sr-top">
            Got a VR, AR or multiplayer idea? Tell me about it and I will reply.
          </p>

          <div className="contact-grid">
            <div className="contact-info sr-up">
              <a className="fact-card" href={`mailto:${profile.email}`}>
                <i className="bx bx-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <span>{profile.email}</span>
                </div>
              </a>
              <a className="fact-card" href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-whatsapp"></i>
                <div>
                  <strong>WhatsApp</strong>
                  <span>{profile.phone}</span>
                </div>
              </a>
              <a className="fact-card" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-linkedin"></i>
                <div>
                  <strong>LinkedIn</strong>
                  <span>Salman Sadiq</span>
                </div>
              </a>
              <a className="fact-card" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
                <div>
                  <strong>GitHub</strong>
                  <span>Salman17-cmd</span>
                </div>
              </a>
            </div>

            <form className="contact sr-up" onSubmit={handleSubmit}>
              <div className="row-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="row-2">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Mobile Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="emailSubject"
                  placeholder="Subject"
                  value={formData.emailSubject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              <button type="submit" className="btn" disabled={status.submitting}>
                {status.submitting ? "Sending…" : "Send Message"}
              </button>

              {status.info.msg && (
                <div
                  className={`form-message ${status.info.error ? "error" : "success"}`}
                >
                  {status.info.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
