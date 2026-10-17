import fs from "node:fs";
import path from "node:path";
import { BREEDS } from "@/lib/breeds";
import BreedsGrid from "./BreedsGrid";
import { Words } from "./Reveal";

export default function Breeds() {
  const items = BREEDS.map((b) => ({ ...b, photo: fs.existsSync(path.join(process.cwd(), "public", "breeds", `${b.slug}.jpg`)) }));
  return (
    <section id="breeds" className="on-dark grain bg-forest-700 text-paper-50">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <h2 className="font-display text-5xl sm:text-7xl"><Words text="The breeds we raise" /></h2>
        <BreedsGrid items={items} />
      </div>
    </section>
  );
}
