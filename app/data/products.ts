// Real catalogue extract — ARCO Trading & Marketing W.L.L. product list.
// The full list runs 212+ SKUs; this is a representative cut per category.

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  origin: string;
  packing: string; // e.g. "500GM × 20"
  unit: string; // trade unit: CTN / BOX / PKT / CASE / PCS
  description: string;
  tags: string[];
};

export const categories = [
  "Sugar & Essentials",
  "Oils & Ghee",
  "Dairy & Chilled",
  "Water & Beverages",
  "Spreads & Condiments",
  "Breakfast & Biscuits",
  "Snacks & Confectionery",
  "Tea & Coffee",
  "Spices & Nuts",
] as const;

export const brands = [
  { name: "Kellogg's", blurb: "Corn flakes and granola shipped weekly from the UK and Poland." },
  { name: "Baladna", blurb: "Qatar's own dairy — fresh milk, laban, cheeses on a daily chilled loop." },
  { name: "Puck", blurb: "Whipping and cooking creams for kitchens and cafés." },
  { name: "Lurpak", blurb: "Danish butter, the pastry-section standard." },
  { name: "Philadelphia", blurb: "Cream cheese in retail and 1.65kg food-service formats." },
  { name: "Nutella", blurb: "Hazelnut spread from 750g jars to 3kg food-service tubs." },
  { name: "Lotus Biscoff", blurb: "Biscuits and spread from Belgium." },
  { name: "Red Bull", blurb: "Full energy-drink range including editions." },
  { name: "San Pellegrino", blurb: "Italian sparkling water in glass, by the case." },
  { name: "Evian", blurb: "French natural mineral water." },
  { name: "Kinza", blurb: "Cola and flavours from Saudi Arabia, 30-can cartons." },
  { name: "KDD", blurb: "Kuwaiti creams and ice-cream cones." },
  { name: "American Garden", blurb: "US mayonnaise, peanut butter and pickles in HoReCa sizes." },
  { name: "Tabasco", blurb: "Pepper sauces in 72-bottle food-service cartons." },
  { name: "Oreo", blurb: "The world's favourite cookie." },
  { name: "Kinder", blurb: "Bueno, Schoko-Bons and chocolate bars." },
  { name: "Twinings", blurb: "Loose-leaf tins — English Breakfast, Earl Grey, Gunpowder." },
  { name: "Nescafé", blurb: "Classic, Red Mug and Dolce Gusto capsules." },
  { name: "Amul", blurb: "Indian ghee and butter, The Taste of India." },
  { name: "Alpro", blurb: "Barista oat, almond, soya and coconut for coffee bars." },
];

export const products: Product[] = [
  // — Sugar & Essentials —
  {
    slug: "white-sugar-sticks-5gm",
    name: "White Sugar Sticks 5g",
    brand: "ARCO Food Service",
    category: "Sugar & Essentials",
    origin: "UAE",
    packing: "1000 PCS",
    unit: "BOX",
    description:
      "Single-serve 5g sugar sticks for hotels, cafés and catering. Also available in brown sugar and sachet formats, and Sweet'N Low 100s.",
    tags: ["horeca"],
  },
  {
    slug: "sis-white-sugar-1kg",
    name: "SIS White Sugar 1kg",
    brand: "SIS",
    category: "Sugar & Essentials",
    origin: "Australia",
    packing: "1KG",
    unit: "PKT",
    description:
      "Premium Australian white sugar in retail packs. Brown sugar variant available. Bulk 2kg and 50kg bags also carried.",
    tags: ["retail"],
  },
  {
    slug: "qfm-patent-flour-5kg",
    name: "QFM Patent Flour All Purpose 5kg",
    brand: "QFM",
    category: "Sugar & Essentials",
    origin: "Qatar",
    packing: "5KG × 2",
    unit: "OTR",
    description:
      "Qatar Flour Mills all-purpose patent flour. 1kg × 10 retail format also stocked, alongside Blossom jasmine rice and fresh local eggs.",
    tags: ["local"],
  },
  {
    slug: "fresh-brown-eggs-30x12",
    name: "Fresh Brown Eggs Large 30×12 Tray",
    brand: "ARCO Food Service",
    category: "Sugar & Essentials",
    origin: "Qatar",
    packing: "30 PCS × 12 TRAY",
    unit: "CRTN",
    description:
      "Qatari free-range fresh eggs by the carton. White eggs and imported Iranian/Indian trays also available.",
    tags: ["local", "horeca"],
  },

  // — Oils & Ghee —
  {
    slug: "sunflower-oil-5l",
    name: "Sunflower Oil 5L",
    brand: "ARCO Food Service",
    category: "Oils & Ghee",
    origin: "Qatar",
    packing: "5LTR × 4",
    unit: "CTN",
    description:
      "Locally packed sunflower oil for kitchens and retail. Corn oil, vegetable oil 18L tins and shortening also carried.",
    tags: ["local", "horeca"],
  },
  {
    slug: "amul-ghee-pure-1l",
    name: "Amul Pure Ghee 1L",
    brand: "Amul",
    category: "Oils & Ghee",
    origin: "India",
    packing: "1LTR × 12",
    unit: "CRTN",
    description:
      "The Taste of India — pure cow ghee in 1L tins. RKG classic ghee 500g and QBB pure ghee also stocked.",
    tags: ["bestseller"],
  },
  {
    slug: "mantova-evoo-spray-250ml",
    name: "Mantova EVOO Chili Spray 250ml",
    brand: "Mantova",
    category: "Oils & Ghee",
    origin: "Italy",
    packing: "250ML",
    unit: "PCS",
    description:
      "Extra-virgin olive oil spray, chilli flavoured — precise portioning for professional kitchens.",
    tags: ["horeca"],
  },

  // — Dairy & Chilled —
  {
    slug: "baladna-fresh-milk-2l",
    name: "Baladna Fresh Milk 2L",
    brand: "Baladna",
    category: "Dairy & Chilled",
    origin: "Qatar",
    packing: "2LTR × 9",
    unit: "PCS",
    description:
      "Qatar's fresh dairy, delivered on a daily chilled loop. Full Baladna range carried: laban, yoghurt, labneh, halloumi, feta, mozzarella and long-life lines.",
    tags: ["local", "chilled", "bestseller"],
  },
  {
    slug: "puck-whipping-cream-1l",
    name: "Puck Whipping Cream 1L",
    brand: "Puck",
    category: "Dairy & Chilled",
    origin: "Belgium",
    packing: "1LTR × 12",
    unit: "PCS",
    description:
      "Kitchen-standard whipping cream. Puck spray cream and organic cream cheese jars also stocked.",
    tags: ["horeca", "chilled"],
  },
  {
    slug: "philadelphia-cream-cheese-1-65kg",
    name: "Philadelphia Cream Cheese 1.65kg",
    brand: "Philadelphia",
    category: "Dairy & Chilled",
    origin: "Switzerland",
    packing: "1.65KG × 4",
    unit: "PCS",
    description:
      "Food-service tub for bakeries and dessert kitchens. 500g retail format also available.",
    tags: ["horeca", "chilled"],
  },
  {
    slug: "lurpak-butter-unsalted-500gm",
    name: "Lurpak Unsalted Butter 500g",
    brand: "Lurpak",
    category: "Dairy & Chilled",
    origin: "Denmark",
    packing: "500GM × 20",
    unit: "CRTN",
    description:
      "Danish unsalted butter — the pastry-section standard. Anchor, Amul frozen and Mazzarty local butter also carried.",
    tags: ["chilled"],
  },
  {
    slug: "kdd-vanilla-cream-1l",
    name: "KDD Vanilla Cream 1L",
    brand: "KDD",
    category: "Dairy & Chilled",
    origin: "Kuwait",
    packing: "1LTR × 12",
    unit: "BOX",
    description:
      "Kuwaiti dessert cream in vanilla and chocolate. KDD ice-cream cones in 25s and 1000s for food service.",
    tags: [],
  },

  // — Water & Beverages —
  {
    slug: "san-pellegrino-500ml",
    name: "San Pellegrino Sparkling 500ml",
    brand: "San Pellegrino",
    category: "Water & Beverages",
    origin: "Italy",
    packing: "500ML × 24",
    unit: "CASE",
    description:
      "Italian sparkling mineral water. 1L glass format for tables; Perrier, Highland, Fiji artesian and Evian also carried.",
    tags: ["horeca"],
  },
  {
    slug: "evian-natural-330ml",
    name: "Evian Natural Mineral Water 330ml",
    brand: "Evian",
    category: "Water & Beverages",
    origin: "France",
    packing: "330ML × 24",
    unit: "CASE",
    description: "French natural mineral water in café-size bottles.",
    tags: [],
  },
  {
    slug: "rayyan-natural-water-330ml",
    name: "Rayyan Natural Water 330ml",
    brand: "Rayyan",
    category: "Water & Beverages",
    origin: "Qatar",
    packing: "330ML × 24",
    unit: "CASE",
    description: "Qatar's local natural water — offices, events and food service.",
    tags: ["local", "bulk"],
  },
  {
    slug: "red-bull-regular-250ml",
    name: "Red Bull Energy Drink 250ml",
    brand: "Red Bull",
    category: "Water & Beverages",
    origin: "Switzerland",
    packing: "250ML × 24",
    unit: "CTN",
    description:
      "Full range carried: Regular, Sugar Free, Coconut, Blueberry and Watermelon editions.",
    tags: ["bestseller"],
  },
  {
    slug: "kinza-cola-250ml",
    name: "Kinza Cola Can 250ml",
    brand: "Kinza",
    category: "Water & Beverages",
    origin: "Saudi Arabia",
    packing: "250ML × 30",
    unit: "CTN",
    description:
      "GCC cola in 30-can cartons. Lemon, orange and diet variants; Double Up carbonated drinks from Qatar too.",
    tags: [],
  },
  {
    slug: "alpro-barista-oat-1l",
    name: "Alpro Barista Oat 1L",
    brand: "Alpro",
    category: "Water & Beverages",
    origin: "Belgium",
    packing: "1LTR × 8",
    unit: "CRTN",
    description:
      "Barista-grade oat drink that stretches and pours. Almond, soya, coconut plus the Oatly barista range also stocked.",
    tags: ["horeca"],
  },

  // — Spreads & Condiments —
  {
    slug: "nutella-hazelnut-spread-750gm",
    name: "Nutella Hazelnut Spread 750g",
    brand: "Nutella",
    category: "Spreads & Condiments",
    origin: "Germany",
    packing: "750GM × 12",
    unit: "PCS",
    description:
      "The jar every breakfast shelf needs — plus 3kg food-service tubs for dessert kitchens.",
    tags: ["bestseller"],
  },
  {
    slug: "lotus-biscoff-spread-400gm",
    name: "Lotus Biscoff Spread 400g",
    brand: "Lotus Biscoff",
    category: "Spreads & Condiments",
    origin: "Belgium",
    packing: "400GM × 12",
    unit: "PCS",
    description: "Caramelised biscuit spread; Biscoff biscuits 250g also carried.",
    tags: [],
  },
  {
    slug: "american-garden-mayonnaise-3-78kg",
    name: "American Garden US Mayonnaise 3.78kg",
    brand: "American Garden",
    category: "Spreads & Condiments",
    origin: "USA",
    packing: "3.78KG × 4",
    unit: "PCS",
    description:
      "HoReCa-size US mayonnaise. Peanut butter, pickles and 887ml retail jars in the same range.",
    tags: ["horeca"],
  },
  {
    slug: "tabasco-pepper-sauce-60ml",
    name: "Tabasco Pepper Sauce 60ml",
    brand: "Tabasco",
    category: "Spreads & Condiments",
    origin: "USA",
    packing: "60ML × 72",
    unit: "CTN",
    description:
      "Original and jalapeño green in table bottles. Frank's RedHot 3.8L jugs for wings kitchens.",
    tags: ["horeca"],
  },
  {
    slug: "al-kanater-tahina-800gm",
    name: "Al Kanater Tahina 800g",
    brand: "Al Kanater",
    category: "Spreads & Condiments",
    origin: "Lebanon",
    packing: "800GM × 12",
    unit: "PCS",
    description: "Lebanese tahina since 1877; plain halawa 800g in the same line.",
    tags: [],
  },

  // — Breakfast & Biscuits —
  {
    slug: "kelloggs-corn-flakes-750gm",
    name: "Kellogg's Corn Flakes 750g",
    brand: "Kellogg's",
    category: "Breakfast & Biscuits",
    origin: "United Kingdom",
    packing: "750GM × 12",
    unit: "BOX",
    description:
      "Family-size original corn flakes; Kellogg's Granola classic oat clusters from Poland alongside.",
    tags: ["bestseller"],
  },
  {
    slug: "quaker-white-oats-500gm",
    name: "Quaker White Oats 500g",
    brand: "Quaker",
    category: "Breakfast & Biscuits",
    origin: "United Kingdom",
    packing: "500GM × 20",
    unit: "PCH",
    description: "White oats in pouch and tin formats.",
    tags: [],
  },
  {
    slug: "mcvities-digestive-original-500gm",
    name: "McVitie's Digestive Original 500g",
    brand: "McVitie's",
    category: "Breakfast & Biscuits",
    origin: "United Kingdom",
    packing: "500GM × 20",
    unit: "BOX",
    description: "The original digestive, plus the Light variant.",
    tags: [],
  },
  {
    slug: "maple-joe-canada-maple-syrup-1l",
    name: "Canada Maple Syrup 1L",
    brand: "Maple Joe",
    category: "Breakfast & Biscuits",
    origin: "Canada",
    packing: "1LTR × 6",
    unit: "BTL",
    description: "Canadian maple syrup, standard and organic.",
    tags: [],
  },

  // — Snacks & Confectionery —
  {
    slug: "doritos-nacho-cheese-180gm",
    name: "Doritos Nacho Cheese 180g",
    brand: "Doritos",
    category: "Snacks & Confectionery",
    origin: "KSA / USA / India",
    packing: "Various sizes",
    unit: "PKT",
    description:
      "Nacho cheese and sweet chilli pepper. Master kettle chips, Batato's and Oman chips also carried.",
    tags: [],
  },
  {
    slug: "oreo-original-biscuit",
    name: "Oreo Original Biscuit",
    brand: "Oreo",
    category: "Snacks & Confectionery",
    origin: "Bahrain",
    packing: "Value pack XXL",
    unit: "BOX",
    description: "The world's favourite cookie, regional production.",
    tags: ["bestseller"],
  },
  {
    slug: "kinder-bueno-43gm",
    name: "Kinder Bueno Wafer 43g",
    brand: "Kinder",
    category: "Snacks & Confectionery",
    origin: "Italy",
    packing: "43GM × 30",
    unit: "OTR",
    description:
      "Front-of-till essential. Kinder Chocolate, Maxi bars and Schoko-Bons in the same range.",
    tags: [],
  },
  {
    slug: "ferrero-rocher-300gm",
    name: "Ferrero Rocher Praline 300g",
    brand: "Ferrero",
    category: "Snacks & Confectionery",
    origin: "Italy",
    packing: "300GM",
    unit: "PCS",
    description: "Gifting staple; KitKat, Galaxy and Cadbury Flake alongside.",
    tags: [],
  },

  // — Tea & Coffee —
  {
    slug: "lipton-yellow-label-200gm",
    name: "Lipton Yellow Label 100 Bags",
    brand: "Lipton",
    category: "Tea & Coffee",
    origin: "UAE",
    packing: "200GM × 12",
    unit: "OTR",
    description:
      "Yellow Label sachets in 25s and 100s; green tea pure and mint variants.",
    tags: ["bestseller"],
  },
  {
    slug: "twinings-english-breakfast-200gm",
    name: "Twinings English Breakfast Tin 200g",
    brand: "Twinings",
    category: "Tea & Coffee",
    origin: "United Kingdom",
    packing: "200GM × 12",
    unit: "PCS",
    description: "Loose-leaf tins: English Breakfast, Goldline Earl Grey, Gunpowder green.",
    tags: [],
  },
  {
    slug: "nescafe-classic-190gm",
    name: "Nescafé Classic 190g",
    brand: "Nescafé",
    category: "Tea & Coffee",
    origin: "Spain",
    packing: "190GM × 6",
    unit: "BOX",
    description:
      "Classic and Red Mug jars; Dolce Gusto espresso, americano and cappuccino capsules.",
    tags: [],
  },
  {
    slug: "cafe-vero-arabica-extra-1kg",
    name: "Café Vero Arabica Extra 1kg",
    brand: "Café Vero",
    category: "Tea & Coffee",
    origin: "Italy",
    packing: "1KG × 10",
    unit: "PCS",
    description:
      "Italian arabica in black, red and green profiles. Brazilian roasted and speciality beans by the kilo too.",
    tags: ["horeca"],
  },

  // — Spices & Nuts —
  {
    slug: "garam-masala-powder-1kg",
    name: "Garam Masala Powder 1kg",
    brand: "ARCO Spices",
    category: "Spices & Nuts",
    origin: "Qatar",
    packing: "1KG × 12",
    unit: "PKT",
    description:
      "Locally packed spice line: chilli, turmeric, black pepper, chaat masala, madras curry, sambar and more.",
    tags: ["local"],
  },
  {
    slug: "kashmiri-chilli-powder-1kg",
    name: "Kashmiri Chilli Powder 1kg",
    brand: "ARCO Spices",
    category: "Spices & Nuts",
    origin: "Qatar",
    packing: "1KG × 12",
    unit: "PKT",
    description: "Colour-rich Kashmiri chilli for restaurant kitchens.",
    tags: ["local", "horeca"],
  },
  {
    slug: "cashew-nuts-1kg",
    name: "Cashew Nuts 1kg",
    brand: "ARCO Nuts",
    category: "Spices & Nuts",
    origin: "India",
    packing: "1KG",
    unit: "PKT",
    description:
      "Kilo packs across the nut wall: almonds whole/sliced/powder, pistachios, walnuts, pecans, hazelnuts, dry figs.",
    tags: [],
  },
  {
    slug: "pistachio-whole-1kg",
    name: "Pistachio Whole 1kg",
    brand: "ARCO Nuts",
    category: "Spices & Nuts",
    origin: "UAE",
    packing: "1KG",
    unit: "PKT",
    description: "Whole, sliced, powder and in-shell pistachio formats.",
    tags: [],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
