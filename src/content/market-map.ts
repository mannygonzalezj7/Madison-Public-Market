/**
 * Market hall stall coordinates from the Marketspread floor plan (960×540).
 * Positions are in image pixel space for an SVG overlay that shares the same viewBox.
 */

export type MarketStall = {
  id: string;
  /** Left edge in floor-plan pixels (0–960) */
  x: number;
  /** Top edge in floor-plan pixels (0–540) */
  y: number;
  w: number;
  h: number;
  kiosk: boolean;
};

export const marketMapMeta = {
  floorPlan: {
    src: "/images/merchants/floor-plan.jpg",
    alt: "TruStage Marketplace Hall floor plan with labeled merchant stalls",
    width: 960,
    height: 540,
  },
} as const;

/** Stall hotspots aligned to floor-plan.jpg (parsed from market-map.svg). */
export const marketStalls: MarketStall[] = [
  { id: "100", x: 215.16, y: 191.1, w: 100, h: 107.39, kiosk: false },
  { id: "210", x: 313.05, y: 212.42, w: 31.03, h: 41.87, kiosk: false },
  { id: "220", x: 314.04, y: 254.78, w: 31.53, h: 46.31, kiosk: false },
  { id: "230", x: 314.74, y: 297.82, w: 31.53, h: 46.31, kiosk: false },
  { id: "240", x: 268.01, y: 297.85, w: 44.33, h: 45.32, kiosk: false },
  { id: "310", x: 364.78, y: 212.92, w: 31.03, h: 41.87, kiosk: false },
  { id: "320", x: 365.69, y: 298.98, w: 31.03, h: 45.32, kiosk: false },
  { id: "410", x: 367.73, y: 125.23, w: 74.38, h: 41.87, kiosk: false },
  { id: "420", x: 368.23, y: 168.08, w: 74.38, h: 23.65, kiosk: false },
  { id: "430", x: 396.31, y: 212.42, w: 45.32, h: 41.87, kiosk: false },
  { id: "440", x: 363.79, y: 256.26, w: 76.85, h: 44.33, kiosk: false },
  { id: "450", x: 396.02, y: 298.06, w: 46.31, h: 45.81, kiosk: false },
  { id: "460", x: 367.73, y: 383.78, w: 74.38, h: 27.09, kiosk: false },
  { id: "470", x: 368.44, y: 409.81, w: 74.38, h: 59.61, kiosk: false },
  { id: "510", x: 473.15, y: 126.21, w: 85.71, h: 38.92, kiosk: false },
  { id: "520", x: 473.15, y: 167.1, w: 85.71, h: 24.63, kiosk: false },
  { id: "530", x: 472.66, y: 212.91, w: 65.02, h: 21.67, kiosk: false },
  { id: "540", x: 473.15, y: 237.05, w: 31.53, h: 42.86, kiosk: false },
  { id: "550", x: 473.65, y: 281.36, w: 31.53, h: 42.86, kiosk: false },
  { id: "560", x: 471.46, y: 319.81, w: 67, h: 22.66, kiosk: false },
  { id: "570", x: 474.07, y: 382.16, w: 86.21, h: 26.6, kiosk: false },
  { id: "580", x: 474.47, y: 408.83, w: 85.71, h: 61.08, kiosk: false },
  { id: "610", x: 506.16, y: 237.55, w: 31.53, h: 42.86, kiosk: false },
  { id: "620", x: 505.67, y: 281.36, w: 31.53, h: 42.86, kiosk: false },
  { id: "710", x: 557.46, y: 212.42, w: 39.9, h: 42.86, kiosk: false },
  { id: "720", x: 556.97, y: 256.26, w: 39.9, h: 91.13, kiosk: false },
  { id: "810B", x: 578.57, y: 136.56, w: 112.81, h: 55.67, kiosk: false },
  { id: "Artworking", x: 562.23, y: 170.38, w: 37.44, h: 22.17, kiosk: false },
  { id: "810C", x: 557.39, y: 202.07, w: 133.99, h: 9.36, kiosk: false },
  { id: "1", x: 219.97, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "2", x: 244.6, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "3", x: 269.23, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "4", x: 293.86, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "5", x: 318.49, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "6", x: 343.12, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "7", x: 367.75, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "8", x: 392.38, y: 360.33, w: 18.72, h: 12.32, kiosk: true },
  { id: "9", x: 501.68, y: 358.36, w: 18.72, h: 12.32, kiosk: true },
  { id: "10", x: 526.31, y: 358.36, w: 18.72, h: 12.32, kiosk: true },
];
