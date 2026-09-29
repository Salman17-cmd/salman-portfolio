// src/pages/GameDevExperience.jsx
import React from "react";
import { Link } from "react-router-dom";

import { experience, stats, profile } from "../data/portfolio";
import { Jobs, Stack } from "../components/Blocks";
import useReveal from "../hooks/useReveal";

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
  useReveal();

  return (
    <main id="main" className="page">
      <div className="wrap">
        <header className="page-head" data-reveal>
          <p className="section-kicker mono">
            <b>Story</b> Game &amp; XR experience
          </p>
          <h1 className="page-title">From a racing prototype to online multiplayer</h1>
          <p>
            How the work built up, from a university Unity course to enterprise VR on Meta
            Quest 3 and a released online Android game.
          </p>
          <div className="stats" style={{ marginTop: "4.8rem" }}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        <section className="block">
          <h2 className="block-title" data-reveal>
            <span className="mono">01</span> The journey
          </h2>
          <div className="timeline">
            {journey.map((step) => (
              <article className="timeline-step" key={step.title} data-reveal>
                <span className="mono">{step.date}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <Stack items={step.tags} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="block">
          <h2 className="block-title" data-reveal>
            <span className="mono">02</span> Roles in detail
          </h2>
          <Jobs experience={experience} />
        </section>

        <div className="page-end">
          <Link to="/resume" className="btn btn-primary">
            Full resume
          </Link>
          <a href={`mailto:${profile.email}`} className="btn">
            <i className="bx bx-envelope"></i> Work with me
          </a>
        </div>
      </div>
    </main>
  );
}
