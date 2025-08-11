import type { JSX } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../routes";
import { AboutContent } from "./about-content";

export function ContentPane(): JSX.Element {
  const location = useLocation();

  function getContentForPath(path: string): JSX.Element {
    switch (path) {
      case ROUTES.ABOUT:
        return <AboutContent />;
      case ROUTES.EXPERIENCE:
        return <p>Experience</p>;
      case ROUTES.PROJECTS:
        return <p>Projects</p>;
      case ROUTES.CONTACT:
        return <p>Contact</p>;
      default:
        return <p>This wasn't supposed to happen...</p>;
    }
  }

  return <div className="flex-1">{getContentForPath(location.pathname)}</div>;
}
