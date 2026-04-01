import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const stored = localStorage.getItem("theme-mode");
        return stored ? stored : "dark";
    });

    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("color-theme");
        return stored ? stored : "purple";
    });

    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark-mode");
        } else {
            document.documentElement.classList.remove("dark-mode");
        }
        localStorage.setItem("theme-mode", mode);
    }, [mode]);

    useEffect(() => {
        // Cleanup previous theme classes
        const classes = Array.from(document.documentElement.classList);
        const themeClasses = classes.filter(c => c.startsWith("theme-"));
        if (themeClasses.length > 0) {
            document.documentElement.classList.remove(...themeClasses);
        }

        // Apply new theme class if not default (purple is default in CSS variables)
        if (theme !== "purple") {
            document.documentElement.classList.add(`theme-${theme}`);
        }

        localStorage.setItem("color-theme", theme);
    }, [theme]);

    const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ mode, toggleMode, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
