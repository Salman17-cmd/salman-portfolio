import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/floating-settings.css";

export default function ThemeSettings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: "purple", color: "#754ef9" },
    { name: "blue", color: "#2563eb" },
    { name: "emerald", color: "#059669" },
    { name: "amber", color: "#d97706" },
    { name: "rose", color: "#e11d48" },
  ];

  return (
    <div className={`theme-settings ${isOpen ? "open" : ""}`}>
      <button className="settings-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`bx ${isOpen ? "bx-x" : "bx-palette"}`}></i>
      </button>

      <div className="themes-wrapper">
        <h4>Select Accent</h4>
        <div className="themes-grid">
          {themes.map((t) => (
            <button
              key={t.name}
              className={`theme-dot ${theme === t.name ? "active" : ""}`}
              style={{ background: t.color }}
              onClick={() => setTheme(t.name)}
              title={`${t.name.charAt(0).toUpperCase() + t.name.slice(1)} Theme`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
