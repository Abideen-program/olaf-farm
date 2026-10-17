"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, y = 36, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay, ease }}>
      {children}
    </motion.div>
  );
}

export function Words({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span className={className} initial="hidden" whileInView="show" viewport={{ once: true }}
      transition={{ staggerChildren: 0.08, delayChildren: delay }} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden>
          <motion.span className="inline-block" variants={{ hidden: { y: "110%" }, show: { y: 0 } }} transition={{ duration: 1.1, ease }}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
