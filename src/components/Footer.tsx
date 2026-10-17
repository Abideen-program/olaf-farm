export default function Footer() {
  return (
    <footer className="on-dark bg-forest-950 text-paper-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-light.svg" alt="Olaf Farm" className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-paper-100/70">
            A working rabbit farm in Abeokuta, Ogun State, Nigeria.
          </p>
        </div>
        <p className="text-sm text-paper-100/60">&copy; {new Date().getFullYear()} Olaf Farm</p>
      </div>
    </footer>
  );
}
