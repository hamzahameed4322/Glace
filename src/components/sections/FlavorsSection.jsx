import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";

// Helper Component for Text Highlight (Taake code saaf rahe)
const HighlightText = ({ children, delay = 0.8 }) => (
  <span className="relative inline-block px-1 font-medium text-black dark:text-white">
    <motion.span 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="absolute inset-0 bg-pink-500/20 dark:bg-pink-500/40 origin-left -z-10 rounded-sm"
    />
    {children}
  </span>
);

const flavors = [
  {
    title: "Velvet Vanilla",
    description: (
      <>
        Sourced from <HighlightText delay={1}>Madagascar</HighlightText>, our vanilla bean is slow-churned for a silky texture.
      </>
    ),
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img 
          src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=800&auto=format&fit=crop" 
          alt="Vanilla" 
          className="object-cover w-full h-full group-hover/bento:scale-110 transition-transform duration-500"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Midnight Cocoa",
    description: (
      <>
        An intense <HighlightText delay={1.2}>75% Belgian</HighlightText> dark chocolate experience for the bold.
      </>
    ),
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img 
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop" 
          alt="Chocolate" 
          className="object-cover w-full h-full group-hover/bento:scale-110 transition-transform duration-500"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Rose Berry Bliss",
    description: (
      <>
        Blend of fresh <HighlightText delay={1.4}>Himalayan berries</HighlightText> infused with organic rose water.
      </>
    ),
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img 
          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop" 
          alt="Berry" 
          className="object-cover w-full h-full group-hover/bento:scale-110 transition-transform duration-500"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Pistachio Royale",
    description: (
      <>
        Hand-picked <HighlightText delay={1.6}>Persian pistachios</HighlightText> roasted and lightly salted.
      </>
    ),
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img 
          src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop" 
          alt="Pistachio" 
          className="object-cover w-full h-full group-hover/bento:scale-110 transition-transform duration-500"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
];

export function FlavorsSection() {
  return (
    <section id="flavors" className="py-24 px-4 bg-white dark:bg-black transition-colors duration-500 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="relative text-4xl md:text-6xl font-serif uppercase tracking-[0.3em] text-black dark:text-white mb-4 inline-block">
            The Catalog
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-[4px] bg-pink-500 rounded-full"
            />
          </h2>
          <p className="mt-8 text-neutral-500 dark:text-neutral-400 font-light tracking-widest text-[10px] md:text-xs uppercase max-w-md leading-relaxed">
            Handcrafted <HighlightText>flavors</HighlightText> for the sophisticated palate.
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {flavors.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={`${item.className} border-neutral-200 dark:border-white/10 hover:border-pink-500/50 transition-all duration-300`}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
}