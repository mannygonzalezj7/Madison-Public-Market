import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser Supabase client. Homepage content is still static (see CONTENT.md);
 * wire queries here when migrating off hardcoded content.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  return createBrowserClient(url, key);
}
