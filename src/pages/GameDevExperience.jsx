// src/pages/GameDevExperience.jsx
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../css/vertical-timeline.css";

export default function GameDevExperience() {
  useEffect(() => {
    ScrollReveal().reveal(".timeline-event", {
      distance: "60px",
      duration: 1000,
      origin: "bottom",
      interval: 120,
    });

    ScrollReveal().reveal(".heading", {
      distance: "60px",
      duration: 1000,
      origin: "top",
    });
  }, []);

  return (
    <main style={{ padding: "120px 0 40px" }}>
      <h2 className="heading title-experience">
        Game Development <span>Experience</span>
      </h2>

      <div
        id="vt6"
        style={{
          height: "auto",
          overflowY: "auto",
          margin: "0 40px",
        }}
      >
        <h3
          className="mlsa-timeline"
          style={{ marginTop: "40px", marginBottom: "65px" }}
        >
          <span>Professional</span> Roles
        </h3>

        <div className="timeline-event" data-vtdate="October 2025 - Present">
          <h3>Associate Software Engineer @ DA1Ilmverse by Ilmversity</h3>
          <p>
            Working on high-level enterprise VR projects targeting the Oculus Quest 3. My responsibilities emphasize
            technical 3D art and advanced optimization techniques, including <span>LODs, Batching</span>, and resolving VR flickering.
            I also develop custom <span>shaders</span> and implement real-time <span>character lip-syncing</span> using JSON data, Azure, and blendshapes.
          </p>
        </div>

        <div className="timeline-event" data-vtdate="April 2024 - September 2025">
          <h3>Games & VR Developer @ UET Game Studio</h3>
          <p>
            Started as an intern and was promoted to a full-time role. I was deeply involved in building immersive, performant, and polished interactive experiences.
            I gained hands-on experience and delivered products using <span>XR Toolkit, MRTK, Photon PUN, Vuforia, Opsive Character Controller, and RCC</span>.
            I led the development of various client projects, porting WebGL games, and mentoring VR interns.
          </p>
        </div>

        <h3
          className="mlsa-timeline"
          style={{ marginTop: "40px", marginBottom: "65px" }}
        >
          <span>Key</span> Projects & Journey
        </h3>

        {/* University Section */}
        <div className="timeline-event" data-vtdate="2023 - Graduation">
          <h3>University of Okara — Final Projects</h3>
          <p>
            Started my game development journey in my last semester of MSc with a dedicated course.
            Developed a <span>Car Racing Game</span> using the <span>RCC package</span> as a foundation for physics-based vehicle mechanics.
          </p>
        </div>

        {/* Internship Section */}
        <div className="timeline-event" data-vtdate="3 Months Internship">
          <h3>Game Developer Intern @ UET Game Studio</h3>
          <p>
            Gained my first professional industry exposure. Worked on:
            <ul>
              <li><span>Police Cop Simulator</span>: Created cinematic scenes for this Frag Game Studio title.</li>
              <li><span>VR Bio Lab</span>: My first VR client project, using Unity to build interactive educational lab simulations.</li>
              <li><span>Horror Survival</span>: Developed immersive cinematic sequences for this VR title available on the Play Store.</li>
            </ul>
          </p>
        </div>

        {/* Promotion - Full-time */}
        <div className="timeline-event" data-vtdate="2024 - 2025">
          <h3>Game Developer @ UET Game Studio</h3>
          <p>
            Promoted after a successful internship to handle client projects and core lab games for the portal:
            <ul>
              <li><span>Wasteland of Living Dead</span>: Lead developer on this Android zombie shooter. Implemented pathfinding, core mechanics, and <span>multiplayer support using Photon</span> with the <span>Opsive Character Controller</span>.</li>
              <li><span>WebGL Portal Games</span>: Developed <span>Letter Cascade</span> and <span>Global The Quiz</span> for the studio's game portal.</li>
              <li><span>VR/AR Portfolio</span>: Created the <span>Christmas VR Simulation</span> (Quest 2), <span>Car VR Simulation</span> (Quest 2), and <span>AR Place</span> (Furniture placement).</li>
              <li><span>Mentorship</span>: Assisted and guided interns on VR development workflows.</li>
              <li><span>Client Games</span>: <span>Yanch e Shilock</span> (PC), <span>Color Hunt</span>, and <span>Fly Simulation</span>.</li>
              <li><span>AR Fighting Game</span>: Developed a Tekken 3 style AR fighting experience.</li>
            </ul>
          </p>
        </div>

        {/* Current Role */}
        <div className="timeline-event" data-vtdate="October 2025 - Present">
          <h3>Associate Software Engineer @ DA1Ilverse by Ilmversity</h3>
          <p>
            Working on high-level enterprise VR projects:
            <ul>
              <li><span>Expo Hall (Quest 3)</span>: Focused on high-end optimization using <span>LODs, Batching</span>, and flicker reduction techniques.</li>
              <li><span>Technical Art</span>: Custom <span>Shader work</span> and <span>Character Lip-sync</span> integration using JSON files, Azure, and blendshapes.</li>
            </ul>
          </p>
        </div>

        {/* Web Dev Shift */}
        <div className="timeline-event" data-vtdate="Current Focus">
          <h3>Full-Stack Web Development & AI</h3>
          <p>
            Currently shifting my stack to modern web technologies. Mastering <span>Node.js, Express.js, and Database management</span>.
            <ul>
              <li><span>Personal Portfolio</span>: Built this entire portfolio using <span>React</span> for the frontend and <span>Node.js</span> backend.</li>
              <li><span>Live Weather Forecaster</span>: Developed a functional web application integrating OpenWeather API and Streamlit UI.</li>
              <li><span>Face Recognition</span>: Created an AI-driven project using OpenCV for real-time face detection.</li>
            </ul>
          </p>
        </div>

      </div>
    </main>
  );
}
