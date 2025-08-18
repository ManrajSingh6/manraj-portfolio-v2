import type { JSX } from "react";

function Badge({ badge }: { badge: string }): JSX.Element {
  return (
    <span
      key={badge}
      className="inline-block rounded-full px-2 py-1 text-xs
                     bg-app-bg/50 text-primary-text ring-1 ring-aqua/30
                     hover:ring-aqua/60 transition"
    >
      {badge}
    </span>
  );
}

export function BadgeContainer({
  badges,
}: {
  badges: readonly string[];
}): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge, idx) => (
        <Badge key={idx} badge={badge} />
      ))}
    </div>
  );
}
