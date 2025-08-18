import type { JSX } from "react";
import { PROJECT_DATA } from "../data";
import { ProjectCard } from "./project-card";
import { Scrollable } from "./scrollable";

export function ProjectContent(): JSX.Element {
  return (
    <Scrollable>
      <div className="flex flex-col space-y-4 ">
        {PROJECT_DATA.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </Scrollable>
  );
}
