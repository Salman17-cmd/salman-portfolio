// src/pages/Inspirations.jsx
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Inspirations() {
  // =============================
  // ScrollReveal Animations
  // =============================
  useEffect(() => {
    ScrollReveal().reveal(".heading", {
      distance: "60px",
      duration: 1000,
      origin: "top",
    });

    ScrollReveal().reveal(".services-box", {
      distance: "60px",
      duration: 1200,
      origin: "bottom",
      interval: 100,
    });
  }, []);

  return (
    <main>
      <section id="Inspirations" style={{ paddingTop: "80px" }}>
        <section className="services" id="services">
          <h2 className="heading">
            My <span>Inspirations</span>
          </h2>

          <div className="services-container">
            {/* BOX 1 */}
            <div className="services-box">
              <img
                src="/images/Purple Masjid Logo.png"
                width="132"
                style={{ marginBottom: "-23px", marginTop: "-27px" }}
              />
              <h3>Islam</h3>
              <p>
                Being a Muslim, Islam is my biggest inspiration — especially{" "}
                <b>Prophet Muhammad's (PBUH)</b> teachings. His commitment to
                justice and compassion guides my actions every day.
              </p>
              <a
                href="https://www.w3schools.com/whatis/"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>

            {/* BOX 2 */}
            <div className="services-box">
              <img
                src="/images/Abdul Sattar Edhi.jpeg"
                width="138"
                height="130"
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
              <h3>Abdul Sattar Edhi</h3>
              <p>
                Abdul Sattar Edhi's humanitarian legacy deeply influences me,
                inspiring a life of empathy, service, and altruism.
              </p>
              <a
                href="https://www.holabrief.com/creative-brief/graphic-design-template"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>

            {/* BOX 3 */}
            <div className="services-box">
              <i className="bx bx-bar-chart-alt"></i>
              <h3>Sidhu Moose Wala</h3>
              <p>
                Sidhu Moose Wala — though Sikh — inspires me through his
                fearless fusion of Punjabi music and modern themes. His strength
                and unwavering faith push me to use my voice for positive
                change.
              </p>
              <a
                href="https://developer.android.com/docs"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
