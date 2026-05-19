import productAluwood from "@/assets/product-aluwood.jpg";
import productPlaswood from "@/assets/product-plaswood.jpg";
import productHoneycomb from "@/assets/product-honeycomb.jpg";
import productVenetian from "@/assets/product-venetian.jpg";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export const products = [
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

export const services = [
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

export const testimonials = [
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
