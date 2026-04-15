"use client";
import { cn } from "../../lib/util";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "framer-motion";

export const DraggableCardContainer = ({ className, children }) => {
  const containerRef = useRef(null); // Boundary Reference

  return (
    <div ref={containerRef} className={cn("[perspective:2000px] relative w-full overflow-hidden", className)}>
      {/* Passing the ref to children */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { containerRef });
        }
        return child;
      })}
    </div>
  );
};

export const DraggableCardBody = ({ className, children, containerRef }) => {
  const cardRef = useRef(null);
  const controls = useAnimationControls();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={containerRef} // Ab ye container se bahar nahi jayenge
      dragElastic={0.05} // Bohat kam elastic taake boundary sakht rahe
      onDragEnd={() => {
        animate(mouseX, 0, springConfig);
        animate(mouseY, 0, springConfig);
      }}
      style={{ rotateX, rotateY, willChange: "transform" }}
      whileDrag={{ zIndex: 50, scale: 1.05 }}
      className={cn(
        "absolute rounded-2xl bg-white dark:bg-neutral-900 p-2 shadow-2xl cursor-grab active:cursor-grabbing",
        className
      )}
    >
      {children}
    </motion.div>
  );
};