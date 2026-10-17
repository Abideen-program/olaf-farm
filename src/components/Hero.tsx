"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Mark from "./Mark";
import { Words } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMark = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  return (
    <section ref={ref} className="on-dark grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950 text-paper-50">
      <div aria-hidden className="hero-glow absolute inset-0 -z-10" />
      <motion.div aria-hidden style={{ y: yMark, scale }} className="pointer-events-none absolute -right-[10%] top-1/2 -z-10 w-[88vmin] -translate-y-1/2 opacity-[0.16]">
        <Mark main="#E6EEDC" inner="#B6E36B" dot="#B6E36B" animate className="h-auto w-full" />
      </motion.div>
      <motion.div style={{ y: yText, opacity: fade }} className="mx-auto w-full max-w-6xl px-5 pt-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="text-lime-300">
          Olaf Farm, Abeokuta, Ogun State
        </motion.p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,9vw,8rem)] leading-[0.98]">
          <Words text="Rabbits raised with care." delay={0.35} />
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 1 }} className="mt-8 max-w-xl text-lg text-paper-100/80">
          Breeders, weaners, fresh and smoked meat, feed and hay, from a working farm. Our first batches are on the way.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 1 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#waitlist" className="rounded-full bg-lime-300 px-8 py-4 font-medium text-forest-900 transition hover:bg-paper-50">Join the waitlist</a>
          <a href="#story" className="rounded-full border border-paper-100/40 px-8 py-4 transition hover:bg-paper-50/10">Our way</a>
        </motion.div>
      </motion.div>
      <div aria-hidden className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 overflow-hidden bg-paper-100/15">
        <div className="cue h-full w-full bg-paper-100/70" />
      </div>
    </section>
  );
}
