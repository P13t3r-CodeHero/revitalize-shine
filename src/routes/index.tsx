import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroInterior from "@/assets/hero-interior.jpg";
import { SectionEyebrow } from "@/components/site/layout";
import { products, services, testimonials, contactInfo } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Open Blinds — Custom Window Blinds, Free Installation" },
      {
        name: "description",
        content:
          "Premium custom window blinds in South Africa. Aluwood, Plaswood, Honeycomb & Venetian — free quotes and free installation.",
      },
      { property: "og:title", content: "Open Blinds — Shade up your windows" },
      {
        property: "og:description",
        content:
          "Premium South African craftsmanship. Custom-fitted blinds with free professional installation.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <Testimonials />
      <Contact />
      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.87 11.87 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44zM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.77.99 1-3.67-.22-.38a9.4 9.4 0 0 1-1.44-5.02c0-5.19 4.22-9.41 9.42-9.41 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.76 6.66c0 5.19-4.22 9.41-9.26 9.58zm5.16-7.05c-.28-.14-1.67-.83-1.93-.92-.26-.09-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.4-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.02.14.19 2 3.05 4.85 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33z"/>
        </svg>
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
            Custom window blinds — South Africa
          </p>
          <h1 className="mb-8 font-serif text-6xl leading-[0.9] text-brand-sand lg:text-8xl">
            Shade up your <span className="italic text-brand-gold">windows.</span>
          </h1>
          <p className="mb-10 max-w-md text-lg text-brand-sand/65">
            Premium South African craftsmanship meets architectural precision.
            Elevate your interior with custom-fitted window solutions.
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
              href="#products"
              className="border border-brand-gold/40 px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-sand transition-colors hover:bg-brand-gold/10"
            >
              Explore Products
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
            Welcome to Open Blinds, where we set the highest standards in the window
            blinds industry, with a commitment to exceptional service at our core.
            Our meticulous craftsmanship has earned us a reputation as a leading
            blinds installer.
          </p>
          <p>
            We are your trusted partners in transforming your home. Our high-quality
            products and personalised approach guarantee the perfect solution for
            your needs. With free quotes and installation, we make the process
            seamless.
          </p>
          <p className="border-l-2 border-brand-gold pl-6 font-serif text-xl italic text-brand-gold-light">
            Precision in every slat.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <SectionEyebrow>Products</SectionEyebrow>
            <h2 className="font-serif text-4xl text-brand-sand lg:text-5xl">
              The Collection
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-brand-gold/20 md:block" />
          <span className="hidden font-serif text-xl italic text-brand-gold md:inline">
            Custom engineered for every space
          </span>
        </div>
        <div className="grid grid-cols-1 gap-px border border-brand-gold/15 bg-brand-gold/15 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.name}
              className="group bg-brand-charcoal p-8 transition-colors hover:bg-brand-surface"
            >
              <div className="mb-6 aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} blinds`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mb-2 font-serif text-xl text-brand-sand">{p.name}</h3>
              <p className="text-sm leading-relaxed text-brand-sand/60">{p.blurb}</p>
            </article>
          ))}
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
        <div className="grid grid-cols-1 gap-px border border-brand-gold/15 bg-brand-gold/15 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="bg-brand-surface p-10">
              <span className="font-serif text-3xl text-brand-gold">{s.n}</span>
              <h3 className="mb-4 mt-4 font-serif text-2xl text-brand-sand">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-sand/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="font-serif text-4xl text-brand-sand lg:text-5xl">
            Kind words from clients
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-brand-gold/25 pt-8">
              <blockquote className="font-serif text-xl leading-snug text-brand-sand">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest text-brand-gold">
                {t.name}
              </figcaption>
            </figure>
          ))}
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
            <div className="space-y-4">
              {services.map((s) => (
                <div
                  key={s.n}
                  className="flex items-center gap-4 border-b border-brand-gold/15 pb-4"
                >
                  <span className="font-serif text-2xl text-brand-gold">{s.n}</span>
                  <p className="text-sm uppercase tracking-widest text-brand-sand">
                    {s.title}
                  </p>
                </div>
              ))}
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
                  Blind Type Interested In
                </label>
                <select
                  name="blind_type"
                  defaultValue="Aluwood"
                  className="border-b border-brand-gold/25 bg-transparent py-2 text-brand-sand transition-colors focus:border-brand-gold focus:outline-none"
                >
                  {products.map((p) => (
                    <option key={p.name} className="bg-brand-charcoal">
                      {p.name}
                    </option>
                  ))}
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
