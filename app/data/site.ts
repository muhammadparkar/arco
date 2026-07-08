// Single source of truth for ARCO Trading & Marketing site content.
// Realistic placeholder data — swap freely without touching components.

export const company = {
  name: "ARCO Trading & Marketing W.L.L.",
  tagline:
    "Importers and distributors of trusted global food and consumer brands across Qatar.",
  motto: "ARCO Delivered.",
  email: "sales@arcoqa.com",
  email2: "fmcgarco@gmail.com",
  phone: "+974 7474 0076",
  phone2: "+974 3040 4668",
  phone3: "+974 5566 9309",
  address: "CR No: 167747 · P.O. Box 38708 · Doha, Qatar",
  website: "www.arcoqa.com",
  hours: "Sun–Thu · 07:00–17:00 AST",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Range", href: "/#range" },
  { label: "Brands", href: "/#brands" },
  { label: "Markets", href: "/#markets" },
  { label: "Process", href: "/#process" },
];

export type Pillar = {
  id: string;
  href: string;
  title: string;
  copy: string;
  accent: "green" | "red" | "gold";
};

export const pillars: Pillar[] = [
  {
    id: "food",
    href: "/#range",
    title: "Retail FMCG",
    copy: "Cereals, spreads, confectionery, waters and beverages from 40+ global names — the highest-rotation shelves, one supplier.",
    accent: "red",
  },
  {
    id: "chilled",
    href: "/#range",
    title: "Dairy & Chilled",
    copy: "Baladna fresh dairy daily, Puck and Lurpak from Europe — a cold chain that holds temperature from port to shelf.",
    accent: "green",
  },
  {
    id: "household",
    href: "/#range",
    title: "Food Service & Catering",
    copy: "Sugar sticks, 3.8L sauces, 18L oils, barista milks and disposables — HoReCa formats hotels and kitchens actually order.",
    accent: "gold",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 212, suffix: "+", label: "SKUs in catalogue" },
  { value: 40, suffix: "+", label: "Partner brands" },
  { value: 25, suffix: "+", label: "Origin countries" },
  { value: 24, suffix: "h", label: "Doha delivery" },
];

export const featured = {
  slug: "nutella-hazelnut-spread-750gm",
  badge: "Bestseller",
  name: "Nutella Hazelnut Spread 750g",
  copy: "The jar every breakfast shelf needs — German production, relentless rotation. Also carried in 3kg food-service tubs for dessert kitchens and bakeries.",
  bullets: [
    "750g × 12 per carton",
    "3kg tubs for HoReCa",
    "Nutella Ferrero biscuits too",
    "Long shelf life",
    "Next-day Doha delivery",
    "Case or pallet",
  ],
  price: "750g × 12",
  unit: "per carton · trade pricing on request",
};

export type Market = {
  country: string;
  region: string;
  lines: string;
  note: string;
  photo: string; // key into ../data/photos
};

export const markets: Market[] = [
  {
    country: "Europe",
    region: "UK · Belgium · Italy · Germany · Denmark · Spain",
    lines: "80+ lines",
    note: "Kellogg's, McVitie's, Nutella, Lotus, Kinder, Lurpak, San Pellegrino, Evian, Twinings — weekly consolidation.",
    photo: "containerPort",
  },
  {
    country: "GCC & Levant",
    region: "Qatar · KSA · Kuwait · Oman · Lebanon · Jordan",
    lines: "70+ lines",
    note: "Baladna dairy, Rayyan water, Kinza, KDD, Al Kanater, local spices, flour and eggs — short chains, daily chilled.",
    photo: "spicesMarket",
  },
  {
    country: "Americas",
    region: "USA · Canada · Brazil · Peru",
    lines: "35+ lines",
    note: "American Garden, Tabasco, Frank's RedHot, maple syrup, Brazilian coffee beans and Peruvian quinoa.",
    photo: "coffeeBeans",
  },
  {
    country: "Asia & Oceania",
    region: "India · Malaysia · Vietnam · Japan · Australia · NZ",
    lines: "30+ lines",
    note: "Amul ghee, panko and tempura, jasmine rice, tofu, SIS sugar, Anchor dairy — pan-Asian pantry staples.",
    photo: "freshProduce",
  },
];

export type Spotlight = {
  name: string;
  blurb: string;
  plate: string;
  specs: { label: string; value: string }[];
  terms: string;
  category: string;
};

export const spotlights: Spotlight[] = [
  {
    name: "Baladna",
    blurb: "Qatar's dairy — fresh milk, laban, yoghurt, labneh and cheeses.",
    plate: "Cold Chain",
    specs: [
      { label: "Category", value: "Dairy & Chilled" },
      { label: "Origin", value: "Qatar" },
      { label: "SKUs carried", value: "15+" },
      { label: "Lead time", value: "Daily · chilled" },
    ],
    terms: "Crate & case",
    category: "Dairy & Chilled",
  },
  {
    name: "Kellogg's",
    blurb: "Corn flakes and granola from the UK and Poland.",
    plate: "Since 1906",
    specs: [
      { label: "Category", value: "Breakfast & Biscuits" },
      { label: "Origin", value: "UK · Poland" },
      { label: "SKUs carried", value: "6+" },
      { label: "Lead time", value: "In stock · 24h" },
    ],
    terms: "Case & pallet",
    category: "Breakfast & Biscuits",
  },
  {
    name: "Red Bull",
    blurb: "Full energy range — Regular, Sugar Free and the Editions.",
    plate: "5 Variants",
    specs: [
      { label: "Category", value: "Water & Beverages" },
      { label: "Origin", value: "Switzerland" },
      { label: "SKUs carried", value: "5" },
      { label: "Lead time", value: "In stock · 24h" },
    ],
    terms: "24-can cartons",
    category: "Water & Beverages",
  },
  {
    name: "American Garden",
    blurb: "US mayonnaise, peanut butter and pickles in HoReCa sizes.",
    plate: "HoReCa",
    specs: [
      { label: "Category", value: "Spreads & Condiments" },
      { label: "Origin", value: "USA" },
      { label: "SKUs carried", value: "6+" },
      { label: "Lead time", value: "In stock · 24h" },
    ],
    terms: "Jar to 3.78kg",
    category: "Spreads & Condiments",
  },
];

export const story = {
  eyebrow: "Since 2010 · Doha",
  title: "A trading house built on trust",
  copy: [
    "ARCO Trading & Marketing W.L.L. started as a small Doha trading house and grew into a distribution partner serving supermarkets, groceries, hotels and food-service operators across Qatar.",
    "We pair global names with strong regional brands, giving retailers a single supplier for their highest-rotation categories — backed by merchandising, in-store activation and marketing that keeps product moving off the shelf.",
  ],
  stats: [
    { value: "2010", label: "Founded" },
    { value: "500+", label: "Partners" },
    { value: "24h", label: "Doha delivery" },
  ],
};

export type Service = { icon: string; title: string; copy: string };

export const services: Service[] = [
  {
    icon: "ship",
    title: "Import & Clearance",
    copy: "Consolidation, customs and food-safety compliance handled in-house — goods land shelf-ready.",
  },
  {
    icon: "warehouse",
    title: "Ambient & Chilled Storage",
    copy: "Temperature-mapped warehousing in Doha with FEFO stock rotation on every line.",
  },
  {
    icon: "megaphone",
    title: "Merchandising & Activation",
    copy: "Planograms, in-store displays and social campaigns that earn the second facing.",
  },
  {
    icon: "truck",
    title: "Last-Mile Delivery",
    copy: "Next-day across Doha, scheduled routes nationwide — ambient and refrigerated fleets.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Source",
    copy: "Partnerships with global and regional manufacturers, ranges selected for the Qatari market.",
  },
  {
    n: "02",
    title: "Import",
    copy: "Consolidated shipping, customs clearance and Qatari food-safety certification handled end to end.",
  },
  {
    n: "03",
    title: "Warehouse",
    copy: "Ambient and chilled storage in Doha with live stock counts and FEFO rotation.",
  },
  {
    n: "04",
    title: "Deliver",
    copy: "Next-day delivery across Doha and scheduled routes to every municipality in Qatar.",
  },
];

export const partnerCta = {
  eyebrow: "For retailers & manufacturers",
  title: "Put ARCO on your shelf",
  copy: "Wholesale pricing, reliable cold-chain logistics and a dedicated account manager — or full market entry for brands new to Qatar.",
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "ARCO turned three suppliers into one. Cereals, chocolate and crisps arrive on the same truck, next morning, every time.",
    name: "Yousef Al-Marri",
    role: "Purchasing Manager · Doha supermarket group",
    initials: "YM",
  },
  {
    quote:
      "The chilled deliveries never miss. Laban and milk hit our cafeterias before 7am — temperature logged, no shortages during peak season.",
    name: "Priya Nair",
    role: "F&B Procurement · Hotel West Bay",
    initials: "PN",
  },
  {
    quote:
      "As a small grocery, we get the same trade terms and the same account manager as the big chains. The merchandising support moves product.",
    name: "Hassan Karim",
    role: "Owner · Al Sadd Grocery",
    initials: "HK",
  },
];

export const faqs = [
  {
    q: "What is the minimum order?",
    a: "One case per SKU for ambient lines, one crate for chilled. Mixed cases are available on most confectionery and snack ranges — ask your account manager.",
  },
  {
    q: "Where do you deliver?",
    a: "Next-day across greater Doha, with scheduled weekly routes to every municipality in Qatar. Chilled lines run on refrigerated vehicles with temperature logging.",
  },
  {
    q: "How do trade prices work?",
    a: "Trade pricing is tiered by monthly volume and category mix. Request a quote with your expected volumes and we return a full price list within one working day.",
  },
  {
    q: "I'm a manufacturer — can ARCO launch my brand in Qatar?",
    a: "Yes. We offer full market entry: import and registration, warehousing, retail placement, merchandising and social marketing. Send us your catalogue via the quote form.",
  },
];

export const productInterests = [
  "Sugar & Essentials",
  "Oils & Ghee",
  "Dairy & Chilled",
  "Water & Beverages",
  "Spreads & Condiments",
  "Breakfast & Biscuits",
  "Snacks & Confectionery",
  "Tea & Coffee",
  "Spices & Nuts",
];
