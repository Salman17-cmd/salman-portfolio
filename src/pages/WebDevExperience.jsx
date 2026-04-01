// src/pages/WebDevExperience.jsx
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../css/vertical-timeline.css";

export default function WebDevExperience() {
  useEffect(() => {
    // Reveal animations for timeline items
    ScrollReveal().reveal(".timeline-event", {
      distance: "60px",
      duration: 900,
      origin: "bottom",
      interval: 120,
      easing: "ease-out",
      cleanup: true,
    });

    // Reveal section headings
    ScrollReveal().reveal(".heading", {
      distance: "40px",
      duration: 900,
      origin: "top",
      easing: "ease-out",
    });
  }, []);

  return (
    <main style={{ padding: "120px 20px 40px" }}>
      <h2 className="heading title-experience">
        Web Development <span>Experience</span>
      </h2>

      <div
        id="vt6"
        style={{
          height: "auto",
          overflowY: "auto",
          margin: "0 20px",
        }}
      >
        {/* ========= SECTION 1 ========= */}
        <div className="timeline-event" data-vtdate="October 2022">
          <h3>Started Web Development</h3>
          <p>
            In October 2022, I began my journey in web development. I started
            learning the basics — <span>HTML</span>, <span>CSS</span>, and{" "}
            <span>JavaScript</span>.
          </p>
        </div>

        {/* ========= SECTION 2 ========= */}
        <div className="timeline-event" data-vtdate="April 2023">
          <h3>Bootstrap & Tailwind CSS</h3>
          <p>
            After learning the fundamentals, I explored CSS frameworks such as{" "}
            <span>Bootstrap</span> and <span>Tailwind CSS</span> to build
            responsive layouts.
          </p>
        </div>

        {/* ========= SECTION 3 ========= */}
        <div className="timeline-event" data-vtdate="April 2023 - Present">
          <h3>Projects</h3>
          <p>
            I practiced web development by working on mini-projects and improving
            my personal portfolio. My projects include:
            <br />
            • Live Weather Forecasting  
            • Plagiarism Remover  
            • Text Editor  
            • E-commerce Websites  
            • Weather Chatbot  
            and many more.
          </p>
        </div>

        {/* ========= SECTION 4 ========= */}
        <div className="timeline-event" data-vtdate="September 2023">
          <h3>ASP .NET Core (Razor Pages)</h3>
          <p>
            While working on my semester projects, I explored{" "}
            <span>.NET Framework</span> and built full-stack projects using
            ASP.NET Core Razor Pages:
            <br />
            • Restaurant Management System  
            • Online Café Management System
          </p>
        </div>

        {/* ========= SECTION 5 ========= */}
        <div className="timeline-event" data-vtdate="July 2024">
          <h3>Flask Development</h3>
          <p>
            After .NET, I explored <span>Flask</span> and built projects such as
            a text editor and a real-time chat app — both integrated with{" "}
            <span>Firebase</span>.
          </p>
        </div>

        {/* ========= SECTION 6 ========= */}
        <div className="timeline-event" data-vtdate="October 2025 - Present">
          <h3>Backend Developer @ Ilmversity by Da1Ilmverse</h3>
          <p>
            Currently, I am developing the <span>Node.js backend</span> for the <span>Ilmverse VR Portal</span>.
            My responsibilities include structuring the API, managing database operations, and handling the core backend services for the Da1Ilmverse VR ecosystem.
          </p>
        </div>

        {/* ========= SOCIETIES ========= */}
        <h3
          className="mlsa-timeline"
          style={{ marginTop: "40px", marginBottom: "65px" }}
        >
          Services to <span>Societies</span>
        </h3>

        <div className="timeline-event" data-vtdate="August 2024">
          <h3>Website for MLSA YE</h3>
          <p>
            After gaining experience with Flask, I began developing a full
            community website for <span>MLSA YE</span>.  
            This project will be deployed soon.
          </p>
        </div>

        {/* ========= INTERNSHIPS ========= */}
        <h3
          className="mlsa-timeline"
          style={{ marginTop: "40px", marginBottom: "65px" }}
        >
          <span>Internships</span>
        </h3>

        <div className="timeline-event" data-vtdate="August 2023">
          <h3>Web Development Internship @ Codsoft</h3>
          <p>
            I completed a 1-month internship at Codsoft, where I worked on tasks
            such as portfolio websites and e-commerce web development.
          </p>
        </div>
      </div>
    </main>
  );
}
