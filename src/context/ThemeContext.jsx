import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const stored = localStorage.getItem("theme-mode");
        return stored ? stored : "dark";
    });

    const [theme, setTheme] = useState(() => {
        // New storage key, so visitors who had the old purple default get the new one.
        const stored = localStorage.getItem("color-theme-v2");
        return stored ? stored : "ocean";
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

        // Apply new theme class if not default (ocean blue is default in CSS variables)
        if (theme !== "ocean") {
            document.documentElement.classList.add(`theme-${theme}`);
        }

        localStorage.setItem("color-theme-v2", theme);
    }, [theme]);

    const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ mode, toggleMode, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
