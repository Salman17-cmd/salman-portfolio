import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function readStoredMode() {
  try {
    return localStorage.getItem("theme-mode") || "dark";
  } catch {
    return "dark";
  }
}

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(readStoredMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", mode === "dark");
    try {
      localStorage.setItem("theme-mode", mode);
    } catch {
      /* private window: the choice just won't persist */
    }
  }, [mode]);

  const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
