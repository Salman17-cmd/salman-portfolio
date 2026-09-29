// src/pages/GameDevExperience.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import { experience, stats, profile } from "../data/portfolio";

const journey = [
  {
    date: "2023 · University of Okara",
    title: "Where it started",
    body: "Began game development in the final semester of my MCS with a dedicated Unity course, building a car racing game on the Realistic Car Controller package as a first taste of physics-based vehicle mechanics.",
    tags: ["Unity", "RCC", "Vehicle Physics"],
  },
  {
    date: "2024 · 3-month internship",
    title: "Game Developer Intern - UET Game Studio",
    body: "First professional exposure: cinematic scenes for Police Cop Simulator, my first VR client project in VR Bio Lab (MRTK), and cinematic sequences for Horror Survival, which shipped on the Play Store.",
    tags: ["Timeline", "MRTK", "VR"],
  },
  {
    date: "2024 - 2025 · Full time",
    title: "Games & VR Developer - UET Game Studio",
    body: "Promoted to handle client projects and the studio portal. Led Waste Land of Living Dead (pathfinding, wave spawning, ragdolls, Photon PUN multiplayer on Opsive Character Controller), shipped Letter Cascade and Quiz the Globe to WebGL, and built Christmas VR, Car VR Simulation and ARPlace. Also mentored VR interns and rolled out Plastic SCM branching.",
    tags: ["Photon PUN", "Opsive CC", "WebGL", "XR Toolkit", "AR Foundation"],
  },
  {
    date: "Oct 2025 - Sept 2026 · Ilmversity",
    title: "Associate Software Engineer - Da1Ilmverse",
    body: "Enterprise VR for Meta Quest 3. Built AI teachers and expo robot guides that lip-sync to Azure TTS through a JSON-driven viseme-to-blendshape framework, a 10-user multiplayer meeting room on UGS Lobby & Relay with Netcode and Vivox voice, a Unity Render Streaming pipeline that puts a presenter's browser screen inside VR, and interactive physics, chemistry and coding modules with Firestore leaderboards, while holding 72/90 FPS with LODs, batching, occlusion culling and baked lightmaps.",
    tags: ["Meta Quest 3", "Azure TTS", "Firebase", "UGS Lobby & Relay", "Netcode", "Vivox", "WebRTC", "MCP", "DVC"],
  },
  {
    date: "Sept 2026 · Ilmversity (web)",
    title: "Session Recording & Replay",
    body: "On the web side, built rrweb session recording for the school admin portal: chunked, retrying capture streamed to a Node.js API, gzipped into AWS S3 with 30-day retention, and replayed or downloaded as an offline HTML player from the super-admin panel. Also traced and fixed the production issue that kept recordings invisible to the panel.",
    tags: ["rrweb", "Node.js", "AWS S3", "MySQL"],
  },
  {
    date: "2026 · Personal project",
    title: "Empire Avenue - released on itch.io",
    body: "Took a solo Unity 6 board game from offline pass-and-play to a released online Android game: a server-authoritative .NET 9 WebSocket server on Google Cloud, join codes, host approval, reconnect and server bots, Google Sign-In, cloud saves, AdMob rewarded ads with server-side verification, 450+ NUnit tests, and an APK cut from 527 MB to about 150 MB.",
    tags: ["Unity 6", ".NET 9", "WebSockets", "Google Cloud", "AdMob", "NUnit"],
  },
  {
    date: "Ongoing",
    title: "Web, tooling & AI on the side",
    body: "Node.js and Express services, this React portfolio with its Gemini-powered assistant, MCP tooling inside the Unity Editor for automated scene inspection, and DVC for versioning AI datasets, model artifacts and game art.",
    tags: ["Node.js", "React", "Gemini", "MCP", "DVC"],
  },
];

export default function GameDevExperience() {
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

  return (
    <main className="page">
      <div className="container">
        <h1 className="heading sr-top">
          Game &amp; XR <span className="gradient-text">Experience</span>
        </h1>
        <p className="section-lede sr-top">
          From a university racing prototype to enterprise VR on Meta Quest 3
          and a released online Android game. Here is how the work has built up.
        </p>

        <div className="stat-strip sr-up" style={{ marginTop: 0 }}>
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

        {/* ── Professional roles ── */}
        <h2 className="sub-heading sr-top">Professional Roles</h2>
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

        {/* ── The journey ── */}
        <h2 className="sub-heading sr-top">The Journey</h2>
        <div className="timeline">
          {journey.map((step) => (
            <div className="timeline-item sr-up" key={step.title}>
              <span className="timeline-dot edu" />
              <div className="timeline-card">
                <span className="tag">{step.date}</span>
                <h3>{step.title}</h3>
                <p className="subtle">{step.body}</p>
                <div className="chip-row">
                  {step.tags.map((t) => (
                    <span className="mini-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <Link to="/resume" className="btn">
            <i className="bi bi-file-earmark-person"></i> Full Resume
          </Link>{" "}
          <a href={`mailto:${profile.email}`} className="btn ghost">
            <i className="bi bi-envelope"></i> Work With Me
          </a>
        </div>
      </div>
    </main>
  );
}
