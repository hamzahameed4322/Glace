import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FloatingDock } from "../ui/floating-dock";
import { 
  IconHome, IconIceCream, IconBook2, IconMapPin, 
  IconSun, IconMoon, IconMenu2, IconX 
} from "@tabler/icons-react";

export const Navbar = () => {
  // Initialize from localStorage to prevent flash
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navItems = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "/" },
    { title: "Flavors", icon: <IconIceCream className="h-full w-full" />, href: "#flavors" },
    { title: "Story", icon: <IconBook2 className="h-full w-full" />, href: "#story" },
    { title: "Locate", icon: <IconMapPin className="h-full w-full" />, href: "#locate" },
    { 
      title: isDark ? "Light Mode" : "Dark Mode", 
      icon: isDark ? <IconSun className="text-yellow-400 h-full w-full" /> : <IconMoon className="text-primary h-full w-full" />, 
      onClick: () => setIsDark(!isDark) 
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      <div className="flex justify-between items-center px-6 py-6 md:px-12 relative z-[150]">
        <h1 className="text-2xl font-serif tracking-[0.2em] uppercase text-foreground">
          Glacé.
        </h1>

        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4">
          <FloatingDock items={navItems} />
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-3 text-foreground bg-background/50 backdrop-blur-md rounded-full border border-border transition-transform active:scale-90"
        >
          {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center z-[110] px-8"
          >
            <div className="flex flex-col gap-4 w-full max-w-[300px]">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.title}
                  // FIX: Removed 'layout' prop to stop the glitch
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick(); // Theme toggle call
                    } else {
                      setIsMobileMenuOpen(false);
                      if (item.href === "/" && location.pathname === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else if (item.href.startsWith("#")) {
                        setTimeout(() => {
                          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      } else {
                        navigate(item.href);
                      }
                    }
                  }}
                  className="flex items-center w-full group py-4 border-b border-foreground/5 last:border-none"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-foreground/5 group-hover:bg-primary/10 transition-colors">
                    <div className="w-6 h-6">{item.icon}</div>
                  </div>
                  <span className="ml-6 text-3xl font-serif text-foreground group-hover:text-primary transition-colors tracking-wide">
                    {item.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};