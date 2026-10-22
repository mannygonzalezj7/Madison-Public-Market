/**
 * Guiding Principles — Figma 719:3020 + hover variants from Components (596:5369)
 */

export const guidingPrinciplesPageMeta = {
  title: "Guiding Principles | Madison Public Market",
  description:
    "The core values that make Madison Public Market a community home.",
} as const;

export const guidingPrinciplesHero = {
  title: "Guiding Principles",
  subtitle: "The core values that make our market a community home.",
  image: {
    src: "/images/guiding/rooster.png",
    alt: "Madison Public Market rooster brand mark",
  },
} as const;

export type GuidingPrinciple = {
  id: string;
  number: string;
  title: string;
  body: string;
  icon: string;
  /** Icon is a full PNG badge (already includes circle) */
  iconIsBadge?: boolean;
  tone: string;
  numberColor: string;
  border?: string;
  iconCircle?: string;
  layout: {
    /** Desktop bento placement (12-col grid, auto rows) */
    col: string;
    row: string;
    minH: string;
  };
};

export const guidingPrinciples: GuidingPrinciple[] = [
  {
    id: "vendors-first",
    number: "01",
    title: "Vendors First",
    body: "The Public Market is a place of commerce. It succeeds if, and only if, the vendors within it thrive; the design will prioritize the user experience of vendors and visitors to create a functional, inspiring, and enduring market.",
    icon: "/images/guiding/icon-cart.svg",
    tone: "bg-primary",
    numberColor: "text-[#e65b33]",
    iconCircle: "bg-[#f2b59a]",
    layout: { col: "1 / 5", row: "1 / 6", minH: "min-h-[280px] lg:min-h-0" },
  },
  {
    id: "equitably-designed",
    number: "02",
    title: "Equitably Designed",
    body: "The market building and grounds will be designed to be welcoming and inclusive of people from diverse cultures, backgrounds, ages and abilities.",
    icon: "/images/guiding/icon-heart.svg",
    tone: "bg-[linear-gradient(130deg,#fabb1d_12%,#4f9078_86%)]",
    numberColor: "text-[rgba(89,127,113,0.35)]",
    border: "border-[10px] border-accent lg:border-[14px]",
    iconCircle: "bg-accent",
    layout: { col: "5 / 9", row: "1 / 4", minH: "min-h-[220px] lg:min-h-0" },
  },
  {
    id: "budget-driven",
    number: "03",
    title: "Budget Driven",
    body: "The design will maximize value with each decision, use minimal new material. Consider short- and long-term advantages, and account for life-cycle costs.",
    icon: "/images/guiding/icon-budget.png",
    iconIsBadge: true,
    tone: "bg-yellow",
    numberColor: "text-[rgba(128,76,14,0.71)]",
    layout: { col: "9 / 13", row: "1 / 5", minH: "min-h-[260px] lg:min-h-0" },
  },
  {
    id: "beautifully-simple",
    number: "04",
    title: "Beautifully Simple",
    body: "The design will leverage the existing building’s assets to create a modest, beautiful, robust consignor for the vibrant and variable market contents",
    icon: "/images/guiding/icon-simple.png",
    iconIsBadge: true,
    tone: "bg-[linear-gradient(146deg,#5c7f71_19%,#de8b27_108%)]",
    numberColor: "text-yellow",
    border: "border-[8px] border-accent",
    layout: { col: "1 / 5", row: "6 / 11", minH: "min-h-[280px] lg:min-h-0" },
  },
  {
    id: "nourishing",
    number: "05",
    title: "Nourishing",
    body: "The building and grounds will support the wellbeing of our planet, its inhabitants, and the local community, through healthy, sustainable design.",
    icon: "/images/guiding/icon-star.svg",
    tone: "bg-[linear-gradient(-39deg,#de8b27_23%,#fabb1d_97%)]",
    numberColor: "text-[rgba(155,94,21,0.52)]",
    border: "border-[10px] border-[#dc7a0a]",
    iconCircle: "bg-[#9b5e15]",
    layout: { col: "5 / 9", row: "4 / 8", minH: "min-h-[240px] lg:min-h-0" },
  },
  {
    id: "of-its-place",
    number: "06",
    title: "Of Its Place",
    body: "The building and site will reflect the history, culture, and natural beauty of the Isthmus through material choices, views, and connectivity, and reflect its past and future.",
    icon: "/images/guiding/icon-compass.svg",
    tone: "bg-primary",
    numberColor: "text-transparent bg-clip-text bg-gradient-to-b from-[#e65b33] to-[#de8b27]",
    border: "border-[10px] border-secondary",
    iconCircle: "bg-[#e65b33]",
    layout: { col: "9 / 13", row: "5 / 10", minH: "min-h-[280px] lg:min-h-0" },
  },
  {
    id: "functional",
    number: "07",
    title: "Functional",
    body: "Supporting financial success with innovative, nimble, sustainable, intuitive operations.",
    icon: "/images/guiding/icon-pencil.svg",
    iconIsBadge: true,
    tone: "bg-[linear-gradient(127deg,#fabb1d_2%,#5c7f71_85%)]",
    numberColor: "text-[rgba(89,127,113,0.35)]",
    border: "border-[10px] border-[#235d47]",
    layout: { col: "5 / 9", row: "8 / 11", minH: "min-h-[200px] lg:min-h-0" },
  },
  {
    id: "connected",
    number: "08",
    title: "Connected",
    body: "The building and site will reflect the history, culture, and natural beauty of the Isthmus through material choices, views, and connectivity, and reflect its past and future.",
    icon: "/images/guiding/icon-coffee.svg",
    tone: "bg-accent",
    numberColor: "text-[rgba(59,102,85,0.54)]",
    border: "border-[10px] border-[#235d47]",
    iconCircle: "bg-[#3b6655]",
    layout: { col: "9 / 13", row: "10 / 15", minH: "min-h-[280px] lg:min-h-0" },
  },
  {
    id: "adaptable",
    number: "09",
    title: "Adaptable",
    body: "The design will provide daily flexibility, mid-term adaptability and long-term resilience through simplicity, smart planning, and design.",
    icon: "/images/guiding/icon-globe.svg",
    tone: "bg-yellow",
    numberColor: "text-[#e65b33]",
    border: "border-[10px] border-primary",
    iconCircle: "bg-[#f0c48a]",
    layout: { col: "1 / 6", row: "11 / 15", minH: "min-h-[220px] lg:min-h-0" },
  },
  {
    id: "all-season-draw",
    number: "10",
    title: "All-season Draw",
    body: "The design will support and enhance indoor and outdoor experiences for every season.",
    icon: "/images/guiding/icon-globe.svg",
    tone:
      "bg-[linear-gradient(147deg,#ad2904_11%,#c24f2e_36%,#de8a27_70%,#5c7f71_119%)]",
    numberColor: "text-[rgba(222,139,39,0.93)]",
    iconCircle: "bg-[#f0c48a]/80",
    layout: { col: "6 / 9", row: "11 / 15", minH: "min-h-[240px] lg:min-h-0" },
  },
];
