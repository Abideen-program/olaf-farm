const WORDS = ["Breeders", "Weaners", "Fresh meat", "Smoked meat", "Feed", "Hay", "Mentorship"];
export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden bg-clay-500 py-5 text-cream-50" aria-hidden>
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-3xl sm:text-5xl">
        {[...row, ...row].map((w, i) => (<span key={i} className="flex items-center gap-10">{w}<span className="text-forest-900/60">&bull;</span></span>))}
      </div>
    </div>
  );
}
