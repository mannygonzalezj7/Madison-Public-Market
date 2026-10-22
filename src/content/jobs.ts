/**
 * Jobs — https://madisonpublicmarket.org/jobs/
 */

export const jobsPageMeta = {
  title: "Jobs | Madison Public Market",
  description: "Available jobs at the Madison Public Market.",
} as const;

export const jobsHero = {
  title: "Jobs",
  subtitle: "Available jobs at the Madison Public Market",
  image: {
    src: "/images/jobs/hero.jpg",
    alt: "Merchant preparing food at Madison Public Market",
  },
} as const;

export const jobListings = [
  {
    title: "Cleaning Crew",
    employer: "TrueFinish Edge",
    body: "TrueFinish Edge is looking for dependable individuals to join our team at the Madison Public Market!",
    details: [
      "Starting at $17.50/hour",
      "Flexible scheduling; hours vary by market operations",
      "Weekday evenings and weekends as needed",
      "Paid training",
    ],
    logo: "/images/leadership/truefinish.png",
    cta: {
      label: "Email Resume Here",
      href: "mailto:truefinishedge@gmail.com?subject=Cleaning%20Crew%20Application",
    },
  },
  {
    title: "Pizza Kitchen Cook - full time",
    employer: "Cervato Pizza",
    body: "The upcoming merchant, Cervato Pizza, is looking for a full time cook.",
    details: [
      "$15–30/hour",
      "32–40 hours/week",
      "Fast-paced, customer-facing role",
      "Nights and weekends required",
      "Health, dental and vision benefits",
    ],
    logo: "/images/merchants/cards/cervato-pizza.png",
    cta: {
      label: "Fill Out Application here",
      href: "mailto:info@madisonpublicmarket.org?subject=Cervato%20Full%20Time%20Cook",
    },
  },
  {
    title: "Pizza Kitchen Cook - part time",
    employer: "Cervato Pizza",
    body: "The upcoming merchant, Cervato Pizza, is looking for a part time cook.",
    details: [
      "$15–$30/hour",
      "15–30 hours/week",
      "Fast-paced kitchen environment",
      "Food service experience preferred",
      "Employee discount",
    ],
    logo: "/images/merchants/cards/cervato-pizza.png",
    cta: {
      label: "Fill Out Application here",
      href: "mailto:info@madisonpublicmarket.org?subject=Cervato%20Part%20Time%20Cook",
    },
  },
  {
    title: "Store Assistant - part time",
    employer: "Love U Madison",
    body: "We’re looking for someone who is friendly and welcoming, communicative, detail-oriented, reliable and responsible, and comfortable working independently.",
    details: [
      "$15.50–$16.50/hour",
      "5–15 hours/week",
      "Greet and assist customers",
      "Help with stocking and merchandising",
    ],
    logo: "/images/merchants/cards/love-u.webp",
    cta: {
      label: "Email resume or interest Here",
      href: "mailto:loveumadisonstore@gmail.com?subject=Store%20Assistant%20Application",
    },
  },
  {
    title: "Crew Member - part time",
    employer: "Cinn City Smash",
    body: "Cinn City Smash is looking for friendly, dependable crew members to join us at the Madison Public Market!",
    details: [
      "Guaranteed minimum $20/hour including tips",
      "Availability needed: Thursday morning OR evening + Friday daytime",
      "Nights and weekends preferred",
    ],
    logo: "/images/merchants/cards/cinn-city.webp",
    cta: {
      label: "Email resume or interest Here",
      href: "mailto:cinncitysmash@gmail.com?subject=Cinn%20City%20Crew%20Member",
    },
  },
  {
    title: "Plant and Floral Associate - part time",
    employer: "The Greenery",
    body: "The Greenery is looking for a friendly, dependable and enthusiastic part-time associate to join the team!",
    details: [
      "$15–17/hour",
      "10–20 hours/week",
      "Primary schedule Wednesday–Friday 11:00am–7:00pm",
      "Welcome and assist customers; help with simple floral arrangements",
    ],
    logo: "/images/merchants/cards/greenery.webp",
    cta: {
      label: "Email resume Here",
      href: "mailto:thegreenerywi@gmail.com?subject=Greenery%20Plant%20and%20Floral%20Associate",
    },
  },
] as const;
