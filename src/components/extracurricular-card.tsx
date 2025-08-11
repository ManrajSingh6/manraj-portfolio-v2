import type { JSX } from "react";
import { formatDate } from "../utils/date";
import { Badge } from "./badge";

export interface ExtracurricularEntry {
  readonly position: {
    readonly title: string;
    readonly description: string;
  };
  readonly event: {
    readonly name: string;
    readonly date: Date;
  };
  readonly badges: readonly string[];
}

interface ExtracurricularCardProps {
  readonly extracurricular: ExtracurricularEntry;
}

export function ExtracurricularCard({
  extracurricular,
}: ExtracurricularCardProps): JSX.Element {
  const { position, event, badges } = extracurricular;

  return (
    <div className="max-w-3xl text-primary-text flex flex-col space-y-2 p-4 md:p-6 border-b border-aqua/20  hover:border-aqua/40 transition">
      <div className="flex items-center justify-between">
        <p className="inline-flex items-center tracking-wide">
          <span className="font-semibold">{position.title}</span>
          <span aria-hidden="true" className="mx-2 text-aqua/70 font-semibold">
            ·
          </span>
          <p
            className={`font-medium text-aqua underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/50 rounded-sm `}
          >
            {event.name}
          </p>
        </p>
        <p className="uppercase text-xs sm:text-sm text-aqua">
          {formatDate(event.date)}
        </p>
      </div>
      <p className="mt-2 text-sm leading-6 text-primary-text/90">
        {position.description}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {badges.map((badge, idx) => (
          <Badge key={idx} badge={badge} />
        ))}
      </div>
    </div>
  );
}
