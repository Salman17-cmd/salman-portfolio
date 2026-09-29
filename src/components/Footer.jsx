import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-row">
          <div>
            <p className="footer-name">{profile.name}</p>
            <p>Unity developer, {profile.location}.</p>
          </div>

          <div className="footer-cols">
            <div>
              <h4 className="mono">Site</h4>
              <a href="/#work">Work</a>
              <a href="/#projects">Projects</a>
              <a href="/#about">About</a>
              <Link to="/resume">Resume</Link>
              <Link to="/game-dev-experience">Career story</Link>
            </div>
            <div>
              <h4 className="mono">Elsewhere</h4>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href={profile.socials.itch} target="_blank" rel="noopener noreferrer">itch.io</a>
            </div>
            <div>
              <h4 className="mono">Contact</h4>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={profile.cv} download>Download CV</a>
            </div>
          </div>
        </div>

        <div className="footer-row mono">
          <span>© {new Date().getFullYear()} {profile.name}. Designed and built by me in React.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
