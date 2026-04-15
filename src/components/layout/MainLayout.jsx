import React, { useEffect, useState } from "react";
import { Navbar } from "../shared/Navbar";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export const MainLayout = ({ children }) => {
  useSmoothScroll(); // Global Lenis Initialization
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="relative min-h-screen selection:bg-primary/30">
      {/* Navbar gets the toggle function to show it in the Dock */}
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="w-full pt-20 px-4 md:px-0">
        {children}
      </main>
      {/* Footer can be added here later */}
    </div>
  );
};