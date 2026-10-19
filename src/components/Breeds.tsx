import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { getBreeds } from "@/lib/breeds-data";
import BreedsGrid from "./BreedsGrid";
import { Words } from "./Reveal";

export default async function Breeds() {
  const breeds = await getBreeds();
  const items = breeds.map((b) => ({
    slug: b.slug, name: b.name, note: b.note,
    photo: b.photos?.[0] ?? (fs.existsSync(path.join(process.cwd(), "public", "breeds", `${b.slug}.jpg`)) ? `/breeds/${b.slug}.jpg` : undefined),
  }));
  return (
    <section id="breeds" className="on-dark grain bg-forest-700 text-paper-50">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl sm:text-7xl"><Words text="The breeds we raise" /></h2>
          <Link href="/breeds" className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 transition hover:bg-white/10">
            See all breeds <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
          </Link>
        </div>
        <BreedsGrid items={items} />
      </div>
    </section>
  );
}
