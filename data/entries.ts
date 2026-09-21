export type Field = {
  label: string;
  value: string;
  /** "mono" for stacks, "plain" for roles and notes */
  kind?: "mono" | "plain" | "private";
  /** Renders the value as a link. Never set this for the Smart Onboarding system. */
  href?: string;
};

type Base = {
  id: string; // "001"
  title: string;
  paragraphs: string[];
  notice?: { tag: string; text: string };
  fields: Field[];
  /** Entry 001 only: the data strip and enrollment path */
  strip?: { label: string; value: string }[];
  flow?: { title: string; where: string; items: string[] }[];
};

type Meta = {
  /** Short name for the index rail and mobile menu */
  short: string;
  /** What kind of work this is, shown beside the entry number */
  tag: string;
  /** "feature" gets the full treatment, "compact" a tighter band */
  tier: "feature" | "compact";
  /** One line for the overview list */
  summary: string;
  /** Screenshot of the live site, captured from its public URL */
  shot?: { src: string; alt: string };
};

export type Entry = Base & Meta & { hasLive: boolean };

export const CONTACT_EMAIL = "kelvinchukwuebuka385@gmail.com";

export const CV_PATH = "/cv/Kelvin_Ogodo_CV.pdf";
export const CV_FILENAME = "Kelvin_Ogodo_CV.pdf";

export const GITHUB = "github.com/kelvinogodo";

export const throughline = [
  "I started building in 2020, and most of what I know I taught myself. The foundation came from Listacc Tech Academy, which gave me the basics of programming and a place where learning felt natural. I carried that forward through my studies and graduated from the Federal University of Technology Owerri (FUTO).",
  "What connects the entries below is one instinct: an idea does not stay an idea long once it reaches me, whether it lands as code, a clothing brand, or a trading system built against a real account.",
];

const baseEntries: Base[] = [
  {
    id: "001",
    title: "Identris Systems",
    paragraphs: [
      "Government biometric and smart onboarding infrastructure for Nigerian state programs. The primary build is a biometric enrollment system for the Ebonyi State Local Government Service Commission, covering fingerprint and photo capture across all 13 local government areas of the state. Field hardware runs through SecuGen scanners and Logitech cameras, with Starlink handling connectivity in places standard infrastructure does not reach. Built on React and Node.js, with Supabase, Cloudinary, and Railway running the backend.",
    ],
    notice: {
      tag: "Access",
      text: "This is closed government infrastructure, not public code, which is normal for work like this, so there is no live link for it. What is public is the company's own site.",
    },
    strip: [
      { label: "Coverage", value: "13 local government areas" },
      { label: "Capture", value: "Fingerprint and photo" },
      { label: "Connectivity", value: "Starlink" },
    ],
    flow: [
      { title: "Capture", where: "At the local government area", items: ["SecuGen scanners", "Logitech cameras"] },
      { title: "Connect", where: "Where standard infrastructure does not reach", items: ["Starlink"] },
      { title: "Store", where: "Backend", items: ["Supabase", "Cloudinary", "Railway"] },
    ],
    fields: [
      { label: "Role", value: "Founder, CEO", kind: "plain" },
      { label: "Stack, Smart Onboarding system", value: "React, Node.js, Supabase, Cloudinary, Railway" },
      { label: "Stack, company site", value: "Next.js, TypeScript, Tailwind CSS" },
      { label: "Live, company site", value: "identris.vercel.app", href: "https://identris.vercel.app" },
      { label: "Live, Smart Onboarding system", value: "None. Closed government infrastructure.", kind: "private" },
    ],
  },
  {
    id: "002",
    title: "Nkowa",
    paragraphs: [
      "A fashion brand and its full digital backbone, built by me.",
      "Nkowa exists to bring misunderstood, misconceived, and neglected parts of Igbo culture to light through fashion. That is not a tagline, it is the actual brief behind the brand. I built the brand identity, then the full commerce infrastructure myself: storefront, order and inventory system, and the admin dashboard running the business day to day.",
    ],
    fields: [
      { label: "Role", value: "Founder, and the engineer who shipped it", kind: "plain" },
      { label: "Stack", value: "Next.js, Supabase" },
      { label: "Live", value: "www.nkowaidentity.com", href: "https://www.nkowaidentity.com" },
    ],
  },
  {
    id: "003",
    title: "ESLGSC Government Portal",
    paragraphs: [
      "Frontend for a state government commission's official portal. Public facing commission pages alongside a full role based dashboard, Super Admin, Admin, Media, and Audit roles, each scoped to their own access over employee records, news publishing, and audit trails.",
    ],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Stack", value: "React, Vite, Tailwind CSS, JWT authentication, role based access control" },
      { label: "Live", value: "www.ebonyistatelgsc.com", href: "https://www.ebonyistatelgsc.com" },
    ],
  },
  {
    id: "004",
    title: "Cartly",
    paragraphs: ["An e-commerce storefront built to practice full-stack checkout flows."],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Stack", value: "React, Supabase" },
      { label: "Live", value: "cartly-kohl.vercel.app", href: "https://cartly-kohl.vercel.app" },
    ],
  },
  {
    id: "005",
    title: "CityScout",
    paragraphs: [
      "Full-stack real estate platform for a Nigerian realty business. Public property and blog listings backed by an admin dashboard for managing both.",
    ],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Stack", value: "Next.js, TypeScript, Tailwind CSS, Supabase" },
      { label: "Live", value: "cityscoutrealtors.vercel.app", href: "https://cityscoutrealtors.vercel.app" },
    ],
  },
  {
    id: "006",
    title: "Deriv Trading Bot",
    paragraphs: [
      "An automated trading system for Deriv synthetic indices, run through MT5. Four hour trend and order block detection, fifteen minute fair value gap entries, structural take profit levels, and position sizing that adjusts to volatility rather than staying fixed.",
    ],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Stack", value: "Python, MetaTrader 5" },
      { label: "Live", value: "None. This runs against a trading account, not a browser.", kind: "private" },
    ],
  },
  {
    id: "007",
    title: "Interactive E-Learning Platform",
    paragraphs: ["An interactive e-learning platform with course browsing and lead capture."],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Stack", value: "Next.js, MongoDB" },
      { label: "Live", value: "product-x-six.vercel.app", href: "https://product-x-six.vercel.app" },
    ],
  },
  {
    id: "008",
    title: "Final Year IoT Security System",
    paragraphs: ["A final year IoT security system streaming live video and motion alerts off an ESP32 camera in real time."],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Hardware", value: "ESP32 camera" },
      { label: "Live", value: "finalyearproject-frontend-ten.vercel.app", href: "https://finalyearproject-frontend-ten.vercel.app" },
    ],
  },
  {
    id: "009",
    title: "Hash Lock dApp",
    paragraphs: ["A first blockchain project, a hash lock dApp on Nervos CKB, built to learn the Cell model directly."],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Chain", value: "Nervos CKB" },
      { label: "Live", value: "No live link.", kind: "private" },
    ],
  },
  {
    id: "010",
    title: "Memory Matching Game",
    paragraphs: ["A memory matching game built for the MightyMeld hackathon."],
    fields: [
      { label: "Role", value: "Builder", kind: "plain" },
      { label: "Event", value: "MightyMeld hackathon" },
      { label: "Live", value: "mightymeld-hackathon-delta.vercel.app", href: "https://mightymeld-hackathon-delta.vercel.app" },
    ],
  },
  {
    id: "011",
    title: "NIBE Membership Platform",
    paragraphs: [
      "Full-stack membership platform for the Nigerian Institute for Biomedical Engineering. Member registration, CPD course information, member profiles, referral tracking, and a blog and resource library the institute runs as its own content.",
    ],
    fields: [
      { label: "Role", value: "Builder, frontend and backend", kind: "plain" },
      { label: "Stack", value: "React on the frontend, Node.js and Express on the backend, MongoDB" },
      { label: "Live", value: "biotech-project-frontend.vercel.app", href: "https://biotech-project-frontend.vercel.app" },
    ],
  },
];

const meta: Record<string, Meta> = {
  "001": {
    short: "Identris",
    tag: "Company",
    tier: "feature",
    summary: "Government biometric enrollment and onboarding infrastructure",
    shot: { src: "/shots/identris.jpg", alt: "The Identris Systems company site: a dark green home page headed \"Systems that help your organization scale and stay reliable\"." },
  },
  "002": {
    short: "Nkowa",
    tag: "Brand",
    tier: "feature",
    summary: "A fashion brand and its full commerce backbone",
    shot: { src: "/shots/nkowa.jpg", alt: "The Nkowa storefront: a warm stone page headed \"Wear who you are.\" with a black and white photograph of a weaver." },
  },
  "003": {
    short: "ESLGSC",
    tag: "Client work",
    tier: "feature",
    summary: "State commission portal with a role based dashboard",
    shot: { src: "/shots/eslgsc.jpg", alt: "The Ebonyi State Local Government Service Commission portal home page: a green themed site with the commission name over a photograph of its building, and a staff sign in button." },
  },
  "004": {
    short: "Cartly",
    tag: "Personal build",
    tier: "compact",
    summary: "E-commerce storefront built to practice checkout flows",
    shot: { src: "/shots/cartly.jpg", alt: "The Cartly storefront: a fashion home page with a men's suits banner and a photograph of a man tying a shoe." },
  },
  "005": {
    short: "CityScout",
    tag: "Client work",
    tier: "feature",
    summary: "Real estate listings with an admin dashboard",
    shot: { src: "/shots/cityscout.jpg", alt: "The CityScout Realtors home page: a black hero headed \"Find a home you'll be proud to own\" with a property search bar." },
  },
  "006": {
    short: "Deriv bot",
    tag: "Personal build",
    tier: "feature",
    summary: "Automated trading system for Deriv, run through MT5",
  },
  "007": {
    short: "E-learning",
    tag: "Personal build",
    tier: "compact",
    summary: "E-learning platform with course browsing and lead capture",
    shot: { src: "/shots/elearning.jpg", alt: "The product x e-learning home page headed \"Experience interactive learning. Every lesson counts.\" with a course search bar." },
  },
  "008": {
    short: "IoT security",
    tag: "Final year project",
    tier: "compact",
    summary: "Live video and motion alerts from an ESP32 camera",
    shot: { src: "/shots/iot.jpg", alt: "The CamWatch dashboard for the ESP32-CAM security system: a live feed panel waiting for signal beside evidence snapshots, a monitoring window setting and a sync button." },
  },
  "009": {
    short: "Hash lock",
    tag: "Personal build",
    tier: "compact",
    summary: "A first blockchain project on Nervos CKB",
  },
  "010": {
    short: "Memory game",
    tag: "Hackathon",
    tier: "compact",
    summary: "Memory matching game for the MightyMeld hackathon",
    shot: { src: "/shots/memory.jpg", alt: "The start screen of the memory matching game, with a Play button." },
  },
  "011": {
    short: "NIBE",
    tag: "Client work",
    tier: "feature",
    summary: "Membership platform for the Nigerian Institute for Biomedical Engineering",
    shot: { src: "/shots/nibe.jpg", alt: "The Nigerian Institute for Biomedical Engineering home page, with a laboratory photograph behind the institute's name." },
  },
};

export const entries: Entry[] = baseEntries.map((e) => ({
  ...e,
  ...meta[e.id],
  hasLive: e.fields.some((f) => f.href),
}));
