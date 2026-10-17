"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Mark from "./Mark";

const CHAPTERS = [
  { n: "I", t: "Breed", p: "It starts with the right stock. We keep proven meat and breeding lines and pair them with care, so every litter begins from a strong place." },
  { n: "II", t: "Raise", p: "Clean housing, steady feed and daily attention. Rabbits thrive on a calm, consistent routine, and so do the people who rely on them." },
  { n: "III", t: "Deliver", p: "Live breeders, fresh dressed meat and smoked rabbit, prepared in batches and handed over with honest information about what you are getting." },
];

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(p, "change", (v) => setActive(Math.min(2, Math.max(0, Math.floor(v * 3)))));
  const rotate = useTransform(p, [0, 1], [-14, 14]);
  const scale = useTransform(p, [0, 0.5, 1], [0.92, 1.06, 0.96]);
  const bar = useTransform(p, [0, 1], [0, 1]);
  const c = CHAPTERS[active];
  return (
    <section id="story" ref={ref} className="relative h-[300vh] bg-paper-100">
      <div className="sticky top-0 grid h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
          <div className="relative h-[24rem]">
            <AnimatePresence mode="wait">
              <motion.div key={c.n} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 flex flex-col justify-center">
                <span aria-hidden className="absolute -top-4 left-0 font-display text-[20vw] leading-none text-forest-700/[0.07]">{c.n}</span>
                <h2 className="relative font-display text-6xl text-forest-700 sm:text-8xl">{c.t}</h2>
                <p className="relative mt-6 max-w-md text-lg text-ink/75">{c.p}</p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 flex gap-2" aria-hidden>
              {CHAPTERS.map((x, i) => <span key={x.n} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-leaf-500" : "w-4 bg-forest-700/25"}`} />)}
            </div>
          </div>
          <motion.div style={{ rotate, scale }} className="mx-auto w-full max-w-sm">
            <Mark className="h-auto w-full" />
          </motion.div>
        </div>
        <motion.div style={{ scaleX: bar }} className="absolute bottom-0 left-0 h-1 w-full origin-left bg-leaf-500" />
      </div>
    </section>
  );
}
