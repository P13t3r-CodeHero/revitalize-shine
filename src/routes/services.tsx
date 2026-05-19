import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/layout";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Open Blinds" },
      {
        name: "description",
        content:
          "Expert consultation, precision measurement, and free professional installation — Open Blinds handles every step.",
      },
      { property: "og:title", content: "Our Services — Open Blinds" },
      {
        property: "og:description",
        content:
          "One team, end to end: consultation, measurement, and free installation included on every order.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <SectionEyebrow>Services</SectionEyebrow>
          <h1 className="font-serif text-4xl text-brand-sand lg:text-5xl">
            One team, <span className="italic text-brand-gold">end to end.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-px border border-brand-gold/15 bg-brand-gold/15 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="bg-brand-surface p-10">
              <span className="font-serif text-3xl text-brand-gold">{s.n}</span>
              <h2 className="mb-4 mt-4 font-serif text-2xl text-brand-sand">
                {s.title}
              </h2>
              <p className="text-sm leading-relaxed text-brand-sand/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
