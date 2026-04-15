import { cn } from "@/lib/utils"; // Path check kar lein

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.3, // Thora kam rakha hai taake subtle lage
  lightLineColor = "rgba(236, 72, 153, 0.2)", // Light mode mein pinkish gray
  darkLineColor = "rgba(236, 72, 153, 0.15)", // Dark mode mein soft pink
  ...props
}) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 size-full overflow-hidden [perspective:200px]",
        className
      )}
      style={gridStyles}
      {...props}
    >
      {/* Grid Wrapper */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid 
          [inset:0%_0px] [margin-left:-200%] [height:400vh] [width:600vw] 
          [transform-origin:100%_0_0] 
          [background-repeat:repeat] 
          [background-size:var(--cell-size)_var(--cell-size)] 
          [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] 
          dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" 
        />
      </div>

      {/* Fade Mask - Ye grid ko edges se gayab karta hai */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
    </div>
  );
}