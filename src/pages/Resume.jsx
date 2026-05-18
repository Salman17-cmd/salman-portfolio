// src/pages/Resume.jsx
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Resume() {
  useEffect(() => {
    ScrollReveal().reveal(".resume-section", {
      distance: "60px",
      duration: 1000,
      origin: "bottom",
      interval: 150,
      cleanup: true,
    });

    ScrollReveal().reveal(".heading", {
      distance: "40px",
      duration: 1000,
      origin: "top",
    });
  }, []);

  return (
    <main style={{ padding: "120px 20px 40px" }}>
      <div className="container">
        <h2 className="heading text-center" style={{ marginBottom: "50px" }}>
          My Professional <span>Resume</span>
        </h2>

        <div className="cta text-center" style={{ marginBottom: "40px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a
            href="/Files/Salman_Sadiq_Game_Dev.pdf"
            className="btn"
            download
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <i className="bi bi-download"></i> Download PDF Resume
          </a>
          <a
            href="mailto:sadqq.salman@gmail.com"
            className="btn ghost"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <i className="bi bi-envelope"></i> Contact Me
          </a>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "20px"
        }}>
          {/* Left Column - Experience */}
          <div className="resume-section card">
            <h3 style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--main-color)", fontSize: "1.8rem", marginBottom: "20px" }}>
              <i className="bx bx-briefcase"></i> Work Experience
            </h3>

            <div style={{ borderLeft: "2px solid var(--main-color)", paddingLeft: "20px", marginLeft: "10px" }}>
              <div style={{ position: "relative", marginBottom: "30px" }}>
                <span style={{
                  position: "absolute",
                  left: "-26px",
                  top: "6px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--main-color)",
                  border: "2px solid var(--bg-color)"
                }}></span>
                <span className="tag" style={{ fontSize: "0.8rem", padding: "4px 8px" }}>Oct 2025 - Present</span>
                <h4 style={{ fontSize: "1.3rem", marginTop: "10px" }}>Associate Software Engineer</h4>
                <strong style={{ color: "var(--text-color)", opacity: 0.85 }}>DA1Ilmverse by Ilmversity</strong>
                <p style={{ marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Developing enterprise VR projects for Oculus Quest 3 and backend systems.
                </p>
                <ul style={{ paddingLeft: "20px", marginTop: "10px", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Developed high-performance <strong>Unity Render Streaming (WebRTC)</strong> bidirectional screen-sharing pipelines for VR-to-web communication.</li>
                  <li>Engineered custom <strong>Character Lip-Sync</strong> driven by JSON and Azure speech services.</li>
                  <li>Optimized complex environments using <strong>LODs, Batching, and VR flickering reduction</strong>.</li>
                  <li>Built reliable Node.js API services for the VR portal platform.</li>
                </ul>
              </div>

              <div style={{ position: "relative", marginBottom: "20px" }}>
                <span style={{
                  position: "absolute",
                  left: "-26px",
                  top: "6px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--main-color)",
                  border: "2px solid var(--bg-color)"
                }}></span>
                <span className="tag" style={{ fontSize: "0.8rem", padding: "4px 8px" }}>Apr 2024 - Sept 2025</span>
                <h4 style={{ fontSize: "1.3rem", marginTop: "10px" }}>Games & VR Developer</h4>
                <strong style={{ color: "var(--text-color)", opacity: 0.85 }}>UET Game Studio</strong>
                <p style={{ marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Collaborated on multiplayer games, AR apps, and educational virtual simulations.
                </p>
                <ul style={{ paddingLeft: "20px", marginTop: "10px", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Built multiplayer systems using <strong>Photon PUN</strong> and Opsive Character Controller.</li>
                  <li>Developed immersive applications leveraging <strong>XR Toolkit, MRTK, Vuforia, and RCC</strong>.</li>
                  <li>Led cross-platform deployment, porting WebGL, Android, and PC builds.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Education */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* Education Card */}
            <div className="resume-section card">
              <h3 style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--main-color)", fontSize: "1.8rem", marginBottom: "20px" }}>
                <i className="bx bx-book-reader"></i> Education
              </h3>

              <div style={{ borderLeft: "2px solid var(--main-color)", paddingLeft: "20px", marginLeft: "10px" }}>
                <div style={{ position: "relative", marginBottom: "10px" }}>
                  <span style={{
                    position: "absolute",
                    left: "-26px",
                    top: "6px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "var(--main-color)",
                    border: "2px solid var(--bg-color)"
                  }}></span>
                  <span className="tag" style={{ fontSize: "0.8rem", padding: "4px 8px" }}>2021 - 2023</span>
                  <h4 style={{ fontSize: "1.3rem", marginTop: "10px" }}>MSc in Computer Science</h4>
                  <strong style={{ color: "var(--text-color)", opacity: 0.85 }}>University of Okara</strong>
                  <p style={{ marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    Completed coursework with a focus on advanced computing, software engineering, and a graduation project in vehicle physics simulation.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Skills Card */}
            <div className="resume-section card">
              <h3 style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--main-color)", fontSize: "1.8rem", marginBottom: "20px" }}>
                <i className="bx bx-code-block"></i> Core Competencies
              </h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <span className="tag">Unity 3D/2D</span>
                <span className="tag">C#</span>
                <span className="tag">WebRTC</span>
                <span className="tag">Photon Multiplayer</span>
                <span className="tag">XR Toolkit & MRTK</span>
                <span className="tag">Node.js & Express.js</span>
                <span className="tag">Custom Shader Work</span>
                <span className="tag">LODs & VR Optimization</span>
                <span className="tag">AR Foundation & Vuforia</span>
                <span className="tag">React & JavaScript</span>
                <span className="tag">Databases (MySQL/NoSQL)</span>
                <span className="tag">C++ & DSA</span>
                <span className="tag">Git & CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
