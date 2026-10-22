type AccentBarProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  /** Skip the yellow segment so bars stay visible on yellow backgrounds */
  onYellow?: boolean;
};

export function AccentBar({
  className = "",
  orientation = "horizontal",
  onYellow = false,
}: AccentBarProps) {
  const isVertical = orientation === "vertical";
  const thickness = "var(--mpm-accent-thickness)";
  const gap = "var(--mpm-accent-gap)";
  const segmentStyle = isVertical
    ? { width: thickness, flex: 1 }
    : { height: thickness, flex: 1 };

  return (
    <div
      className={
        isVertical
          ? `flex shrink-0 flex-col self-stretch ${className}`
          : `flex w-[242px] max-w-full items-stretch ${className}`
      }
      style={{
        width: isVertical ? thickness : undefined,
        height: isVertical ? undefined : thickness,
        gap,
      }}
      aria-hidden="true"
    >
      <span className="bg-primary" style={segmentStyle} />
      {onYellow ? null : <span className="bg-yellow" style={segmentStyle} />}
      <span className="bg-accent" style={segmentStyle} />
    </div>
  );
}
