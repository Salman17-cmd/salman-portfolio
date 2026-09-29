import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { profile } from "../data/portfolio";

const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { mode, toggleMode } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      if (!onHome) return;
      let current = "";
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="wrap header-row">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">SS</span>
          <span className="brand-name">
            {profile.name}
            <small>Unity developer</small>
          </span>
        </Link>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className={onHome && active === link.id ? "is-active" : ""}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/resume"
            className={pathname === "/resume" ? "is-active" : ""}
            onClick={close}
          >
            Resume
          </Link>
        </nav>

        <div className="header-actions">
          <a href={profile.cv} className="btn btn-sm header-cv" download>
            <i className="bx bx-download"></i> CV
          </a>
          <button
            type="button"
            onClick={toggleMode}
            className="icon-btn"
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={`bx ${mode === "dark" ? "bx-sun" : "bx-moon"}`}></i>
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i className={`bx ${menuOpen ? "bx-x" : "bx-menu-alt-right"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
