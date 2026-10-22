/**
 * History / Idea to Reality — Figma 670:1836 + live About facts
 */

export const historyPageMeta = {
  title: "From Idea to Reality | Madison Public Market",
  description:
    "The journey of Madison Public Market — from community vision to a year-round market at 202 N. First Street.",
} as const;

export const historyHero = {
  title: "From Idea to Reality",
  subtitle:
    "A 45,000-square-foot transformed warehouse connecting city transit to scenic trails.",
  image: {
    src: "/images/history/hero.webp",
    alt: "Madison Public Market hall and community space",
  },
} as const;

export const journey = {
  title: "The Journey",
  steps: [
    {
      label: "2000s – 2017",
      title: "Community Vision",
      body: "For nearly two decades, community leaders worked to bring a year-round public market to Madison. In May 2017, the Madison Public Market Foundation was created as a 501(c)3 to lead fundraising and community engagement.",
      accent: "primary" as const,
      align: "left" as const,
    },
    {
      label: "2017 – 2020",
      title: "Partnership & Planning",
      body: "The City of Madison partnered with the Foundation on site selection, design, and funding strategy — including TID support and community engagement.",
      accent: "yellow" as const,
      align: "right" as const,
    },
    {
      label: "2020 – 2024",
      title: "Funding Secured",
      body: "Private support, TID #36, Neighborhood Investment Fund grants, and additional City and County commitments provided the capital needed to advance construction.",
      accent: "accent" as const,
      align: "left" as const,
    },
    {
      label: "2024 – 2026",
      title: "Build & Merchant Selection",
      body: "Construction progressed at the former City Fleet Services building while the Foundation selected permanent merchants and prepared temporary vending programs.",
      accent: "primary" as const,
      align: "right" as const,
    },
    {
      label: "2026",
      title: "Opening Day",
      body: "Madison Public Market opens as a vibrant, year-round hub for food, art, culture, and equity through entrepreneurship.",
      accent: "gradient" as const,
      align: "center" as const,
    },
  ],
} as const;

export const marketLocation = {
  title: "The Market Location",
  intro:
    "Our Madison Public Market is housed in the former City Fleet Services building, located at 202 N. First Street, on the corner of E. Johnson and First Streets. There isn’t a more perfect place to host Madison’s first brick & mortar Public Market.",
  reasonsTitle: "The 202 N. First Street location is ideal for a variety of reasons:",
  reasons: [
    "Fleet building’s 2-story open space floor plan",
    "45,000 square feet",
    "Existing floor to ceiling windows and overhead doors",
    "Connection to neighboring Burr Jones Field, the Yahara River, and multiple bike paths",
    "Served by 220 buses per day",
    "3,500 residents live within walking distance",
  ],
  map: {
    src: "/images/visit-map.png",
    alt: "Map showing Madison Public Market at First and East Johnson Streets",
  },
  interior:
    "Inside, the Fleet Building is a retro, large open space with 45,000 square feet to house 28 permanent vendors, 100+ seasonal/temporary vendors annually, public/private events, a commercial kitchen, floor to ceiling windows, and large garage doors to welcome an open air breeze during warmer months. The Mezzanine separates the MarketReady Hall event space from the Madison Public Market space.",
} as const;

export const historyClosing = {
  titleBefore: "From Idea ",
  titleAfter: "To Reality",
  body: "Inside, the Fleet Building is a retro, large open space with 45,000 square feet to house 28 permanent vendors, 100+ seasonal/temporary vendors annually, public/private events, a commercial kitchen, floor to ceiling windows, and large garage doors to welcome an open air breeze during warmer months.",
} as const;
