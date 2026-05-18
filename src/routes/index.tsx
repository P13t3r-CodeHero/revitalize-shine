import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroInterior from "@/assets/hero-interior.jpg";
import productAluwood from "@/assets/product-aluwood.jpg";
import productPlaswood from "@/assets/product-plaswood.jpg";
import productHoneycomb from "@/assets/product-honeycomb.jpg";
import productVenetian from "@/assets/product-venetian.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const products = [
  {
    name: "Aluwood",
    img: productAluwood,
    blurb:
      "Aluminium with a wood-grain finish. The look of timber, the resilience for kitchens and bathrooms — available in 25mm and 50mm.",
  },
  {
    name: "Plaswood",
    img: productPlaswood,
    blurb:
      "Extremely durable, heat and stain resistant. Ideal for areas with high moisture or humidity content.",
  },
  {
    name: "Honeycomb",
    img: productHoneycomb,
    blurb:
      "Cellular shades that trap air in distinct pockets — keeping your home warm in winter and cool in summer.",
  },
  {
    name: "Venetian",
    img: productVenetian,
    blurb:
      "The timeless classic. Precise control over light and privacy, in a finish that suits any room.",
  },
];

const services = [
  {
    n: "01",
    title: "Expert Consultation",
    body: "We visit your home, walk each room, and recommend the right product for the light, the use, and your style.",
  },
  {
    n: "02",
    title: "Precision Measurement",
    body: "Every window measured by hand. Custom-cut to fit your frame — no compromises, no off-the-shelf gaps.",
  },
  {
    n: "03",
    title: "Free Professional Installation",
    body: "Installation is included on every order. Our team handles the heavy lifting — you just enjoy the view.",
  },
];

const testimonials = [
  {
    quote:
      "The team was meticulous from quote to installation. Our living room feels completely transformed by the new aluwood blinds.",
    name: "Sarah M.",
    place: "Cape Town",
  },
  {
    quote:
      "Honest pricing, on time, and the honeycomb blinds have noticeably cut our afternoon heat. Couldn't recommend Open Blinds more.",
    name: "Johan K.",
    place: "Stellenbosch",
  },
  {
    quote:
      "We've used Open Blinds across three properties now. Same attention to detail every time. Real craftsmanship.",
    name: "Priya N.",
    place: "Durbanville",
  },
];

function Index() {
  return (
    <div className="bg-brand-sand font-sans text-brand-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-charcoal/5 bg-brand-sand/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="font-serif text-2xl font-bold tracking-tight">
          OPEN BLINDS
        </a>
        <div className="hidden gap-10 text-xs font-semibold uppercase tracking-widest md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-brand-gold">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden bg-brand-charcoal px-6 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-brand-gold md:inline-block"
        >
          Free Quote
        </a>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-brand-charcoal" />
          <span className="mt-1.5 block h-0.5 w-6 bg-brand-charcoal" />
          <span className="mt-1.5 block h-0.5 w-6 bg-brand-charcoal" />
        </button>
      </div>
      {open && (
        <div className="border-t border-brand-charcoal/10 bg-brand-sand md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6 text-xs font-semibold uppercase tracking-widest">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-brand-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand-charcoal px-6 py-3 text-center text-white"
            >
              Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="px-6 pb-20 pt-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8">
        <div className="col-span-12 lg:col-span-5">
          <h1 className="mb-8 font-serif text-6xl leading-[0.9] lg:text-8xl">
            Shade up your <span className="italic">windows.</span>
          </h1>
          <p className="mb-10 max-w-md text-lg text-brand-charcoal/70">
            Premium South African craftsmanship meets architectural precision. Elevate
            your interior with custom-fitted window solutions.
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-bold">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-gold" /> Free Quotes
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-gold" /> Free Installation
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <img
            src={heroInterior}
            alt="Sunlit modern living room with wooden venetian blinds"
            width={1600}
            height={1200}
            className="aspect-[4/3] w-full object-cover shadow-2xl outline outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-4">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gold">About</p>
          <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
            Innovation meets <span className="italic">excellence.</span>
          </h2>
        </div>
        <div className="col-span-12 space-y-6 text-lg leading-relaxed text-brand-charcoal/75 lg:col-span-7 lg:col-start-6">
          <p>
            Welcome to Open Blinds, where we set the highest standards in the window
            blinds industry, with a commitment to exceptional service at our core. Our
            meticulous craftsmanship has earned us a reputation as a leading blinds
            installer.
          </p>
          <p>
            We are your trusted partners in transforming your home. Our high-quality
            products and personalised approach guarantee the perfect solution for your
            needs. With free quotes and installation, we make the process seamless.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-brand-gold">
              Products
            </p>
            <h2 className="font-serif text-4xl">The Collection</h2>
          </div>
          <div className="hidden h-px flex-1 bg-brand-charcoal/10 md:block" />
          <span className="hidden font-serif text-xl italic text-brand-gold md:inline">
            Custom engineered for every space
          </span>
        </div>
        <div className="grid grid-cols-1 gap-px border border-brand-charcoal/10 bg-brand-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="group bg-white p-8">
              <div className="mb-6 aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} blinds`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl">{p.name}</h3>
              <p className="text-sm leading-relaxed text-brand-charcoal/60">{p.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gold">
            Services
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl">
            One team, <span className="italic">end to end.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px border border-brand-charcoal/10 bg-brand-charcoal/10 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="bg-brand-sand p-10">
              <span className="font-serif text-3xl text-brand-gold">{s.n}</span>
              <h3 className="mb-4 mt-4 font-serif text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-brand-charcoal/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-xs uppercase tracking-widest text-brand-gold">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl">Kind words from clients</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-brand-charcoal/15 pt-8">
              <blockquote className="font-serif text-xl leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest text-brand-charcoal/60">
                {t.name} — {t.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      // TODO: Replace with your contact form endpoint URL
      const endpoint = "https://YOUR-CONTACT-FORM-ENDPOINT.example.com";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 bg-brand-charcoal text-white lg:grid-cols-2">
          <div className="flex flex-col justify-center p-10 lg:p-20">
            <p className="mb-4 text-xs uppercase tracking-widest text-brand-gold">
              Contact
            </p>
            <h2 className="mb-6 font-serif text-4xl lg:text-5xl">
              Ready to transform your light?
            </h2>
            <p className="mb-10 text-white/65">
              Book a professional measurement and consultation. We handle everything
              from advice to the final installation.
            </p>
            <div className="space-y-4">
              {services.map((s) => (
                <div
                  key={s.n}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <span className="font-serif text-2xl text-brand-gold">{s.n}</span>
                  <p className="text-sm uppercase tracking-widest">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 text-brand-charcoal lg:p-20">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Address" name="address" />
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">
                  Blind Type Interested In
                </label>
                <select
                  name="blind_type"
                  defaultValue="Aluwood"
                  className="border-b border-brand-charcoal/20 bg-transparent py-2 transition-colors focus:border-brand-gold focus:outline-none"
                >
                  {products.map((p) => (
                    <option key={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="border-b border-brand-charcoal/20 bg-transparent py-2 transition-colors focus:border-brand-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brand-gold py-5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-charcoal disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request Free Quote"}
              </button>
              {status === "sent" && (
                <p className="text-sm text-brand-gold">
                  Thank you — we'll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold uppercase tracking-widest">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-brand-charcoal/20 bg-transparent py-2 transition-colors focus:border-brand-gold focus:outline-none"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brand-charcoal/5 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <span className="font-serif text-xl font-bold">OPEN BLINDS</span>
        <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40">
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
