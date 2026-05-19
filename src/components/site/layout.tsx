import { useState } from "react";
import { navLinks } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-gold/15 bg-brand-charcoal/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-brand-sand">
          OPEN <span className="text-brand-gold">BLINDS</span>
        </a>
        <div className="hidden gap-10 text-xs font-semibold uppercase tracking-widest text-brand-sand/80 md:flex">
          {navLinks.map((l) => (
            <a key={l.hash} href={l.hash} className="transition-colors hover:text-brand-gold">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden bg-brand-gold px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-charcoal transition-colors hover:bg-brand-gold-light md:inline-block"
        >
          Free Quote
        </a>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-brand-sand" />
          <span className="mt-1.5 block h-0.5 w-6 bg-brand-sand" />
          <span className="mt-1.5 block h-0.5 w-6 bg-brand-sand" />
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-gold/15 bg-brand-charcoal md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6 text-xs font-semibold uppercase tracking-widest text-brand-sand">
            {navLinks.map((l) => (
              <a
                key={l.hash}
                href={l.hash}
                onClick={() => setOpen(false)}
                className="hover:text-brand-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand-gold px-6 py-3 text-center font-bold text-brand-charcoal"
            >
              Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-brand-gold/15 bg-brand-charcoal px-6 py-12 text-brand-sand lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <span className="font-serif text-xl font-bold">
          OPEN <span className="text-brand-gold">BLINDS</span>
        </span>
        <p className="text-[10px] uppercase tracking-widest text-brand-sand/40">
          © {new Date().getFullYear()} Open Blinds South Africa. Precision in every slat.
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest">
          <a href="#" className="hover:text-brand-gold">
            Instagram
          </a>
          <a href="#" className="hover:text-brand-gold">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-widest text-brand-gold">{children}</p>
  );
}
