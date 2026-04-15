import React from "react";
import { motion } from "framer-motion";
import { Highlighter } from "../ui/highlighter"; 
import { BackgroundLines } from "../ui/background-lines";

export const DeveloperSection = () => {
  return (
    <section className="relative w-full bg-neutral-50 dark:bg-[#050505] border-t border-neutral-100 dark:border-white/5 overflow-hidden">
      
      {/* BACKGROUND LAYER: Original Colors are inside here now */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <BackgroundLines />
      </div>

      {/* CONTENT LAYER: No Color Changes to Your Text */}
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-pink-500 font-bold mb-6 block">
            The Concept
          </span>
          <h2 className="text-2xl md:text-5xl font-serif italic text-neutral-800 dark:text-neutral-200 leading-[1.4] md:leading-[1.6]">
            "Digital craft is about <Highlighter action="underline" color="#ec4899" padding={5}>translating</Highlighter> 
            the soul of a brand into pixels. I built Glacé to be more than a site—it's a 
            <Highlighter action="circle" color="#ec4899" padding={12}>sensory</Highlighter> journey."
          </h2>
        </motion.div>

        {/* Card remains the same */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 p-8 border border-black/5 dark:border-white/10 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl rounded-[2rem] max-w-2xl mx-auto shadow-xl"
        >
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light tracking-wide">
            <strong className="text-black dark:text-white font-medium italic">Project Disclosure:</strong> This experience was meticulously engineered as a personal showcase of <span className="text-pink-500 font-medium">Premium UI/UX Design</span>.
          </p>
        </motion.div>

        {/* Developer Credit Area - PRESERVED YOUR COLORS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="h-12 w-px bg-gradient-to-b from-pink-500 to-transparent mb-8" />
          
          <p className="text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-[0.4em] mb-3 font-medium">
            Architected & Designed by
          </p>
          
          <h3 className="text-2xl md:text-4xl font-serif uppercase tracking-[0.2em] text-black dark:text-white mb-6">
            Hamza Hameed
          </h3>
          
          <a 
            href="mailto:hamzahameed4323@gmail.com" 
            className="text-xs md:text-sm font-medium tracking-[0.1em] text-neutral-600 dark:text-neutral-400 hover:text-pink-500 transition-colors duration-300 border-b border-neutral-200 dark:border-neutral-800 hover:border-pink-500/50 pb-1"
          >
            hamzahameed4323@gmail.com
          </a>

          <div className="mt-12 opacity-40">
            <p className="text-[9px] text-neutral-400 uppercase tracking-[0.6em]">
              Lahore • Pakistan • MMXXV
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};