// src/pages/GraphicExperience.jsx
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../css/vertical-timeline.css";

export default function GraphicExperience() {
  useEffect(() => {
    // Timeline animation reveal
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
    <main style={{ padding: "40px 0" }}>
      <h2 className="heading title-experience">
        Design <span>Experience</span>
      </h2>

      <div
        id="vt6"
        style={{
          height: "auto",
          overflowY: "auto",
          margin: "0 40px",
        }}
      >
        {/* ===== SECTION 1 ===== */}
        <div className="timeline-event" data-vtdate="February 2022">
          <h3>Started Career with Graphics Designing</h3>
          <p>
            In February 2022, I started my career with graphic designing.
            I created my first poster using <span>Canva</span>.  
            I also edited pictures for <span>memes</span> to improve my 
            Canva skills and completed small services such as designing 
            invitation cards.
          </p>
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="timeline-event" data-vtdate="July 2022">
          <h3>Using Other Platforms</h3>
          <p>
            After exploring Canva, I was eager to try professional tools.
            I began using <span>Figma</span> for UI designs and learned the 
            basics of <span>Adobe Illustrator</span> and other image editing 
            apps like PicsArt.
          </p>
        </div>

        {/* ===== SECTION 3 ===== */}
        <div className="timeline-event" data-vtdate="December 2022">
          <h3>Watching Professionals</h3>
          <p>
            In December 2022, I joined <span>UET Lahore</span>, where my 
            exposure improved. I regularly observed professional poster designs 
            and learned from industry-level design work.
          </p>
        </div>

        {/* ===== SECTION 4 ===== */}
        <div className="timeline-event" data-vtdate="December 2023">
          <h3>A Professional Start</h3>
          <p>
            In December 2023, I became a member of the 
            <span> Microsoft Learn Student Ambassadors (MLSA)</span> 
            and <span> Google Developers Student Club (GDSC)</span>.  
            I joined their Design Teams and officially began my 
            professional graphic designing journey.
          </p>
        </div>

        {/* ===== SECTION 5 ===== */}
        <div className="timeline-event" data-vtdate="January 2024">
          <h3>Advance Designing</h3>
          <p>
            Inspired by professional designers, I dove deeper into 
            <span>Figma</span> and created multiple web and mobile UI 
            designs.  
          </p>
        </div>

        {/* CATEGORY TITLE - SERVICES */}
        <h3
          className="mlsa-timeline"
          style={{ marginTop: "40px", marginBottom: "65px" }}
        >
          Services to <span>Societies</span>
        </h3>

        {/* ===== SECTION 6 ===== */}
        <div className="timeline-event" data-vtdate="February 2024">
          <h3>Software Square @ITEC 2K24</h3>
          <p>
            I worked as a designer for 
            <span> Software Square</span> (UET Lahore) during their 
            ITEC 2K24 event. I designed standees, certificates, and 
            promotional posters.
          </p>
        </div>

        {/* ===== SECTION 7 ===== */}
        <div className="timeline-event" data-vtdate="June 2024">
          <h3>Smart City Summit Event by IEEE</h3>
          <p>
            I worked with IEEE for their Smart City Summit event, 
            designing certificates of appreciation and supporting the 
            event's design needs.
          </p>
        </div>

        {/* CATEGORY TITLE - LEADING */}
        <h3
          className="mlsa-timeline"
          style={{ marginTop: "40px", marginBottom: "65px" }}
        >
          <span>Leading</span> Teams
        </h3>

        {/* ===== SECTION 8 ===== */}
        <div className="timeline-event" data-vtdate="August 2024">
          <h3>Director @MLSA UET Lahore Graphics Team</h3>
          <p>
            As a designer at <span>MLSA UET Lahore</span>, I worked on 
            event posters, certificates, collaborations, and proposals 
            as part of the graphics team.
          </p>
        </div>

        {/* ===== SECTION 9 ===== */}
        <div className="timeline-event" data-vtdate="August 2024">
          <h3>Co-Lead @MLSA YE</h3>
          <p>
            I joined <span>MLSA YE</span> as a co-lead of the Design 
            Team — my first leadership position in the designing field.
          </p>
        </div>

        {/* CATEGORY TITLE - INTERNSHIPS */}
        <h3
          className="mlsa-timeline"
          style={{ marginTop: "40px", marginBottom: "65px" }}
        >
          <span>Internships</span>
        </h3>

        {/* ===== SECTION 10 ===== */}
        <div className="timeline-event" data-vtdate="August 2024 - Present">
          <h3>Game Designer Intern @KICKS</h3>
          <p>
            I started my first designing internship as a Game Designer at 
            <span> KICKS</span> (Research Labs) UET Lahore — learning game 
            character design, environment design, and level design.
          </p>
        </div>
      </div>
    </main>
  );
}
