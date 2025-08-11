import type { JSX } from "react";
import { formatDate } from "../utils/date";
import { Badge } from "./badge";

export interface ExperienceEntry {
  readonly position: {
    readonly title: string;
    readonly startDate: Date;
    readonly endDate?: Date;
    readonly description: string;
  };
  readonly company: {
    readonly name: string;
    readonly url?: string;
  };
  readonly badges: readonly string[];
}

interface ExperienceCardProps {
  readonly experience: ExperienceEntry;
}

export function ExperienceCard({
  experience,
}: ExperienceCardProps): JSX.Element {
  const { position, company, badges } = experience;

  return (
    <div className="max-w-3xl text-primary-text flex flex-col space-y-2 p-4 md:p-6 border-b border-aqua/20 hover:border-aqua/40 transition">
      <div className="flex items-center justify-between">
        <p className="inline-flex items-center tracking-wide">
          <span className="font-semibold">{position.title}</span>
          <span aria-hidden="true" className="mx-2 text-aqua/70 font-semibold">
            ·
          </span>
          <a
            href={company.url}
            className={`font-medium text-aqua underline-offset-4 ${
              company.url ? "hover:underline" : ""
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/50 rounded-sm `}
          >
            {company.name}
          </a>
        </p>
        <p className="uppercase text-xs sm:text-sm text-aqua">
          {formatDate(position.startDate)} -{" "}
          {position.endDate ? formatDate(position.endDate) : "Present"}
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
