import { useEffect, useState, type FormEvent } from "react";
import heroInterior from "@/assets/hero-interior.jpg";
import { Header, Footer, SectionEyebrow, WhatsAppIcon } from "@/components/site/layout";
import {
  products,
  services,
  testimonials,
  contactInfo,
  solutions,
  steelworksGallery,
} from "@/lib/site-data";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-charcoal font-sans text-brand-sand">
      <Header />
      <main className="pt-20">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Services />
      <Testimonials />
      <Contact />
      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-charcoal text-brand-gold shadow-xl transition-all hover:scale-110 hover:bg-brand-gold hover:text-brand-charcoal"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 px-6 pb-24 pt-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8">
        <div className="col-span-12 lg:col-span-5">
          <p className="mb-6 text-xs uppercase tracking-widest text-brand-gold">
            Shade · Style · Security - Mbombela
          </p>
          <h1 className="mb-8 font-serif text-6xl leading-[0.9] text-brand-sand lg:text-8xl">
            More than <span className="italic text-brand-gold">blinds.</span>
          </h1>
          <p className="mb-10 max-w-md text-lg text-brand-sand/65">
            Custom blinds, shutters, curtains, awnings, window tinting, steel
            security and outdoor living - one team, professionally installed.
          </p>
          <div className="mb-10 flex flex-wrap gap-6 text-sm font-bold text-brand-sand">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-gold" /> Free Quotes
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-gold" /> Free Installation
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-brand-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-charcoal transition-colors hover:bg-brand-gold-light"
            >
              Request Free Quote
            </a>
            <a
              href="#solutions"
              className="border border-brand-gold/40 px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-sand transition-colors hover:bg-brand-gold/10"
            >
              Explore Solutions
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <img
            src={heroInterior}
            alt="Sunlit modern living room with wooden venetian blinds"
            width={1600}
            height={1200}
            className="aspect-[4/3] w-full object-cover shadow-2xl outline outline-1 -outline-offset-1 outline-brand-gold/20"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-4">
          <SectionEyebrow>About</SectionEyebrow>
          <h2 className="font-serif text-4xl leading-tight text-brand-sand lg:text-5xl">
            Innovation meets <span className="italic text-brand-gold">excellence.</span>
          </h2>
        </div>
        <div className="col-span-12 space-y-6 text-lg leading-relaxed text-brand-sand/75 lg:col-span-7 lg:col-start-6">
          <p>
            Welcome to Open Blinds - a Mbombela-based team known for meticulous
            craftsmanship and personal service. What started with custom blinds has
            grown into a full home solutions offering: shutters, curtains, awnings,
            outdoor roller blinds, frosted glass &amp; tinting, custom steelworks
            and recycled outdoor furniture.
          </p>
          <p>
            One trusted team, from measurement to installation. Every project starts
            with a free consultation and quote - so you know exactly what you're
            getting before we begin.
          </p>
          <p className="border-l-2 border-brand-gold pl-6 font-serif text-xl italic text-brand-gold-light">
            Precision in every slat.
          </p>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <SectionEyebrow>Solutions</SectionEyebrow>
            <h2 className="font-serif text-4xl text-brand-sand lg:text-5xl">
              More than blinds.
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-brand-gold/20 md:block" />
          <span className="hidden font-serif text-xl italic text-brand-gold md:inline">
            Custom engineered for every space
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => {
            const inner = (
              <>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <h3 className="font-serif text-xl text-brand-sand">{s.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold">
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-sand/65">{s.blurb}</p>
                  {s.anchor && (
                    <span className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-gold">
                      View the range →
                    </span>
                  )}
                </div>
              </>
            );
            const className =
              "group flex flex-col overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-charcoal transition-colors hover:bg-brand-surface";
            return s.anchor ? (
              <a key={s.slug} href={s.anchor} className={className}>
                {inner}
              </a>
            ) : (
              <article key={s.slug} className={className}>
                {inner}
              </article>
            );
          })}
        </div>

        {/* Blinds sub-range */}
        <div id="blinds-range" className="mt-24 scroll-mt-24">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <SectionEyebrow>Blinds Range</SectionEyebrow>
              <h3 className="font-serif text-3xl text-brand-sand lg:text-4xl">
                Ten <span className="italic text-brand-gold">custom</span> blind types
              </h3>
            </div>
            <div className="hidden h-px flex-1 bg-brand-gold/20 md:block" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {products.map((p) => (
              <article
                key={p.name}
                className="group flex h-full flex-col rounded-lg border border-brand-gold/10 bg-brand-charcoal p-4 transition-colors hover:bg-brand-surface"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-md">
                  <img
                    src={p.img}
                    alt={`${p.name} blinds`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <h4 className="mb-2 font-serif text-base text-brand-sand">{p.name}</h4>
                  <p className="text-xs leading-relaxed text-brand-sand/60">{p.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Steelworks gallery */}
        <div id="steelworks-gallery" className="mt-24 scroll-mt-24">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <SectionEyebrow>Steelworks Gallery</SectionEyebrow>
              <h3 className="font-serif text-3xl text-brand-sand lg:text-4xl">
                Security &amp; <span className="italic text-brand-gold">bespoke</span> steel
              </h3>
            </div>
            <div className="hidden h-px flex-1 bg-brand-gold/20 md:block" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steelworksGallery.map((g) => (
              <figure
                key={g.label}
                className="group overflow-hidden rounded-lg border border-brand-gold/10 bg-brand-charcoal"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="p-4 text-xs uppercase tracking-widest text-brand-sand/80">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="font-serif text-4xl text-brand-sand lg:text-5xl">
            One team, <span className="italic text-brand-gold">end to end.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.n} className="bg-brand-surface p-8 flex flex-col h-full border border-brand-gold/10 rounded-lg">
              <span className="font-serif text-3xl text-brand-gold">{s.n}</span>
              <h3 className="mb-4 mt-4 font-serif text-2xl text-brand-sand">{s.title}</h3>
              <p className="text-sm leading-relaxed text-brand-sand/70 mt-auto">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-serif text-4xl text-brand-sand lg:text-5xl">
            Kind words from clients
          </h2>
        </div>

        <div className="space-y-6">
          <figure className="mx-auto max-w-4xl rounded-[1.75rem] border border-brand-gold/20 bg-brand-surface p-10 text-center shadow-[0_24px_80px_-50px_rgba(255,215,130,0.45)]">
            <div className="mb-6 flex justify-center gap-2 text-brand-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} aria-hidden="true">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="font-serif text-2xl leading-snug text-brand-sand sm:text-[2.15rem]">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-xs uppercase tracking-[0.35em] text-brand-gold">
              {current.name}
            </figcaption>
          </figure>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) =>
                  current === 0 ? testimonials.length - 1 : current - 1,
                )
              }
              className="rounded-full border border-brand-gold/30 bg-brand-charcoal px-5 py-3 text-sm text-brand-sand transition hover:border-brand-gold hover:text-brand-gold"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) => (current + 1) % testimonials.length)
              }
              className="rounded-full border border-brand-gold/30 bg-brand-charcoal px-5 py-3 text-sm text-brand-sand transition hover:border-brand-gold hover:text-brand-gold"
            >
              Next
            </button>
          </div>

          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-brand-gold"
                    : "bg-brand-gold/30 hover:bg-brand-gold/70"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
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
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="font-serif text-4xl text-brand-sand lg:text-5xl">
            Ready to transform your light?
          </h2>
        </div>
        <div className="grid grid-cols-1 border border-brand-gold/15 lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-brand-surface p-10 lg:p-16">
            <p className="mb-10 text-brand-sand/70">
              Book a professional measurement and consultation. We handle everything
              from advice to the final installation.
            </p>
            <div className="space-y-5">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-4 border-b border-brand-gold/15 pb-4 transition-colors hover:text-brand-gold"
              >
                <span className="font-serif text-2xl text-brand-gold">01</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-sand/60">Phone</p>
                  <p className="text-sm text-brand-sand">{contactInfo.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-4 border-b border-brand-gold/15 pb-4 transition-colors hover:text-brand-gold"
              >
                <span className="font-serif text-2xl text-brand-gold">02</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-sand/60">Email</p>
                  <p className="text-sm text-brand-sand">{contactInfo.email}</p>
                </div>
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 border-b border-brand-gold/15 pb-4 transition-colors hover:text-brand-gold"
              >
                <span className="font-serif text-2xl text-brand-gold">03</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-sand/60">WhatsApp</p>
                  <p className="text-sm text-brand-sand">Chat with us</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-brand-charcoal p-10 lg:p-16">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Address" name="address" />
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-sand/70">
                  I'm interested in
                </label>
                <select
                  name="interest"
                  defaultValue="Custom Blinds"
                  className="border-b border-brand-gold/25 bg-transparent py-2 text-brand-sand transition-colors focus:border-brand-gold focus:outline-none"
                >
                  {solutions.map((s) => (
                    <option key={s.slug} className="bg-brand-charcoal">
                      {s.name}
                    </option>
                  ))}
                  <option className="bg-brand-charcoal">Not sure yet</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-sand/70">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="border-b border-brand-gold/25 bg-transparent py-2 text-brand-sand transition-colors focus:border-brand-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-brand-gold py-5 text-xs font-bold uppercase tracking-widest text-brand-charcoal transition-colors hover:bg-brand-gold-light disabled:opacity-60"
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
      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-sand/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-brand-gold/25 bg-transparent py-2 text-brand-sand transition-colors focus:border-brand-gold focus:outline-none"
      />
    </div>
  );
}
