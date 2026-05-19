import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/layout";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Open Blinds" },
      {
        name: "description",
        content:
          "Read what Open Blinds clients across Cape Town, Stellenbosch, and Durbanville say about our craftsmanship and service.",
      },
      { property: "og:title", content: "Client Testimonials — Open Blinds" },
      {
        property: "og:description",
        content: "Kind words from clients across the Western Cape.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h1 className="font-serif text-4xl text-brand-sand lg:text-5xl">
            Kind words from clients
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-t border-brand-gold/25 pt-8"
            >
              <blockquote className="font-serif text-xl leading-snug text-brand-sand">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest text-brand-gold">
                {t.name} — {t.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
