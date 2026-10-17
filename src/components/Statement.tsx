"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const TEXT = "From Abeokuta to your table. Honest rabbit farming, built on healthy breeding stock, clean routines and straight answers.";

function Word({ w, i, n, p }: { w: string; i: number; n: number; p: MotionValue<number> }) {
  const opacity = useTransform(p, [i / n, (i + 1) / n], [0.14, 1]);
  return <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">{w}</motion.span>;
}

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = TEXT.split(" ");
  return (
    <section ref={ref} className="bg-paper-50 px-5 py-40">
      <p className="mx-auto max-w-5xl font-display text-4xl leading-[1.12] text-forest-700 sm:text-6xl lg:text-7xl">
        {words.map((w, i) => <Word key={i} w={w} i={i} n={words.length} p={p} />)}
      </p>
    </section>
  );
}
