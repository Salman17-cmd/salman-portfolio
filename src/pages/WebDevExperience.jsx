// src/pages/WebDevExperience.jsx
import React from "react";
import { Link } from "react-router-dom";

import { Stack } from "../components/Blocks";
import useReveal from "../hooks/useReveal";

const steps = [
  {
    date: "Oct 2022",
    title: "Started web development",
    body: "Learned the basics: HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    date: "Apr 2023",
    title: "Bootstrap and Tailwind CSS",
    body: "Moved on to CSS frameworks to build responsive layouts faster.",
    tags: ["Bootstrap", "Tailwind CSS"],
  },
  {
    date: "Apr 2023 onward",
    title: "Practice projects",
    body: "Built small projects to get better: a live weather forecaster, a plagiarism remover, a text editor, e-commerce sites and a weather chatbot, plus this portfolio.",
    tags: ["Python", "Streamlit", "React"],
  },
  {
    date: "Aug 2023",
    title: "Web development intern, Codsoft",
    body: "A one-month internship working on portfolio and e-commerce websites.",
    tags: ["Internship"],
  },
  {
    date: "Sept 2023",
    title: "ASP.NET Core (Razor Pages)",
    body: "Full-stack semester projects on .NET: a restaurant management system and an online café management system.",
    tags: [".NET", "Razor Pages", "SQL"],
  },
  {
    date: "Jul 2024",
    title: "Flask",
    body: "Built a text editor and a real-time chat app, both on Firebase.",
    tags: ["Flask", "Firebase"],
  },
  {
    date: "Aug 2024",
    title: "Website for MLSA YE",
    body: "Started a full community website for the MLSA YE society on Flask.",
    tags: ["Flask", "Community"],
  },
  {
    date: "Oct 2025 to Sept 2026",
    title: "Node.js services at Ilmversity",
    body: "Built Node.js services for the Da1Ilmverse ecosystem, including the signaling server behind Unity Render Streaming, and session recording for the school admin portal: rrweb captures DOM events in retrying chunks, a Node.js API gzips them into AWS S3 with 30-day retention, and the super-admin panel can replay, delete or download a recording as an offline HTML player. I also traced a production outage where recordings were saved but never visible, and fixed it with an idempotent tenant migration.",
    tags: ["Node.js", "Express", "rrweb", "AWS S3", "MySQL"],
  },
  {
    date: "2026",
    title: ".NET game server for Empire Avenue",
    body: "Built and self-host an ASP.NET Core (.NET 9) WebSocket server for my online Android board game: REST room APIs, Google ID-token checks, AdMob server-side reward verification and account storage, deployed to a Google Cloud VM with systemd, Caddy HTTPS and nightly backups.",
    tags: [".NET 9", "WebSockets", "Google Cloud", "Linux"],
  },
];

export default function WebDevExperience() {
  useReveal();

  return (
    <main id="main" className="page">
      <div className="wrap">
        <header className="page-head" data-reveal>
          <p className="section-kicker mono">
            <b>Web</b> Web development
          </p>
          <h1 className="page-title">The web side of my work</h1>
          <p>
            Games are my main work, but I have been building for the web since 2022, and
            now I write the servers my games and VR apps depend on.
          </p>
        </header>

        <section className="block">
          <div className="timeline">
            {steps.map((step) => (
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

        <div className="page-end">
          <Link to="/resume" className="btn btn-primary">
            Full resume
          </Link>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
