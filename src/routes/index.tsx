import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import heroInterior from "@/assets/hero-interior.jpg";
import { SectionEyebrow, WhatsAppIcon } from "@/components/site/layout";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group bg-brand-charcoal p-6 transition-colors hover:bg-brand-surface flex flex-col h-full border border-brand-gold/10 rounded-lg"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-md">
                <img
                  src={p.img}
                  alt={`${p.name} blinds`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex flex-col mt-auto">
                <h3 className="mb-2 font-serif text-lg text-brand-sand">{p.name}</h3>
                <p className="text-sm leading-relaxed text-brand-sand/60">{p.blurb}</p>
              </div>
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
              <div className="flex items-start gap-4 border-b border-brand-gold/15 pb-4">
                <span className="font-serif text-2xl text-brand-gold">03</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-sand/60">Address</p>
                  <p className="text-sm text-brand-sand">{contactInfo.address}</p>
                </div>
              </div>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 border-b border-brand-gold/15 pb-4 transition-colors hover:text-brand-gold"
              >
                <span className="font-serif text-2xl text-brand-gold">04</span>
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
