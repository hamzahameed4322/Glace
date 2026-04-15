"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RetroGrid } from "../ui/retro-grid"; // Path apne folder ke hisab se check kar lena

export const StorySection = () => {
  const containerRef = useRef(null);
  
  // Scroll Animations Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-background"
    >
      {/* --- MAGIC UI: RETRO GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <RetroGrid />
      </div>

      {/* --- ANIMATED CONTENT --- */}
      <motion.div 
        style={{ opacity, scale, y }} 
        className="relative z-10 max-w-4xl text-center"
      >
        <span className="text-pink-500 font-bold uppercase tracking-[0.5em] text-xs mb-4 block">
          Since 1994
        </span>
        
        <h2 className="text-4xl md:text-8xl font-serif mt-4 mb-8 leading-tight text-black dark:text-white">
          Hand-crafted with <br /> 
          <span className="italic text-pink-500">Absolute Purity.</span>
        </h2>
        
        <p className="text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
          We don't just churn milk; we compose symphonies of flavor. 
          Every scoop of Glacé tells a story of local farms, organic spices, 
          and the pursuit of the perfect frozen moment.
        </p>

        {/* Optional: A small decorative line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          className="h-px bg-pink-500 mx-auto mt-12"
        />
      </motion.div>

      {/* Subtle Gradient Overlay to make it blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
    </section>
  );
};