"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";

export const GallerySection = () => {
  const [isInView, setIsInView] = useState(false);

  // Detect if user is in Gallery Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    const section = document.getElementById("gallery");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const moments = [
    { id: "moment-1", title: "Artisan Churn", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop", className: "top-[5%] left-[2%] md:top-[10%] md:left-[5%] md:rotate-[-4deg]" },
    { id: "moment-2", title: "Velvet Texture", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=800&auto=format&fit=crop", className: "top-[40%] left-[8%] md:top-[45%] md:left-[15%] md:rotate-[6deg]" },
    { id: "moment-3", title: "Pure Indulgence", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop", className: "top-[10%] left-[45%] md:top-[5%] md:left-[35%] md:rotate-[-8deg]" },
    { id: "moment-4", title: "Golden Hour", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop", className: "top-[50%] right-[5%] md:top-[40%] md:right-[10%] md:rotate-[10deg]" },
    { id: "moment-5", title: "Midnight Craving", image: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=800&auto=format&fit=crop", className: "top-[20%] right-[2%] md:top-[15%] md:right-[5%] md:rotate-[-2deg]" },
  ];

  const handleJump = (id) => {
    const target = document.getElementById(id);
    if (window.lenis && target) window.lenis.scrollTo(target);
    else target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="gallery" className="relative bg-white dark:bg-black py-16 md:py-24 overflow-hidden border-t border-neutral-100 dark:border-white/5 select-none">
      
      {/* --- RIGHT SIDE FLOATING CONTROLS (Mobile Only) --- */}
      <AnimatePresence>
        {isInView && (
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="md:hidden fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center bg-black/10 dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-1.5 rounded-2xl shadow-2xl"
          >
            {/* Scroll Up to Flavors */}
            <button 
              onClick={() => handleJump("flavors")} 
              className="p-4 text-pink-500 active:scale-75 transition-all"
            >
              <IconChevronUp size={28} stroke={3} />
            </button>
            
            {/* Elegant Divider */}
            <div className="w-8 h-[1px] bg-black/10 dark:bg-white/20" />

            {/* Scroll Down to Story */}
            <button 
              onClick={() => handleJump("story")} 
              className="p-4 text-pink-500 active:scale-75 transition-all"
            >
              <IconChevronDown size={28} stroke={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="text-center mb-8 md:mb-12 relative z-30 pointer-events-none px-4">
        <h2 className="text-3xl md:text-6xl font-serif uppercase tracking-[0.2em] text-black dark:text-white transition-colors duration-500">
          The <span className="text-pink-500 italic">Gallery</span>
        </h2>
        <p className="text-neutral-400 text-[8px] md:text-[10px] uppercase tracking-[0.3em] mt-3">
          Capturing the essence of sweetness • Drag to explore
        </p>
      </div>

      <DraggableCardContainer className="h-[550px] md:h-[750px] w-full max-w-7xl mx-auto relative border border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl touch-pan-y transition-colors duration-500">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <h2 className="text-[25vw] md:text-[20vw] font-serif font-bold uppercase transition-colors duration-500">MOMENTS</h2>
        </div>

        {moments.map((item) => (
          <DraggableCardBody key={item.id} layoutId={item.id} className={item.className}>
            <div className="w-40 md:w-64 p-1 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl pointer-events-none border border-black/5 dark:border-white/5 transition-colors duration-500">
              <div className="overflow-hidden rounded-lg">
                <img src={item.image} alt={item.title} className="h-48 md:h-72 w-full object-cover" />
              </div>
              <div className="py-2 md:py-3 px-1 text-center font-serif text-[9px] md:text-[11px] uppercase tracking-[2px] text-neutral-800 dark:text-neutral-200">
                {item.title}
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
};