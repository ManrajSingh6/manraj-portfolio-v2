import type { JSX } from "react";

export function Badge({ badge }: { badge: string }): JSX.Element {
  return (
    <span
      key={badge}
      className="inline-block rounded-full px-2 py-1 text-xs
                     bg-deep-blue/50 text-text-light ring-1 ring-aqua/30
                     hover:ring-aqua/60 transition"
    >
      {badge}
    </span>
  );
}
