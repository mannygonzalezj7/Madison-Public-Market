"use client";

import { useMerchantsSelection } from "@/components/merchants/MerchantsSelectionProvider";
import { marketMapMeta, marketStalls } from "@/content/market-map";
import { getMerchantStallIds, merchants } from "@/content/merchants";

const { width: MAP_W, height: MAP_H, src: MAP_SRC, alt: MAP_ALT } =
  marketMapMeta.floorPlan;

export function InteractiveMarketMap() {
  const { selectedStallId, selectStall } = useMerchantsSelection();

  const stallToMerchant = new Map<string, string>();
  for (const merchant of merchants) {
    for (const stallId of getMerchantStallIds(merchant)) {
      if (!stallToMerchant.has(stallId)) {
        stallToMerchant.set(stallId, merchant.slug);
      }
    }
  }

  return (
    <div className="relative w-full max-w-[787px] shrink-0 border-[10px] border-[#323232] bg-secondary shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        role="img"
        aria-label={MAP_ALT}
        className="block h-auto w-full"
      >
        <title>{MAP_ALT}</title>
        <image
          href={MAP_SRC}
          x={0}
          y={0}
          width={MAP_W}
          height={MAP_H}
          preserveAspectRatio="xMidYMid meet"
        />

        {marketStalls.map((stall) => {
          const isSelected = selectedStallId === stall.id;
          const assignedSlug = stallToMerchant.get(stall.id);
          const assignedName = assignedSlug
            ? merchants.find((merchant) => merchant.slug === assignedSlug)
                ?.name
            : undefined;
          const label = assignedName
            ? `${assignedName}, stall ${stall.id}`
            : `Stall ${stall.id}${stall.kiosk ? ", kiosk" : ""}`;

          const fill = isSelected
            ? "rgba(194, 79, 46, 0.72)"
            : stall.kiosk
              ? "rgba(89, 127, 113, 0.35)"
              : assignedSlug
                ? "rgba(194, 79, 46, 0)"
                : "rgba(0, 0, 0, 0)";
          const stroke = isSelected
            ? "#c24f2e"
            : stall.kiosk
              ? "rgba(89, 127, 113, 0.9)"
              : "transparent";

          return (
            <g key={stall.id}>
              <rect
                x={stall.x}
                y={stall.y}
                width={stall.w}
                height={stall.h}
                rx={stall.kiosk ? 2 : 1}
                fill={fill}
                stroke={stroke}
                strokeWidth={isSelected ? 2 : stall.kiosk ? 1 : 0}
                className="cursor-pointer transition-[fill,stroke] duration-150 hover:fill-[rgba(194,79,46,0.4)] focus:outline-none"
                role="button"
                tabIndex={0}
                aria-label={label}
                aria-pressed={isSelected}
                onMouseEnter={() => selectStall(stall.id)}
                onFocus={() => selectStall(stall.id)}
                onClick={() => selectStall(stall.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectStall(stall.id);
                  }
                }}
              >
                <title>{label}</title>
              </rect>

              {isSelected ? (
                <text
                  x={stall.x + stall.w / 2}
                  y={stall.y + stall.h / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="pointer-events-none select-none"
                  fill="#ffffff"
                  fontSize={Math.min(14, Math.max(8, stall.w * 0.28))}
                  fontFamily="var(--font-display), sans-serif"
                  fontWeight={700}
                >
                  {stall.id === "Artworking" ? "AW" : stall.id}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
