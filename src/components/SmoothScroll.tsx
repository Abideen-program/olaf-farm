"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.25, anchors: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let id = 0;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
