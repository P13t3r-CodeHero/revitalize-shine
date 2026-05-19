import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SectionEyebrow } from "@/components/site/layout";
import { products, services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Open Blinds" },
      {
        name: "description",
        content:
          "Book a free professional measurement and consultation with Open Blinds. We handle everything from advice to final installation.",
      },
      { property: "og:title", content: "Contact Open Blinds — Free Quote" },
      {
        property: "og:description",
        content:
          "Request a free quote and consultation for custom window blinds in South Africa.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="font-serif text-4xl text-brand-sand lg:text-5xl">
            Ready to transform your light?
          </h1>
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
