export default function Header() {
  return (
    <header className="on-dark fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-white/10 bg-forest-950/60 pl-5 pr-2 text-paper-50 shadow-lg shadow-black/20 backdrop-blur-xl">
        <a href="/" aria-label="Olaf Farm home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-light.svg" alt="Olaf Farm" className="h-8 w-auto" />
        </a>
        <nav className="flex items-center gap-6 text-sm text-paper-50/80">
          <a href="#story" className="hidden hover:text-paper-50 sm:inline">Our way</a>
          <a href="#breeds" className="hidden hover:text-paper-50 sm:inline">Breeds</a>
          <a href="#waitlist" className="rounded-full bg-lime-300 px-5 py-2.5 font-medium text-forest-900 transition hover:bg-paper-50">Join the waitlist</a>
        </nav>
      </div>
    </header>
  );
}
