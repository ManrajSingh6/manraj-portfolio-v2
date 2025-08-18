import type { JSX } from "react";
import { BadgeContainer } from "./badge";
import { ExternalLink } from "lucide-react";

export interface ProjectEntry {
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly href?: string;
  readonly badges: readonly string[];
}

interface ProjectCardProps {
  readonly project: ProjectEntry;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const titleElement = project.href ? (
    <a
      href={project.href}
      target="_blank"
      className="inline-flex items-center gap-1.5 font-semibold text-aqua leading-5 w-fit
             transition-transform duration-200 hover:-translate-y-0.5
             hover:drop-shadow-[0_0_10px_rgba(97,160,255,0.55)]"
    >
      {project.title}
      <ExternalLink className="pb-1" size={22} aria-hidden />
    </a>
  ) : (
    <span className="inline-flex items-center gap-1.5 font-semibold text-aqua leading-5">
      {project.title}
    </span>
  );

  return (
    <div className="max-w-4xl text-primary-text border-b border-aqua/20 hover:border-aqua/40 overflow-hidden transition">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] p-4 md:p-6 gap-10">
        <div className="flex flex-col gap-4">
          {titleElement}
          <p className="text-sm leading-6 text-primary-text/90">
            {project.description}
          </p>
          <BadgeContainer badges={project.badges} />
        </div>
        <div className="md:w-56 md:shrink-0">
          <div className="relative w-full h-40 md:h-36 overflow-hidden rounded-lg ring-1 ring-aqua/20 bg-deep-blue/5">
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              width={224} // matches md:w-56
              height={144} // matches md:h-36
              sizes="(min-width: 768px) 224px, 100vw"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
