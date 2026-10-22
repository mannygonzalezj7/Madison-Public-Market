import type { Metadata } from "next";
import {
  EventsHero,
  RentEventSpaceSection,
  UpcomingEventsSection,
} from "@/components/events/EventsSections";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { eventsPageMeta } from "@/content/events";

export const metadata: Metadata = {
  title: eventsPageMeta.title,
  description: eventsPageMeta.description,
};

export default function EventsPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-secondary focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <EventsHero />
        <UpcomingEventsSection />
        <RentEventSpaceSection />
      </main>
      <SiteFooter />
    </>
  );
}
