import type { JSX } from "react";
import { BadgeContainer } from "./badge";

interface BaseEntryCardProps {
  title: string;
  subtitle: string;
  href?: string;
  dateText: string;
  description: string;
  badges: readonly string[];
}

export function BaseEntryCard({
  title,
  subtitle,
  href,
  dateText,
  description,
  badges,
}: BaseEntryCardProps): JSX.Element {
  return (
    <div className="max-w-4xl text-primary-text flex flex-col space-y-2 p-4 md:p-6 border-b border-aqua/20 hover:border-aqua/40 transition">
      <div className="flex items-center justify-between">
        <p className="inline-flex items-center tracking-wide">
          <span className="font-semibold">{title}</span>
          <span aria-hidden="true" className="mx-2 text-aqua/70 font-semibold">
            ·
          </span>
          {href ? (
            <a
              href={href}
              className="font-medium text-aqua underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/50 rounded-sm"
              target="_blank"
              rel="noreferrer noopener"
            >
              {subtitle}
            </a>
          ) : (
            <span className="font-medium text-aqua">{subtitle}</span>
          )}
        </p>
        <p className="uppercase text-xs sm:text-sm text-aqua">{dateText}</p>
      </div>
      <p className="text-sm leading-6 text-primary-text/90 mb-4">
        {description}
      </p>
      <BadgeContainer badges={badges} />
    </div>
  );
}
