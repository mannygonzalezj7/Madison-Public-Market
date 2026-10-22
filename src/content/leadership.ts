/**
 * Our Leadership — https://madisonpublicmarket.org/our-leadership/
 * Desktop layout from live WP + provided screenshots.
 */

export const leadershipPageMeta = {
  title: "Our Leadership | Madison Public Market",
  description:
    "Overview of Madison Public Market Foundation staff, leadership, and board.",
} as const;

export const leadershipHero = {
  title: "Leadership & Community",
  subtitle:
    "Overview of Madison Public Market Foundation staff, leadership, and board.",
  image: {
    src: "/images/leadership/hero.webp",
    alt: "Madison Public Market exterior with trees and sky",
  },
} as const;

export const foundationStaffIntro = {
  title: "Meet the Foundation Staff",
  paragraphs: [
    "Community is at the center of the Madison Public Market. For nearly two decades, community leaders have been working on bringing the Public Market to Madison. The City of Madison has partnered with the Madison Public Market Foundation to help make our Market a reality.",
    "In May of 2017, the Madison Public Market Foundation, a non-profit 501(c)3 organization, was created to lead the fundraising efforts and community engagement during the Public Market development phase.",
  ],
  logo: {
    src: "/images/leadership/logo-brown-h.webp",
    alt: "Madison Public Market EST. 2026 logo stamp",
  },
} as const;

export const staff = [
  {
    name: "Keisha Harrison",
    role: "Chief Executive Officer",
    accent: "primary" as const,
    paragraphs: [
      "Keisha Harrison is the inaugural CEO of the Madison Public Market Foundation.",
      "A native of Chicago, she is a dynamic leader with extensive experience in project management, strategic planning, and change management, most recently serving as the Executive Director of the historic Indianapolis City Market.",
    ],
    image: {
      src: "/images/leadership/keisha.jpg",
      alt: "Portrait of Keisha Harrison, Chief Executive Officer",
    },
  },
  {
    name: "Steve Sisson",
    role: "Operations Manager",
    accent: "accent" as const,
    paragraphs: [
      "Steve Sisson serves as the Operations Manager for the Madison Public Market, where he is responsible for managing operational services and overseeing the organizations that keep the building running smoothly.",
      "He brings a diverse wealth of local management experience to the role, including nine years working in administration at UW-Madison. Additionally, Steve has honed his leadership and logistical skills by running operations at his childhood summer camp and helping produce local theater productions right here in Madison. His goal is to make the market a welcoming, vibrant space for merchants, vendors and guests alike.",
    ],
    image: {
      src: "/images/leadership/steve.jpg",
      alt: "Portrait of Steve Sisson, Operations Manager",
    },
  },
  {
    name: "Stacey Diehl",
    role: "Event Manager",
    accent: "primary" as const,
    paragraphs: [
      "Stacey serves as the Event Manager for the Madison Public Market, where she supports the planning, coordination, and execution of events and experiences that connect the community with Madison’s local businesses, entrepreneurs, and makers.",
      "With more than a decade of experience in event management, operations, and community engagement, she has planned and executed hundreds of events ranging from nonprofit fundraisers and community celebrations to large-scale public events.",
    ],
    image: {
      src: "/images/leadership/stacey.jpg",
      alt: "Portrait of Stacey Diehl, Event Manager",
    },
  },
  {
    name: "Rachel Figueroa",
    role: "Vendor Relationship Manager",
    accent: "accent" as const,
    paragraphs: [
      "Rachel Figueroa serves as the Vendor Relationship Manager for the Madison Public Market. She coordinates the Madison Public Farmers' Market, and other temporary vending opportunities like our weekly kiosk program. She has 5 years of experience managing the Dane County Farmers' Market.",
      "She is motivated by her passion for our local food system and supporting Wisconsin producers. Before working in markets, Rachel spent time as a researcher supporting potato breeding efforts at the University of Minnesota. She hopes to provide meaningful opportunities for local vendors, and looks forward to contributing to a vibrant marketplace.",
    ],
    image: {
      src: "/images/leadership/rachel.jpg",
      alt: "Portrait of Rachel Figueroa, Vendor Relationship Manager",
    },
  },
] as const;

export const operationalPartners = {
  title: "Operational Partners",
  items: [
    {
      name: "Huffman Keel Partners",
      role: "Construction Management",
      logo: "/images/leadership/huff-keel.webp",
      accent: "primary" as const,
    },
    {
      name: "TrueFinish Edge",
      role: "Custodial Services",
      logo: "/images/leadership/truefinish.png",
      accent: "accent" as const,
    },
    {
      name: "Speak.Studio",
      role: "Advertising Management",
      logo: "/images/leadership/speak.webp",
      accent: "yellow" as const,
    },
    {
      name: "Signal Security",
      role: "Security Services",
      logo: "/images/leadership/signal.webp",
      accent: "primary" as const,
    },
    {
      name: "Elite Builders",
      role: "General Contractor",
      logo: "/images/leadership/elite-builders.jpg",
      accent: "accent" as const,
    },
    {
      name: "Dane County Waste + Renewables",
      role: "Composting Service",
      logo: "/images/leadership/dane-county-waste.png",
      accent: "yellow" as const,
    },
  ],
} as const;

/** Three centered columns matching live board layout */
export const boardColumns = [
  [
    { name: "Nichole Crust", detail: "Director of Entrepreneurship at WEDC" },
    { name: "Matt Koenig", detail: "Thoughtworks" },
    {
      name: "Larry Palm",
      detail: "(Treasurer) Madison Metropolitan School District",
    },
  ],
  [
    {
      name: "Anya Firszt",
      detail: "(President), General Manager, Willy St. Co-op",
    },
    {
      name: "Char Smith",
      detail: "(Vice President), Business Community Manager, MG&E",
    },
    {
      name: "Adam Haen",
      detail: "(Secretary), Small Business Consultant, Mad Llama, LLC.",
    },
  ],
  [
    { name: "Peter Robertson", detail: "Entrepreneur" },
    { name: "Erik Larson", detail: "Center for Community Stewardship" },
  ],
] as const;
