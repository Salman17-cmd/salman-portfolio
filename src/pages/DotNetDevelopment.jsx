// src/pages/DotNetDevelopment.jsx
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../css/vertical-timeline.css"; // Make sure this exists in src folder

export default function DotNetDevelopment() {
  useEffect(() => {
    // Scroll animations
    ScrollReveal().reveal(".timeline-event", {
      distance: "60px",
      duration: 1000,
      origin: "bottom",
      interval: 150,
    });
  }, []);

  return (
    <main style={{ padding: "40px 0" }}>
      <h2 className="heading title-experience">
        .NET Development <span>Experience</span>
      </h2>

      <div
        id="vt6"
        style={{
          height: "auto",
          overflowY: "auto",
          margin: "0 40px",
        }}
      >
        {/* Timeline Event 1 */}
        <div className="timeline-event" data-vtdate="April 2023">
          <h3>Windows Forms</h3>
          <p>
            In April 2023, I started .NET Windows Forms in my 2nd semester.
            I completed weekly assignments and later built mid and final
            semester projects using Windows Forms.
          </p>
        </div>

        {/* Timeline Event 2 */}
        <div className="timeline-event" data-vtdate="September 2023">
          <h3>ASP .NET Core (Razor Pages)</h3>
          <p>
            After spending time on Windows Forms, I moved to ASP .NET Core (Razor Pages).
            I learned the framework and developed multiple semester projects using it.
          </p>
        </div>

        {/* Timeline Event 3 */}
        <div className="timeline-event" data-vtdate="December 2022">
          <h3>Integration with Database</h3>
          <p>
            After working with full stack .NET websites and applications,
            I learned SQL databases and fully integrated them with both
            desktop and web applications.
          </p>
        </div>
      </div>
    </main>
  );
}
