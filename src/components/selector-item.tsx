import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import type { RouteType } from "../routes";

export interface SelectorItemProps {
  readonly isActive: boolean;
  readonly path: RouteType;
  readonly icon: JSX.Element;
  readonly label: string;
}

export function SelectorItem({
  isActive,
  path,
  icon,
  label,
}: SelectorItemProps): JSX.Element {
  return (
    <NavLink
      to={path}
      className={`w-full h-full aspect-square border border-aqua rounded-lg flex flex-col items-center justify-center cursor-pointer text-aqua transition-colors duration-300 gap-4 ${
        isActive ? " border-text-light" : "border-aqua hover:border-text-light"
      }`}
    >
      <span className={`${isActive ? "text-text-light" : ""}`}>{icon}</span>
      <span className={`${isActive ? "text-text-light" : ""}`}>{label}</span>
    </NavLink>
  );
}
