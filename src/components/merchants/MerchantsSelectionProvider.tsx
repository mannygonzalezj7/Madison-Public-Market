"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultMapMerchantSlug,
  getMerchantStallIds,
  getMerchantsWithDetails,
  merchantCategories,
  merchants,
  type Merchant,
  type MerchantCategory,
} from "@/content/merchants";
import { marketStalls } from "@/content/market-map";

type MerchantsSelectionContextValue = {
  merchants: Merchant[];
  categories: typeof merchantCategories;
  selectedStallId: string | null;
  selectedMerchant: Merchant | null;
  activeCategory: MerchantCategory | "all";
  searchQuery: string;
  filteredMerchants: Merchant[];
  selectStall: (stallId: string) => void;
  selectMerchant: (slug: string) => void;
  setActiveCategory: (category: MerchantCategory | "all") => void;
  setSearchQuery: (query: string) => void;
};

const MerchantsSelectionContext =
  createContext<MerchantsSelectionContextValue | null>(null);

export function useMerchantsSelection() {
  const context = useContext(MerchantsSelectionContext);
  if (!context) {
    throw new Error(
      "useMerchantsSelection must be used within MerchantsSelectionProvider",
    );
  }
  return context;
}

function findMerchantByStall(stallId: string) {
  return (
    merchants.find((merchant) =>
      getMerchantStallIds(merchant).includes(stallId),
    ) ?? null
  );
}

function findMerchantBySlug(slug: string) {
  return merchants.find((merchant) => merchant.slug === slug) ?? null;
}

export function MerchantsSelectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedStallId, setSelectedStallId] = useState<string | null>(() => {
    const merchant = findMerchantBySlug(defaultMapMerchantSlug);
    return merchant ? (getMerchantStallIds(merchant)[0] ?? null) : null;
  });
  const [selectedMerchantSlug, setSelectedMerchantSlug] = useState<string>(
    defaultMapMerchantSlug,
  );
  const [activeCategory, setActiveCategory] = useState<
    MerchantCategory | "all"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedMerchant = useMemo(() => {
    if (!selectedMerchantSlug) return null;
    return findMerchantBySlug(selectedMerchantSlug) ?? null;
  }, [selectedMerchantSlug]);

  const filteredMerchants = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return merchants.filter((merchant) => {
      const matchesCategory =
        activeCategory === "all" ||
        merchant.categories.includes(activeCategory);
      const matchesQuery =
        !query ||
        merchant.name.toLowerCase().includes(query) ||
        merchant.slug.includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const selectStall = useCallback((stallId: string) => {
    setSelectedStallId(stallId);
    const assigned = findMerchantByStall(stallId);
    if (assigned) {
      setSelectedMerchantSlug(assigned.slug);
    } else {
      setSelectedMerchantSlug("");
    }
  }, []);

  const selectMerchant = useCallback((slug: string) => {
    setSelectedMerchantSlug(slug);
    const merchant = findMerchantBySlug(slug);
    const stallIds = merchant ? getMerchantStallIds(merchant) : [];
    setSelectedStallId(stallIds[0] ?? null);
  }, []);

  const value = useMemo(
    () => ({
      merchants: getMerchantsWithDetails(),
      categories: merchantCategories,
      selectedStallId,
      selectedMerchant,
      activeCategory,
      searchQuery,
      filteredMerchants,
      selectStall,
      selectMerchant,
      setActiveCategory,
      setSearchQuery,
    }),
    [
      activeCategory,
      filteredMerchants,
      searchQuery,
      selectMerchant,
      selectStall,
      selectedMerchant,
      selectedStallId,
    ],
  );

  return (
    <MerchantsSelectionContext.Provider value={value}>
      {children}
    </MerchantsSelectionContext.Provider>
  );
}

export function getAssignedStallIds() {
  return new Set(
    merchants.flatMap((merchant) => getMerchantStallIds(merchant)),
  );
}

export function getStallLabel(stallId: string) {
  return marketStalls.find((stall) => stall.id === stallId)?.id ?? stallId;
}
