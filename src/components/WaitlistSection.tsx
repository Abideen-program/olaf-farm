import Mark from "./Mark";
import WaitlistForm from "./WaitlistForm";
import { Reveal, Words } from "./Reveal";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="on-dark grain relative isolate overflow-hidden bg-forest-900 text-paper-50">
      <div aria-hidden className="hero-glow absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="pointer-events-none absolute -left-[15%] top-1/2 -z-10 w-[70vmin] -translate-y-1/2 opacity-[0.07]">
        <Mark main="#E6EEDC" inner="#E6EEDC" dot="#E6EEDC" className="h-auto w-full" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-32 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl leading-[1.02] sm:text-7xl"><Words text="Be first when the first batch is ready." /></h2>
          <Reveal delay={0.3}><p className="mt-6 max-w-md text-paper-100/80">Leave your details and tell us what you want. We will message you before anything is open to the public.</p></Reveal>
        </div>
        <Reveal delay={0.2}><WaitlistForm /></Reveal>
      </div>
    </section>
  );
}
