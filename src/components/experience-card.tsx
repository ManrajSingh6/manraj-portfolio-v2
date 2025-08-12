import type { JSX } from "react";
import { formatDate } from "../utils/date";
import { BaseEntryCard } from "./base-entry-card";

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
    <BaseEntryCard
      title={position.title}
      subtitle={company.name}
      href={company.url}
      dateText={`${formatDate(position.startDate)} - ${
        position.endDate ? formatDate(position.endDate) : "Present"
      }`}
      description={position.description}
      badges={badges}
    />
  );
}
