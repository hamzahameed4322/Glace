import React from "react";
import { Vortex } from "../ui/vortex";
import { motion } from "framer-motion";
import { Highlighter } from "../ui/highlighter";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-white dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={200} 
        baseHue={320} 
        className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-full h-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-center w-full max-w-full"
        >
          {/* Main Title with Rough Notation */}
          <h1 className="text-black dark:text-white text-5xl sm:text-7xl md:text-9xl font-serif text-center uppercase tracking-[0.2em] sm:tracking-[0.4em] leading-tight px-2">
            <Highlighter 
              action="underline" 
              color="#ec4899" 
              strokeWidth={3}
              animationDuration={1000}
              padding={10}
            >
              Glacé
            </Highlighter>
          </h1>

          {/* Simple Divider Line */}
          <div className="h-px w-16 sm:w-24 bg-black/20 dark:bg-white/20 my-8 sm:my-10" />
          
          {/* Tagline */}
          <p className="text-black/60 dark:text-white/60 text-[10px] sm:text-[12px] md:text-sm text-center font-light tracking-[0.4em] sm:tracking-[0.8em] uppercase leading-relaxed px-4">
            The Purest Form of Indulgence
          </p>
        </motion.div>
      </Vortex>
    </div>
  );
};