import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Open Blinds" },
      {
        name: "description",
        content:
          "Open Blinds is a South African blinds installer known for meticulous craftsmanship, honest pricing, and free professional installation.",
      },
      { property: "og:title", content: "About Open Blinds" },
      {
        property: "og:description",
        content:
          "Meticulous craftsmanship and a personalised approach — your trusted partner in transforming your home.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-4">
          <SectionEyebrow>About</SectionEyebrow>
          <h1 className="font-serif text-4xl leading-tight text-brand-sand lg:text-5xl">
            Innovation meets{" "}
            <span className="italic text-brand-gold">excellence.</span>
          </h1>
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
