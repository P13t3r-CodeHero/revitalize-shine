import { createFileRoute, Link } from "@tanstack/react-router";
import heroInterior from "@/assets/hero-interior.jpg";

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
    <section className="px-6 pb-24 pt-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-8">
        <div className="col-span-12 lg:col-span-5">
          <p className="mb-6 text-xs uppercase tracking-widest text-brand-gold">
            Custom window blinds — South Africa
          </p>
          <h1 className="mb-8 font-serif text-6xl leading-[0.9] text-brand-sand lg:text-8xl">
            Shade up your{" "}
            <span className="italic text-brand-gold">windows.</span>
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
            <Link
              to="/contact"
              className="bg-brand-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-charcoal transition-colors hover:bg-brand-gold-light"
            >
              Request Free Quote
            </Link>
            <Link
              to="/products"
              className="border border-brand-gold/40 px-8 py-4 text-xs font-bold uppercase tracking-widest text-brand-sand transition-colors hover:bg-brand-gold/10"
            >
              Explore Products
            </Link>
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
