import React from "react";
import { motion } from "framer-motion";
import { Globe } from "../ui/globe"; 

const branches = [
  {
    city: "Lahore",
    area: "DHA Phase 6",
    address: "Raya Commercial Center, Avenue 4",
    phone: "+92 42 3123 4567",
    tag: "Flagship"
  },
  {
    city: "Lahore",
    area: "Gulberg III",
    address: "Main Boulevard, Near Mall 1",
    phone: "+92 42 3765 4321",
    tag: "Boutique"
  },
  {
    city: "Islamabad",
    area: "F-7 Markaz",
    address: "Union Gold Mall, Ground Floor",
    phone: "+92 51 1122 3344",
    tag: "Boutique"
  },
  {
    city: "Karachi",
    area: "E-Street, Clifton",
    address: "Street 2, Block 4, Clifton",
    phone: "+92 21 9988 7766",
    tag: "Signature"
  }
];

export const LocateSection = () => {
  return (
    <section id="locate" className="relative min-h-screen bg-white dark:bg-[#030303] pt-24 transition-colors duration-700 overflow-hidden flex flex-col">
      
      {/* --- GLOBE BACKGROUND LOGIC --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-[1000px] flex items-center justify-center">
          
          {/* Central Glow for Depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/15 via-transparent to-transparent dark:from-pink-500/10 transition-opacity duration-700" />

          {/* Globe with Optimized Visibility Filters */}
          <div className="w-full h-full flex items-center justify-center 
              filter grayscale-[0.3] brightness-[0.85] contrast-[1.2] 
              dark:invert-[0.95] dark:hue-rotate-180 dark:brightness-[1.1] dark:contrast-[1.1] 
              transition-all duration-700 opacity-60 dark:opacity-40">
            <Globe />
          </div>

          {/* Smooth Fading Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#030303] dark:via-transparent dark:to-[#030303]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-serif uppercase tracking-[0.3em] text-black dark:text-white"
          >
            Locate <span className="text-pink-500 italic">Glacé</span>
          </motion.h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-[0.6em] mt-4 font-medium">
            Our Premium Boutiques Across Pakistan
          </p>
        </div>

        {/* 4 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-neutral-100 dark:border-white/5 bg-white/60 dark:bg-white/5 backdrop-blur-md hover:border-pink-500/40 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-bold uppercase tracking-widest text-pink-500 border border-pink-500/20 px-3 py-1 rounded-full">
                  {branch.tag}
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-tighter">{branch.city}</span>
              </div>

              <h3 className="text-xl font-serif uppercase tracking-wider text-black dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                {branch.area}
              </h3>
              
              <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed mb-6 h-12">
                {branch.address}
              </p>

              <div className="pt-6 border-t border-neutral-100 dark:border-white/5 flex flex-col gap-3">
                <a 
                  href={`tel:${branch.phone}`}
                  className="text-[11px] text-neutral-400 hover:text-black dark:hover:text-white transition-colors tracking-widest uppercase font-medium"
                >
                  {branch.phone}
                </a>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] uppercase font-bold tracking-[0.2em] text-pink-500 flex items-center gap-2 group/link"
                >
                  View on Map 
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MINIMALIST FOOTER --- */}
      <footer className="relative z-10 w-full pt-10 pb-8 border-t border-neutral-100 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-serif tracking-[0.3em] uppercase text-black dark:text-white mb-2">Glacé</h2>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest">
                © 2026 Glacé Artisanal Ice Cream. All Rights Reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-8">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-pink-500 transition-colors duration-300 font-bold"
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Crafting Credit */}
            <div className="text-center md:text-right">
              <p className="text-[9px] text-neutral-400 uppercase tracking-[0.4em]">
                Handcrafted with passion in <br /> 
                <span className="text-black dark:text-white font-bold">Pakistan</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};