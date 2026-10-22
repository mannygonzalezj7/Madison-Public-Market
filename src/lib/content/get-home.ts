import type { HomeContent } from "@/lib/content/types";
import { homeContent as staticHome } from "@/content/home";

/**
 * Homepage content loader.
 *
 * Today: returns static content mirrored from madisonpublicmarket.org.
 * Next: when Supabase env vars are set, fetch rows from:
 *   - site_settings / market_hours
 *   - home_hero, home_about, home_merchants, home_updates
 *   - nav_links / footer_links
 * and merge onto this shape. Safe to call from Server Components on Cloudflare.
 */
export async function getHomeContent(): Promise<HomeContent> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return staticHome;
  }

  try {
    // Lazy import so builds without Supabase env never touch the client.
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();

    // Placeholder queries — tables will be created in a later migration.
    // Until then, any error/empty result falls back to static content.
    const { data: hours, error: hoursError } = await supabase
      .from("market_hours")
      .select("label, closed_note, rows")
      .eq("is_current", true)
      .maybeSingle();

    if (hoursError || !hours) {
      return staticHome;
    }

    return {
      ...staticHome,
      visit: {
        ...staticHome.visit,
        hours: {
          label: hours.label ?? staticHome.visit.hours.label,
          closedNote:
            hours.closed_note ?? staticHome.visit.hours.closedNote,
          rows: (hours.rows as HomeContent["visit"]["hours"]["rows"]) ??
            staticHome.visit.hours.rows,
        },
      },
    };
  } catch {
    return staticHome;
  }
}
