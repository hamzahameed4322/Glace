import { cn } from "@/lib/util";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // useLocation add kiya

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 top-full mt-4 flex flex-col gap-4 items-center z-[150]"
          >
            {items.map((item) => (
              <motion.button
                key={item.title}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) item.onClick();
                  else {
                    setOpen(false);
                    // Mobile Fix: Same page scroll up
                    if (item.href === "/" && location.pathname === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (item.href.startsWith("#")) {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate(item.href);
                    }
                  }
                }}
                className="flex items-center w-[220px] group py-1"
              >
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl bg-white dark:bg-neutral-900 border border-border shadow-sm">
                  <div className="h-6 w-6 text-foreground">{item.icon}</div>
                </div>
                <div className="ml-6 flex-1 text-left">
                  <span className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-border shadow-xl"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-start gap-4 rounded-2xl bg-gray-50/20 px-4 pt-3 md:flex dark:bg-neutral-900/20 backdrop-blur-xl border border-white/10 shadow-2xl",
        className
      )}>
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href, onClick }) {
  let ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Hook for checking current route

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 400, damping: 25 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 400, damping: 25 });
  let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 400, damping: 25 });
  let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 400, damping: 25 });

  const [hovered, setHovered] = useState(false);

  // DESKTOP CLICK LOGIC FIX
  const handleClick = (e) => {
    if (onClick) {
      onClick();
      return;
    }

    if (href?.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } 
    // IF ALREADY ON HOME PAGE, SCROLL UP
    else if (href === "/" && location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick} // Add click handler here
      className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200/50 dark:bg-neutral-800/50 border border-white/5 shadow-sm transition-transform active:scale-90 cursor-pointer"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, x: "-50%" }}
            animate={{ opacity: 1, y: 12, x: "-50%" }}
            exit={{ opacity: 0, y: -10, x: "-50%" }}
            className="absolute top-full left-1/2 w-fit rounded-md border border-border bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-xl z-50 pointer-events-none"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center text-foreground pointer-events-none">
        {icon}
      </motion.div>
    </motion.div>
  );

  // If it's a home-scroll or hash-link, we don't want the <Link> to interfere
  if (onClick || href?.startsWith("#") || (href === "/" && location.pathname === "/")) {
    return <div className="relative">{content}</div>;
  }

  return <Link to={href} className="relative">{content}</Link>;
}