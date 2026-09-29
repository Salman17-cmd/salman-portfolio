import React, { useEffect } from "react";

/**
 * Site-wide ambient background: a drifting colour mesh, mesh + perspective
 * grids, a star field in dark mode, film grain and a glow that follows the
 * pointer. On top of that sits a game-HUD layer: a dot matrix, a radar
 * sweep, a tinted neon-arcade photo plate, drifting 8-bit sprites and
 * soft accent blooms in the corners.
 * Purely decorative, and theme-aware: every layer reads the accent from
 * CSS variables, so it follows the colour picker.
 */

/* Fixed seeds so the sprites drift the same way on every render.
   `s` picks one of four 8-bit masks: invader, heart, ghost, gem. */
const SPRITES = [
  { left: 4, delay: 0, dur: 26, size: 22, s: 0 },
  { left: 13, delay: 9, dur: 34, size: 15, s: 1 },
  { left: 21, delay: 17, dur: 29, size: 26, s: 2 },
  { left: 29, delay: 4, dur: 38, size: 14, s: 3 },
  { left: 37, delay: 21, dur: 31, size: 19, s: 0 },
  { left: 45, delay: 12, dur: 41, size: 16, s: 2 },
  { left: 53, delay: 2, dur: 27, size: 24, s: 1 },
  { left: 61, delay: 25, dur: 36, size: 14, s: 3 },
  { left: 69, delay: 7, dur: 30, size: 20, s: 2 },
  { left: 77, delay: 19, dur: 39, size: 17, s: 0 },
  { left: 85, delay: 14, dur: 28, size: 25, s: 1 },
  { left: 93, delay: 5, dur: 35, size: 15, s: 3 },
];

export default function Background() {
  useEffect(() => {
    // Pointer glow: fine on desktop, skipped for touch and reduced motion.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let frame = 0;
    const handleMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const root = document.documentElement;
        root.style.setProperty("--pointer-x", `${(e.clientX / window.innerWidth) * 100}%`);
        root.style.setProperty("--pointer-y", `${(e.clientY / window.innerHeight) * 100}%`);
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <div className="site-bg-photo" />
        <span className="site-bg-blob blob-a" />
        <span className="site-bg-blob blob-b" />
        <span className="site-bg-blob blob-c" />
        <div className="site-bg-hex" />
        <div className="site-bg-grid" />
        <div className="site-bg-floor" />
        <div className="site-bg-stars" />
        <div className="site-bg-motes">
          {SPRITES.map((m, i) => (
            <span
              key={i}
              className={`s${m.s}`}
              style={{
                left: `${m.left}%`,
                width: `${m.size}px`,
                animationDelay: `-${m.delay}s`,
                animationDuration: `${m.dur}s`,
              }}
            />
          ))}
        </div>
        <div className="site-bg-scan" />
        <div className="site-bg-glow" />
        <div className="site-bg-grain" />
        <div className="site-bg-vignette" />
      </div>

      {/* Corner blooms, drawn over the page. */}
      <div className="hud-frame" aria-hidden="true">
        <span className="hud-corner tl" />
        <span className="hud-corner tr" />
        <span className="hud-corner bl" />
        <span className="hud-corner br" />
      </div>
    </>
  );
}
