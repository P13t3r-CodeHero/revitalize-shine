import productAluwood from "@/assets/product-aluwood.jpg";
import productPlaswood from "@/assets/product-plaswood.jpg";
import productHoneycomb from "@/assets/product-honeycomb.jpg";
import productVenetian from "@/assets/product-venetian.jpg";

export const navLinks = [
  { hash: "#home", label: "Home" },
  { hash: "#about", label: "About" },
  { hash: "#products", label: "Products" },
  { hash: "#services", label: "Services" },
  { hash: "#testimonials", label: "Testimonials" },
  { hash: "#contact", label: "Contact" },
] as const;

export const contactInfo = {
  address: "Portion 31 of Farm Alkmaar, Mbombela",
  email: "openblinds1@outlook.com",
  phone: "072 802 9022",
  whatsapp: "https://wa.me/27728029022",
  facebook:
    "https://www.facebook.com/profile.php?id=61563113017635&mibextid=LQQJ4d",
  instagram:
    "https://www.instagram.com/open_blinds_mbombela?igsh=aGdyNzFtM3kybHJ6&utm_source=qr",
};

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
    img: productPlaswood,
    blurb:
      "A headrail and vertical louvres that draw across the window on cords, and tilt for precise control of light and view.",
  },
  {
    name: "Wooden",
    img: productAluwood,
    blurb:
      "Timeless horizontal wooden slats suspended on cords, tilted to control light and visibility — a warm, versatile window covering.",
  },
  {
    name: "Outdoor Roller",
    img: productHoneycomb,
    blurb:
      "Sheerweave fabric that preserves the view while blocking UV, glare and rain — up to 88–95% wind and rain protection.",
  },
  {
    name: "Roller",
    img: productVenetian,
    blurb:
      "A single piece of fabric wrapped around a casing that fits inside or outside the window recess. Clean, simple, versatile.",
  },
  {
    name: "Double Roller",
    img: productPlaswood,
    blurb:
      "One set of brackets, two independent roller blinds — dim the sun during the day and secure privacy at night.",
  },
  {
    name: "Roman",
    img: productHoneycomb,
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
    title: "Custom Blinds",
    body: "Blinds tailored to your exact measurements and style. Choose from a wide range of materials, colours and designs.",
  },
  {
    n: "04",
    title: "Design Consultation",
    body: "Not sure what you need? Book a consultation with our design experts and we'll guide you to the best blinds for your space.",
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
