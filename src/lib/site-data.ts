import productAluwood from "@/assets/product-aluwood.jpg";
import productPlaswood from "@/assets/plaswood.jpg";
import productHoneycomb from "@/assets/honeycomb.jpg";
import productVenetian from "@/assets/venetian.jpg";
import productVeritcal from "@/assets/vertical.jpg";
import productWood from "@/assets/wood.jpg";
import productOutdoorRoller from "@/assets/outdoor_rollerblinds.jpg";
import productRoman from "@/assets/roman.jpg";
import productRoller from "@/assets/rollerblinds-product.jpg";
import productDoubleRoller from "@/assets/double-roller.jpg";

import blindsCover from "@/assets/hero-interior.jpg";
import shuttersImg from "@/assets/Shutters.png";
import curtainsImg from "@/assets/curtains.png";
import awningImg from "@/assets/Awning.png";
import outdoorRollerImg from "@/assets/Outdoor roller.png";
import tintingImg from "@/assets/tinting.png";
import frostedImg from "@/assets/frosted glass.png";
import securityGateImg from "@/assets/security gate.png";
import safetyDoorImg from "@/assets/Safety door.png";
import steelRoofImg from "@/assets/Steel roof .png";
import furnitureImg from "@/assets/outdoor furniture .png";

export const navLinks = [
  { hash: "#home", label: "Home" },
  { hash: "#about", label: "About" },
  { hash: "#solutions", label: "Solutions" },
  { hash: "#services", label: "Services" },
  { hash: "#testimonials", label: "Testimonials" },
  { hash: "#contact", label: "Contact" },
] as const;

export const contactInfo = {
  email: "admin@openblindsmpu.co.za ",
  phone: "079 670 8077 / 071 580 4323",
  whatsapp: "https://wa.me/27728029022",
  facebook:
    "https://www.facebook.com/profile.php?id=61563113017635&mibextid=LQQJ4d",
  instagram:
    "https://www.instagram.com/open_blinds_mbombela?igsh=aGdyNzFtM3kybHJ6&utm_source=qr",
};

export type Solution = {
  slug: string;
  name: string;
  tag: string;
  img: string;
  blurb: string;
  anchor?: string;
};

export const solutions: Solution[] = [
  {
    slug: "blinds",
    name: "Custom Blinds",
    tag: "10 ranges",
    img: blindsCover,
    blurb:
      "Our signature offering — from Aluwood and Plaswood to Honeycomb, Venetian, Roller and Roman. Custom-measured for every window in your home.",
    anchor: "#blinds-range",
  },
  {
    slug: "shutters",
    name: "Premium Plantation Shutters",
    tag: "Timeless",
    img: shuttersImg,
    blurb:
      "Timeless elegance, superior light control and lasting value. Custom-made to fit your windows perfectly, complementing both modern and classic interiors.",
  },
  {
    slug: "curtains",
    name: "Premium Curtains",
    tag: "Made to measure",
    img: curtainsImg,
    blurb:
      "Custom-made curtains that bring warmth, elegance and comfort. Soft sheers, blockouts and everything between — tailored in a wide range of fabrics and textures.",
  },
  {
    slug: "awnings",
    name: "Retractable Awnings",
    tag: "Outdoor comfort",
    img: awningImg,
    blurb:
      "Instant shade for your patio or entertainment area. Weather-resistant fabrics on durable aluminium — extend or retract whenever you need protection from sun or light rain.",
  },
  {
    slug: "outdoor-rollers",
    name: "Outdoor Roller Blinds",
    tag: "All-weather",
    img: outdoorRollerImg,
    blurb:
      "Transform your patio, deck, lapa or braai area. Built for the South African climate — sun, wind, glare and light rain protection while keeping your view.",
  },
  {
    slug: "tinting",
    name: "Frosted Glass & Tinting",
    tag: "Privacy & UV",
    img: tintingImg,
    blurb:
      "Professional frosting and tinting films for homes, offices, bathrooms and shopfronts. Reduce heat, glare and UV — or add decorative privacy and branding.",
  },
  {
    slug: "steelworks",
    name: "Steel Security & Steelworks",
    tag: "Custom fabricated",
    img: securityGateImg,
    blurb:
      "Custom security gates, security doors, sliding driveway gates and bespoke steelwork. Strong physical protection, finished to architectural standards.",
  },
  {
    slug: "furniture",
    name: "Recycled Plastic Furniture",
    tag: "Sustainable",
    img: furnitureImg,
    blurb:
      "Benches, tables and outdoor sets made from recycled plastic. Won't rot, splinter, rust or fade — durable, low-maintenance and environmentally friendly.",
  },
];

export const steelworksGallery = [
  { img: securityGateImg, label: "Sliding driveway gates" },
  { img: safetyDoorImg, label: "Security doors" },
  { img: steelRoofImg, label: "Custom steel structures" },
];

export const products = [
  {
    name: "Aluwood",
    img: productAluwood,
    blurb:
      "Aluminium wood-look blinds in 25mm and 50mm. A cost-effective alternative to timber — ideal for kitchens and bathrooms where moisture would damage real wood.",
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
      "Horizontal slats in wood or metal on ladder cords. Easily adjusted for light and privacy, and simple to raise and lower.",
  },
  {
    name: "Vertical",
    img: productVeritcal,
    blurb:
      "A headrail and vertical louvres that draw across the window on cords, and tilt for precise control of light and view.",
  },
  {
    name: "Wooden",
    img: productWood,
    blurb:
      "Timeless horizontal wooden slats suspended on cords, tilted to control light and visibility — a warm, versatile window covering.",
  },
  {
    name: "Outdoor Roller",
    img: productOutdoorRoller,
    blurb:
      "Sheerweave fabric that preserves the view while blocking UV, glare and rain — up to 88–95% wind and rain protection.",
  },
  {
    name: "Roller",
    img: productRoller,
    blurb:
      "A single piece of fabric wrapped around a casing that fits inside or outside the window recess. Clean, simple, versatile.",
  },
  {
    name: "Double Roller",
    img: productDoubleRoller,
    blurb:
      "One set of brackets, two independent roller blinds — dim the sun during the day and secure privacy at night.",
  },
  {
    name: "Roman",
    img: productRoman,
    blurb:
      "Fabric that folds up in a soft concertina as the blind opens. A stylish, sumptuous finish that coordinates with your décor.",
  },
];

export const services = [
  {
    n: "01",
    title: "Free Quote",
    body: "A free, no-obligation quote for your window treatments. We assess your space, understand your preferences and provide an accurate estimate.",
  },
  {
    n: "02",
    title: "Free Installation",
    body: "Professional installation included on every order. Our expert installers handle every detail for a perfect fit and seamless finish.",
  },
  {
    n: "03",
    title: "Custom Manufacturing",
    body: "Blinds, shutters, curtains and steelworks tailored to your exact measurements and style. Wide range of materials, colours and designs.",
  },
  {
    n: "04",
    title: "Design Consultation",
    body: "Not sure what you need? Book a consultation with our experts and we'll guide you to the best solution for your space.",
  },
];

export const testimonials = [
  {
    quote:
      "We recently worked with JC of Open Blinds for new blinds at our Mozambique lodge and are thrilled with the results. Professionalism with a personal touch — from consultation to installation. The blinds transformed our rooms with better light control and privacy, much appreciated by our guests.",
    name: "Marno Van Eijk",
  },
  {
    quote:
      "JC installed new blinds in our home and we couldn't be happier. The quality and final outcome exceeded our expectations. Punctual, knowledgeable and attentive — with valuable suggestions that enhanced the overall look of our interiors.",
    name: "Pieter Coetzee",
  },
  {
    quote:
      "I'm thrilled with the exceptional service I received from JC. He installed my new blinds with precision and care — a perfect fit and smooth operation. His professionalism and friendly demeanour made the entire process seamless. Highly recommended!",
    name: "Nadia Van Eijk",
  },
  {
    quote:
      "JC installed new blinds and roller blinds in my home and I couldn't be more satisfied. Professional, attentive, with excellent recommendations. The installation was seamless and the results are fantastic.",
    name: "Alicia Lombard",
  },
  {
    quote:
      "Quick responses, friendly communication and quick quoting — a real refresher. They stick to their promised times and made sure installation happened on time too. Neat and clean work. Will definitely use them again and refer friends.",
    name: "Angelique Potgieter",
  },
  {
    quote:
      "Fantastic service, very helpful and delivered within the timeframe. Great quality products! Would recommend them every time!",
    name: "Charlene Coetzee",
  },
];
