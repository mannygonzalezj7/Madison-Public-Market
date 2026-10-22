/**
 * About page content.
 * Layout/structure: Figma About frame (670:1651)
 * Factual copy: https://madisonpublicmarket.org/about/ (WP wins on facts)
 * Stats / experience cards: from Figma (not on live About page)
 */

export const aboutPageMeta = {
  title: "About Us | Madison Public Market",
  description:
    "Learn more about the Madison Public Market at the corner of First St. & E. Johnson St. — a vibrant, inclusive gathering space fostering equity through entrepreneurship.",
} as const;

export const aboutHero = {
  title: "About Us",
  subtitle: "Learn more about the Madison Public Market",
  image: {
    src: "/images/about/hero.jpg",
    alt: "Shoppers browsing a busy market aisle",
  },
} as const;

export const vision = {
  title: "Our Vision",
  body: "The Madison Public Market is a vibrant, inclusive gathering space, fostering equity through entrepreneurship and celebrating local culture by bringing together diverse foods, handcrafted arts, and traditions. It is a year-round destination for community connection and supporting the growth of new and established businesses. It will feature produce from Wisconsin farms, culturally diverse prepared food, locally made food products and handcrafted arts/crafts. It is a cherished and inclusive community gathering space with art, music, and events that bring people together.",
  media: {
    src: "/images/about/vision-media.png",
    alt: "Market community member speaking in the Main Hall",
  },
} as const;

export const locationBanner = {
  lines: [
    "at the corner of First St. & E.",
    "Johnson St. (at 202 N.",
    "First Street)",
  ],
} as const;

/** Live About “products and experiences” list beside Our Vision */
export const visionOfferings = {
  title: "Madison Public Market offers a variety of products and experiences",
  items: [
    "Freshly Prepared Food",
    "Local wine, beer and alcohol",
    "Clothing",
    "Hair and Body Products",
    "Jewelry",
    "Ice Cream",
    "Yarn",
    "Events and Programming",
    "Mid-Week Market Every Wednesday",
  ],
} as const;

export const pointsOfEntry = {
  title: "Points of Entry",
  items: [
    "106 car parking stalls on site",
    "Bike parking and bicycle station near several entries",
    "Bus stop at the corner of First Street and E. Johnson",
  ],
} as const;

export const learnMore = {
  title: "Learn more about us",
  cards: [
    {
      label: "Leadership Board",
      href: "/our-leadership",
      image: "/images/about/card-leadership.png",
      accent: "primary" as const,
    },
    {
      label: "Guiding Principles",
      href: "/guiding-principles",
      image: "/images/about/card-principles.png",
      accent: "yellow" as const,
    },
    {
      label: "Idea to Reality",
      href: "/history",
      image: "/images/about/card-idea.png",
      accent: "accent" as const,
    },
  ],
  /** Figma “More to Learn” list (supplements WP offerings) */
  features: [
    "Fresh, homegrown produce from local, small-scale farmers",
    "Culturally diverse and convenient prepared food",
    "Temporary merchant space for unique events and pop-up markets",
    "Specialty gifts from local artisans",
    "A gathering place that brings the best of everything South Central Wisconsin offers in one friendly, vibrant place",
  ],
} as const;

export const artwork = {
  title: "Explore featured artwork in the market!",
  cta: { label: "Browse Artwork", href: "/artwork" },
} as const;

/** From Figma Statistics section — not listed on live About page */
export const statistics = [
  { value: "500K+", label: "visitors each year" },
  { value: "$20M", label: "annual economic impact" },
  { value: "130+", label: "local businesses" },
  { value: "$10M", label: "local sales" },
  { value: "100+", label: "jobs" },
  { value: "$3M", label: "community support" },
] as const;

export const equity = {
  title: "Equity Through Entrepreneurship",
  intro:
    "By emphasizing equity through entrepreneurship, the Market is already being embraced as a place in Madison where businesses owned and operated by people of color, women, and first generation immigrants can get their start.",
  callout:
    "Other public markets in communities like Milwaukee, Detroit, Cleveland, Minneapolis, and Philadelphia have assisted thousands of people in achieving financial growth. We know we can accomplish this in Madison too. We've studied these models, visited these incredible markets, and applied their best practices to our local framework.",
  closing:
    "In addition to supporting minority-owned small businesses, the Madison Public Market will truly be a multicultural gathering space. Public Markets are uniquely positioned to bring people together around our common love of food. Unfortunately, in Madison today, we're very disconnected from other cultural communities. Nowhere else in Madison do we have a public space where the diversity that exists in our community can be experienced and appreciated on a daily basis. With inclusivity front and center, the Public Market will feel alive with the sights and sounds of multicultural artwork, food, and handmade goods.",
  image: {
    src: "/images/about/equity-photo.png",
    alt: "Market community gathering with vendors and visitors",
  },
} as const;

export const marketExperience = {
  title: "The Market Experience",
  paragraphs: [
    {
      before: "Coming in 2026 at the corner of ",
      linkText: "First St. & E. Johnson St.",
      linkHref: "/#visit",
      after:
        " (at 202 N. First Street), Madison's brick & mortar public market promises to be an inclusive, bustling marketplace showcasing much of what makes our community so special: locally grown and prepared delicious food, refreshing beverages and handcrafted artwork, jewelry, wearables and collectibles.",
    },
    {
      before: "Our vision is to create a vibrant, year-round public marketplace where new entrepreneurs and long-established Madison favorites will grow their businesses and find success. The Market ",
      linkText: "emphasizes equity through entrepreneurship",
      linkHref: "/about#equity",
      after:
        " and through the innovative MarketReady program, the Public Market is already being embraced as a place in Madison where businesses owned and operated by people of color can get their start.",
    },
  ],
  slides: [
    {
      src: "/images/about/experience-slide.png",
      alt: "Madison Public Market exterior with floral mural",
    },
    {
      src: "/images/hero-exterior.png",
      alt: "Madison Public Market building facade",
    },
  ],
  cards: [
    {
      title: "Vibrant Social Hubs",
      body: "Indoor and outdoor spaces celebrating local food, art, and community.",
      color: "yellow" as const,
    },
    {
      title: "Scenic Parkside Dining",
      body: "Picnic at Burr Jones Field or canoe the Yahara River.",
      color: "accent" as const,
    },
    {
      title: "Urban Transit Gateway",
      body: "Easy access to bike paths, lakes, and the Capitol Square.",
      color: "primary" as const,
    },
  ],
} as const;

export const foundation = {
  title: "Foundation Committees and Workgroups",
  body: "The Madison Public Market Foundation, a non-profit 501(c)3 organization, leads the fundraising efforts and community engagement for the Public Market project. The Foundation manages the day-to-day operations of the Market, oversees vendor selection, handles the employee hiring process, applies for grants, and works closely with the City on the market's ongoing development and design.",
  invite:
    "We encourage those who are interested in getting involved to join one of our workgroups and committees. Please fill out the Community Interest Form to be considered.",
  listTitle: "Madison Public Market Foundation Committees and Workgroups are:",
  /** Prefer live WP committee list for accuracy */
  items: [
    "Madison Public Market Foundation Board of Directors",
    "Arts & Cultural Expression",
    "Executive Committee",
    "Finance Committee",
    "Tenant & Operations Committee",
  ],
} as const;

export const getInvolved = {
  lines: ["Want to get involved?", "Fill out our community interest form!"],
  cta: {
    label: "Get Involved Now",
    href: "https://madisonpublicmarket.org/about/",
  },
} as const;

export const reality = {
  title: "Making it into a reality",
  body: "The Madison Public Market is an essential, win-win step for the region's economic growth that truly deserves the community's support. The Madison Public Market Foundation has approximately $3 million in private support, TID #36 provides $7M in funding, and the Neighborhood Investment Fund Grant provides $4M in additional funding. The City of Madison Common Council's commitment of $4.5 million in additional TID funds, combined with the County's $1.5 million commitment, provides the final funding needed to make the Market a reality. The Foundation continues to raise additional funds and manages the operations of the facility with no financial risk to the City.",
  cards: [
    {
      title: "Economic Development",
      body: "Incubating diverse entrepreneurs and local businesses through low-overhead retail space.",
      accent: "primary" as const,
      icon: "/images/about/icon-econ.png",
    },
    {
      title: "Community Benefit",
      body: "Repurposing a city building into a sustainable, art-filled riverside destination.",
      accent: "accent" as const,
      icon: "/images/about/icon-community.png",
    },
    {
      title: "City Support",
      body: "A community-vetted project backed by over 20 official council resolutions.",
      accent: "yellow" as const,
      icon: "/images/about/icon-city.png",
    },
  ],
} as const;

export const newsletter = {
  title: "Stay in the Loop",
  body: "Sign up below to be updated on our progress bringing you Madison's first Public Market. We only send an email when there is exciting news to share (typically once per month).",
  ctaLabel: "Sign Up",
  href: "http://eepurl.com/glt59P",
} as const;
