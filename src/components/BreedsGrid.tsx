"use client";
import { motion } from "framer-motion";

export type BreedItem = { slug: string; name: string; note: string; photo: boolean };

export default function BreedsGrid({ items }: { items: BreedItem[] }) {
  return (
    <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((b, i) => (
        <motion.li key={b.slug} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="group">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-forest-500/30">
            {b.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`/breeds/${b.slug}.jpg`} alt={`${b.name} rabbit`} loading="lazy" className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110" />
            ) : (
              <div aria-hidden className="flex h-full items-center justify-center bg-gradient-to-br from-forest-500/50 to-forest-900 font-display text-7xl text-paper-100/30 transition duration-[1400ms] group-hover:scale-110">
                {b.name.split(" ").map((w) => w[0]).join("")}
              </div>
            )}
            <span className="absolute left-4 top-4 font-display text-paper-50/80">0{i + 1}</span>
          </div>
          <h3 className="mt-5 font-display text-3xl">{b.name}</h3>
          <p className="mt-2 text-sm text-paper-100/70">{b.note}</p>
        </motion.li>
      ))}
    </ul>
  );
}
