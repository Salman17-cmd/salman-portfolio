import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { profile } from "../data/portfolio";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [progress, setProgress] = useState(0);
  const { mode, toggleMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <span className="scroll-progress" style={{ width: `${progress}%` }} />

      <div className="container nav">
        <Link to="/" className="brand">
          <img src="/images/salman.png" alt="" />
          <div>
            <div>{profile.name}</div>
            <small>{profile.title} · VR / AR</small>
          </div>
        </Link>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <Link
            to="/resume"
            className="nav-resume"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
        </nav>

        <div className="actions">
          <a href={profile.cv} className="btn ghost header-cv" download>
            <i className="bi bi-download"></i> CV
          </a>

          <button
            onClick={toggleMode}
            className="mode-btn"
            id="darkMode-icon"
            aria-label="Toggle dark mode"
          >
            <i className={`bx ${mode === "light" ? "bx-moon" : "bx-sun"}`}></i>
          </button>

          <button
            id="menu-icon"
            className="menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
