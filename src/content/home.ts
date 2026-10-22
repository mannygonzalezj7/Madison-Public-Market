/**
 * Homepage content — mirrored from https://madisonpublicmarket.org/ (Oct 2026).
 * Static until Supabase tables are wired; see src/lib/content/get-home.ts + CONTENT.md.
 */

import type { HomeContent } from "@/lib/content/types";

export const homeContent: HomeContent = {
  siteMeta: {
    title: "Madison Public Market | Local Food & Artisan Merchants",
    description:
      "Madison Public Market is a year-round indoor market at 202 N. First St. featuring Wisconsin produce, local food, and handcrafted goods from small businesses.",
    url: "https://madisonpublicmarket.org",
  },
  nav: {
    logo: {
      src: "/images/logo-square.webp",
      alt: "Madison Public Market square logo with MSN PM text and a star icon in teal and orange",
    },
    links: [
      {
        label: "About",
        href: "/about",
        children: [
          { label: "About us", href: "/about" },
          { label: "Our Leadership", href: "/our-leadership" },
          { label: "Download App", href: "/download" },
        ],
      },
      {
        label: "Merchants",
        href: "/merchants",
        children: [
          { label: "Main Hall Merchants", href: "/merchants" },
          { label: "Become a Vendor", href: "/merchants/interest" },
          { label: "Coming Soon", href: "/coming-soon" },
        ],
      },
      {
        label: "Artwork",
        href: "/artwork",
        children: [
          { label: "Market Artwork", href: "/artwork" },
          {
            label: "First Street Art Gallery",
            href: "/artwork/first-street-gallery",
          },
          { label: "Winter Art Market", href: "/artwork/winter-art-market" },
        ],
      },
      { label: "Events", href: "/events" },
      { label: "Jobs", href: "/jobs" },
    ],
    donate: {
      label: "Donate",
      href: "/donate",
    },
  },
  hero: {
    title: "Madison Public Market",
    tagline: "Your Market.\nHere Now.",
    image: {
      src: "/images/home/hero.jpg",
      alt: "Madison Public Market exterior with floral mural and illuminated building signage",
    },
  },
  visit: {
    title: "Visit MPM",
    location: {
      label: "Location",
      address: "202 N First St\nMadison, WI 53704",
    },
    hours: {
      label: "FALL HOURS (Starting Oct 14)",
      closedNote: "CLOSED ON MONDAYS AND TUESDAYS",
      rows: [
        {
          day: "Wed",
          time: "5:00pm - 9:00pm",
          note: "Farmers' Market 4:00pm-7:00pm",
        },
        { day: "Thurs", time: "5:00pm - 9:00pm" },
        { day: "Fri", time: "5:00pm - 9:00pm" },
        { day: "Sat", time: "10:00am - 8:00pm" },
        { day: "Sun", time: "10:00am - 7:00pm" },
      ],
    },
    gettingThere: {
      title: "Getting There",
      modes: [
        {
          label: "Bicycle",
          details: [
            "Bike corral off Johnson St",
            "BCycle Station (Madison Public Market @ First St)",
          ],
        },
        {
          label: "Bus",
          details: ["Access from A, B and D Metro Routes"],
        },
        {
          label: "Car",
          details: [
            "FREE onsite parking lot (106 spaces)",
            "Free street parking where available",
          ],
        },
      ],
      petsNote: "NO PETS: Trained service animals only",
    },
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.5!2d-89.3687!3d43.0936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880653ef1b12db8f%3A0xa8585caf077a7e84!2sMadison%20Public%20Market!5e0!3m2!1sen!2sus!4v1784671875518!5m2!1sen!2sus",
      alt: "Map showing Madison Public Market near First and East Johnson Streets",
    },
  },
  dustBanner: {
    title: "pardon our dust!",
    body: "New Merchants continue to sign leases and start construction!",
    image: {
      src: "/images/home/pardon-dust.webp",
      alt: "Construction and build-out activity at Madison Public Market",
    },
  },
  about: {
    title: "About US",
    body: "Located at the corner of First and East Johnson Streets, the Madison Public Market is a vibrant, year-round community hub celebrating regional food, art, and culture. A partnership between the City of Madison and the Madison Public Market Foundation, this project transforms a former municipal building into an inclusive marketplace anchored by 28 permanent merchants. Beyond these full-time shops, the market empowers startup entrepreneurs and minority-owned businesses by offering flexible temporary vending spaces and rotating pop-up markets. Visitors can explore a bustling Main Hall filled with diverse prepared foods and handcrafted retail, alongside a dedicated event space for community gatherings.",
    cta: {
      label: "Learn About the Market",
      href: "/about",
    },
    image: {
      src: "/images/home/about-hall.jpg",
      alt: "Exterior of TruStage MarketReady Hall featuring a rainbow portrait mural",
    },
  },
  merchants: {
    title: "Merchants",
    body: "The Madison Public Market strives to be a celebration of diversity filled with local food, beverage and retail merchants from a variety of cultural backgrounds offering a unique array of cuisines and products.",
    directory: {
      label: "Merchant Directory",
      href: "/merchants",
    },
    images: [
      {
        src: "/images/home/merchant-bottles.jpg",
        alt: "Shelf display of assorted bottled products for sale",
      },
      {
        src: "/images/home/merchant-prep.webp",
        alt: "Overhead view of hands preparing food at a market stall",
      },
      {
        src: "/images/home/merchant-burger.webp",
        alt: "Cheeseburger and fries served on a plate",
      },
      {
        src: "/images/home/merchant-empanada.webp",
        alt: "Empanada served on a plate with dipping sauce",
      },
    ],
  },
  updates: {
    title: "Updates",
    instagramPermalink:
      "https://www.instagram.com/madpublicmarket/?utm_source=ig_embed&utm_campaign=loading",
    posts: [
      {
        href: "https://www.instagram.com/madpublicmarket/",
        image: "/images/updates/pop-up.png",
        account: "@madpublicmarket",
        label: "Madison Public Market pop-up update",
      },
      {
        href: "https://www.instagram.com/madpublicmarket/",
        image: "/images/updates/fortune-favors.png",
        account: "@madpublicmarket",
        label: "Fortune Favors at the market",
      },
      {
        href: "https://www.instagram.com/madpublicmarket/",
        image: "/images/updates/art-girls.png",
        account: "@madpublicmarket",
        label: "Art at Madison Public Market",
      },
      {
        href: "https://www.instagram.com/madpublicmarket/",
        image: "/images/updates/dinner-movie.png",
        account: "@madpublicmarket",
        label: "Dinner and a Movie at the market",
      },
    ],
  },
  footer: {
    logo: {
      src: "/images/logo-brown.png",
      alt: "Madison Public Market brown logo",
    },
    links: [
      { label: "Give", href: "/donate" },
      {
        label: "Sign Up For Updates",
        href: "http://eepurl.com/glt59P",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
    social: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/madpublicmarket/?hl=en",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/Friendsofthemadisonpublicmarket/",
      },
    ],
  },
};

/** Back-compat named exports used across the app */
export const siteMeta = homeContent.siteMeta;
export const nav = homeContent.nav;
export const hero = homeContent.hero;
export const visit = homeContent.visit;
export const about = homeContent.about;
export const merchants = homeContent.merchants;
export const updates = homeContent.updates;
export const footer = homeContent.footer;
export const dustBanner = homeContent.dustBanner;
