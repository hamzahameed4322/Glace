// src/components/shared/ThemeToggle.jsx
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="p-3 rounded-full bg-secondary/50 backdrop-blur-md border border-white/10 shadow-xl"
    >
      {isDark ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-slate-700 w-5 h-5" />
      )}
    </motion.button>
  );
};