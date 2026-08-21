import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <h3>{profile.name}</h3>
          <p>{profile.title} — {profile.subtitle}</p>
          <p className="footer-note">
            Building VR, AR and multiplayer experiences from {profile.location}.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="/#about">About</a>
          <a href="/#work">Flagship Work</a>
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <Link to="/resume">Resume</Link>
        </div>

        <div className="footer-links">
          <h4>Get in touch</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer">
            {profile.phone}
          </a>
          <a href={profile.cv} download>Download CV</a>
        </div>
      </div>

      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

        <div className="footer-socials">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="bx bxl-github"></i></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
          <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="bx bxl-youtube"></i></a>
          <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
          <a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bx bxl-facebook"></i></a>
          <a href={profile.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="bx bxl-whatsapp"></i></a>
        </div>

        <div className="footer-iconTop">
          <a href="#home" aria-label="Back to top"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
      </div>
    </footer>
  );
}
