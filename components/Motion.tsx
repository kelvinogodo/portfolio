"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement. Nothing is hidden until this runs, and only elements that
 * are still below the fold get their "pending" state, so the page at rest is always readable.
 */
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const root = document.documentElement;
    root.classList.add("motion");

    const io = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.remove("reveal-pending");
            io.unobserve(item.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      // Already on screen, or scrolled past: leave it alone.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.classList.add("reveal-pending");
      io.observe(el);
    });

    // Slow parallax on the header ridges.
    const identity = document.querySelector<HTMLElement>(".identity");
    let raf = 0;
    const onScroll = () => {
      if (raf || !identity) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = Math.min(window.scrollY, identity.offsetHeight);
        identity.style.setProperty("--py", `${(y * 0.18).toFixed(1)}px`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      root.classList.remove("motion");
      document.querySelectorAll(".reveal-pending").forEach((el) => el.classList.remove("reveal-pending"));
    };
  }, []);

  return null;
}
