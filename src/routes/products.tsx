import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/layout";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Open Blinds" },
      {
        name: "description",
        content:
          "Explore our range: Aluwood, Plaswood, Honeycomb, and Venetian blinds — custom engineered for every space.",
      },
      { property: "og:title", content: "Our Blinds Collection — Open Blinds" },
      {
        property: "og:description",
        content:
          "Aluwood, Plaswood, Honeycomb, and Venetian blinds — custom-fitted to your windows.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <SectionEyebrow>Products</SectionEyebrow>
            <h1 className="font-serif text-4xl text-brand-sand lg:text-5xl">
              The Collection
            </h1>
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
              <h2 className="mb-2 font-serif text-xl text-brand-sand">{p.name}</h2>
              <p className="text-sm leading-relaxed text-brand-sand/60">{p.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
