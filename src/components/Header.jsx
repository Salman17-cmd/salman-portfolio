import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { mode, toggleMode, theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      <div className="container nav">

        <Link to="/" className="brand">
          <img src="/images/salman.png" alt="" />
          <div>
            <div>Salman Sadiq</div>
            <small>Game & AR/VR Developer</small>
          </div>
        </Link>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="/#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="/#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="actions">
          <button onClick={toggleMode} className="mode-btn" id="darkMode-icon">
            <i className={`bx ${mode === "light" ? "bx-moon" : "bx-sun"}`}></i>
          </button>


          <button id="menu-icon" className="menu" onClick={toggleMenu}>
            <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
          </button>
        </div>

      </div>
    </header>
  );
}
