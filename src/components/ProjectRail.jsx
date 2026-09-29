import React, { useEffect, useRef, useState } from "react";

const SPEED = 45; // px per second, right-to-left drift
const RESUME_AFTER = 2500; // ms after the visitor stops interacting

/**
 * Horizontal project strip that drifts right-to-left on its own.
 * Hover, focus, touch or the arrow buttons pause it; it picks up again a
 * moment later. The list is rendered twice so the loop never shows a gap;
 * the copy is inert, so keyboard and screen-reader users meet each card once.
 */
export default function ProjectRail({ items, renderItem, resetKey }) {
  const railRef = useRef(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef(0);
  const [reduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const loop = !reduced && items.length > 2;

  // Start from the beginning whenever the filter or search changes.
  useEffect(() => {
    if (railRef.current) railRef.current.scrollLeft = 0;
  }, [resetKey]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !loop) return;

    let frame = 0;
    let last = performance.now();
    let carry = 0; // sub-pixel remainder, so slow speeds still move

    const tick = (now) => {
      const dt = Math.min(now - last, 120);
      last = now;
      if (!pausedRef.current && !document.hidden) {
        carry += (SPEED * dt) / 1000;
        const step = Math.floor(carry);
        if (step > 0) {
          carry -= step;
          const half = rail.scrollWidth / 2;
          let next = rail.scrollLeft + step;
          if (next >= half) next -= half;
          rail.scrollLeft = next;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [loop, items]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const pause = () => {
    clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  };

  const resumeSoon = () => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_AFTER);
  };

  const nudge = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    pause();
    const card = rail.querySelector(".project-card");
    const gap = parseFloat(getComputedStyle(rail.firstElementChild).columnGap) || 0;
    const width = card ? card.offsetWidth + gap : rail.clientWidth * 0.8;
    if (loop && dir < 0 && rail.scrollLeft < width) {
      rail.scrollLeft += rail.scrollWidth / 2; // wrap backwards seamlessly
    }
    rail.scrollBy({ left: dir * width, behavior: reduced ? "auto" : "smooth" });
    resumeSoon();
  };

  return (
    <div className="project-rail-wrap">
      <button
        type="button"
        className="rail-arrow prev"
        onClick={() => nudge(-1)}
        aria-label="Previous projects"
      >
        <i className="bx bx-chevron-left"></i>
      </button>

      <div
        className="project-rail"
        ref={railRef}
        onMouseEnter={pause}
        onMouseLeave={resumeSoon}
        onFocus={pause}
        onBlur={resumeSoon}
        onTouchStart={pause}
        onTouchEnd={resumeSoon}
        onWheel={() => {
          pause();
          resumeSoon();
        }}
      >
        <div className="project-track">
          {items.map((p) => renderItem(p, false))}
          {loop && (
            <div className="project-track-copy" aria-hidden="true" inert>
              {items.map((p) => renderItem(p, true))}
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        className="rail-arrow next"
        onClick={() => nudge(1)}
        aria-label="Next projects"
      >
        <i className="bx bx-chevron-right"></i>
      </button>
    </div>
  );
}
