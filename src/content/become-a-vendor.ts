/**
 * Become a Vendor — matches live Selling at the Market layout.
 * https://madisonpublicmarket.org/our-merchants/interest/
 */

export const becomeVendorPageMeta = {
  title: "Become a Vendor | Madison Public Market",
  description:
    "Permanent and temporary vending at Madison Public Market — suites, Farmers’ Market booths, weekly kiosks, and more. Submit your interest today.",
} as const;

export const becomeVendorHero = {
  title: "Become a Vendor",
  subtitle: "Permanent and Temporary Vending at Madison Public Market",
  image: {
    src: "/images/home/merchant-bottles.jpg",
    alt: "Glass jars of local products at Madison Public Market",
  },
} as const;

export const becomeVendorIntro = {
  title: "Grow Your Business at Madison Public Market",
  image: {
    src: "/images/merchants/interest-hero.jpg",
    alt: "Vendor booths and shoppers inside Madison Public Market",
  },
  paragraphs: [
    "The Madison Public Market is built on the belief that economic opportunity and community belong to everyone. By emphasizing equity through entrepreneurship, the Market serves as a launching pad for businesses owned and operated by people of color, women, and first-generation immigrants. More than just a place to shop, it is designed to be a vibrant, multicultural gathering space that bridges cultural divides through a shared love of food, art, and craft. Inclusivity is front and center—bringing our city’s rich diversity under one roof where it can be celebrated daily through multicultural artwork, authentic flavors, and handmade goods.",
  ],
  closing:
    "Whether you are a seasoned producer or taking your very first step into retail, there may be a place for your business here. We invite local makers, chefs, and creators to grow alongside us and help build a marketplace that truly reflects the spirit of Madison. Explore the options above and submit the interest form today to get involved.",
} as const;

export const waysToSell = {
  title: "Ways to Sell at the Market",
  items: [
    {
      title: "Permanent Suite (Main Hall)",
      body: "Dedicated retail spaces for established long-term vendors. Note: Suites are extremely limited. Submitting the interest form adds your business to our waitlist for future openings.",
    },
    {
      title: "Madison Public Farmers’ Market Booth",
      body: "Secure an 8ft × 8ft pop-up vendor spot at our Farmers’ Market, taking place every Wednesday from 4:00 PM to 7:00 PM at the TruStage MarketReady Hall. Perfect for growing brands looking to build a loyal local customer base.",
    },
    {
      title: "Weekly Kiosks",
      body: "Flexible, short-term retail options featuring a 6ft × 4ft raised platform available to lease for one week at a time. Kiosk applications will launch later this fall.",
    },
    {
      title: "“Market Within a Market” Product Shelf",
      body: "Have your locally made goods stocked directly inside our curated collective store. Launching at the end of the year, this section features a rotating inventory of regional products. Coming to the market in 2027.",
    },
  ],
} as const;

export const becomeVendorBands = [
  {
    title: "Submit Your Interest Today",
    cta: {
      label: "Merchant/Vendor Interest Form",
      href: "https://airtable.com/app8rkw4mK2Q0mv0G/pag54MRsiTmKdSCsH/form",
      external: true,
    },
  },
  {
    title: "Become a Madison Public Farmers’ Market Vendor",
    cta: { label: "Learn More", href: "/vending-at-farmers-market" },
  },
  {
    title: "Apply for Nov 14 Winter Art Market by Oct 27",
    cta: { label: "Learn More", href: "/artwork/winter-art-market" },
  },
] as const;
