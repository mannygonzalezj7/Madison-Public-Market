/**
 * Shared content types for static modules + future Supabase rows.
 * Keep field names stable so Cloudflare Workers can swap data sources
 * without rewriting UI components.
 */

export type MediaAsset = {
  src: string;
  alt: string;
};

export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type HoursRow = {
  day: string;
  time: string;
  note?: string;
};

export type HoursBlock = {
  label: string;
  closedNote?: string;
  rows: HoursRow[];
};

export type GettingThereMode = {
  label: string;
  details: string[];
};

export type HomeContent = {
  siteMeta: {
    title: string;
    description: string;
    url: string;
  };
  nav: {
    logo: MediaAsset;
    links: NavLink[];
    donate: { label: string; href: string };
  };
  hero: {
    title: string;
    tagline: string;
    image: MediaAsset;
  };
  visit: {
    title: string;
    location: { label: string; address: string };
    hours: HoursBlock;
    gettingThere: {
      title: string;
      modes: GettingThereMode[];
      parkingNote?: string;
      petsNote?: string;
    };
    map: { embedUrl: string; alt: string };
  };
  dustBanner: {
    title: string;
    body: string;
    image: MediaAsset;
  };
  about: {
    title: string;
    body: string;
    cta: { label: string; href: string };
    image: MediaAsset;
  };
  merchants: {
    title: string;
    body: string;
    directory: { label: string; href: string };
    images: MediaAsset[];
  };
  updates: {
    title: string;
    /** Instagram profile embed — primary Updates experience on live WP */
    instagramPermalink: string;
    /** Optional curated cards (future Supabase `home_updates`) */
    posts: Array<{
      href: string;
      image: string;
      account: string;
      label: string;
    }>;
  };
  footer: {
    logo: MediaAsset;
    links: Array<{ label: string; href: string }>;
    social: Array<{ label: string; href: string }>;
  };
};
