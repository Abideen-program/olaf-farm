"use client";
import { motion } from "framer-motion";
import { Words } from "./Reveal";

const OFFERS = [
  { name: "Live rabbits", text: "Breeders and weaners for people starting or growing a rabbitry." },
  { name: "Fresh and smoked meat", text: "Dressed to order in batches. Smoked rabbit keeps well and travels across Nigeria." },
  { name: "Feed and hay", text: "Feed and forage for your own rabbits, sourced and checked by a working farm." },
  { name: "Mentorship", text: "Practical guidance for anyone who wants to start rabbit farming with confidence." },
];

export default function Offers() {
  return (
    <section id="raise" className="mx-auto max-w-6xl px-5 py-28">
      <h2 className="font-display text-5xl text-forest-700 sm:text-7xl"><Words text="What is coming" /></h2>
      <ul className="mt-14 border-t border-forest-700/20">
        {OFFERS.map((o, i) => (
          <motion.li key={o.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group grid items-center gap-3 border-b border-forest-700/20 py-9 transition-colors hover:bg-forest-700/[0.04] sm:grid-cols-[1.1fr_1.4fr_auto] sm:gap-10">
            <h3 className="font-display text-3xl text-forest-700 transition-transform duration-500 group-hover:translate-x-3 sm:text-4xl">{o.name}</h3>
            <p className="text-ink/75">{o.text}</p>
            <span aria-hidden className="hidden text-3xl text-leaf-500 opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100 sm:block">&rarr;</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
