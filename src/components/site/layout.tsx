import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import { navLinks, contactInfo } from "@/lib/site-data";

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
          © {new Date().getFullYear()} Open Blinds Mbombela. Precision in every slat.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-brand-sand/60 transition-colors hover:text-brand-gold"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-brand-sand/60 transition-colors hover:text-brand-gold"
          >
            <Facebook size={20} strokeWidth={1.5} />
          </a>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-brand-sand/60 transition-colors hover:text-brand-gold"
          >
            <WhatsAppIcon className="h-5 w-5" />
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

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.87 11.87 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44zM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.77.99 1-3.67-.22-.38a9.4 9.4 0 0 1-1.44-5.02c0-5.19 4.22-9.41 9.42-9.41 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.76 6.66c0 5.19-4.22 9.41-9.26 9.58zm5.16-7.05c-.28-.14-1.67-.83-1.93-.92-.26-.09-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.4-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.02.14.19 2 3.05 4.85 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33z"/>
    </svg>
  );
}
