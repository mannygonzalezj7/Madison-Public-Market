"use client";

import { AccentBar } from "@/components/ui/AccentBar";
import { useMerchantsSelection } from "@/components/merchants/MerchantsSelectionProvider";
import type { MerchantCategory } from "@/content/merchants";

export function CategoryFilterSection() {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    categories,
  } = useMerchantsSelection();

  return (
    <section className="bg-surface px-6 py-10 md:px-16 md:py-12">
      <div className="mx-auto flex max-w-[920px] flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-style-primary text-mpm-text">Explore by Category</h2>
          <AccentBar orientation="horizontal" className="w-[98px]" />
        </div>

        <label className="w-full max-w-[485px]">
          <span className="sr-only">Search merchants</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search..."
            className="w-full rounded-full border-none bg-[#d6d1c4] px-8 py-4 font-[family-name:var(--font-body)] text-xl text-mpm-text placeholder:text-mpm-text/80 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
          />
        </label>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <CategoryPill
            label="All"
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          />
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              label={category.label}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id as MerchantCategory)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-w-[146px] px-6 py-3 font-[family-name:var(--font-body)] text-xl uppercase transition ${
        active
          ? "bg-[#d6d1c4] text-mpm-text"
          : "bg-[#a7a0a0] text-mpm-text hover:brightness-95"
      }`}
    >
      {label}
    </button>
  );
}
