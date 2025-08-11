import type { JSX } from "react";
import { ROUTES } from "../routes";
import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  FolderOpenDot,
  MailPlus,
  SquareUser,
} from "lucide-react";

interface ContentSelectorProps {
  readonly activePath: (typeof ROUTES)[keyof typeof ROUTES];
}

interface SelectorItemProps {
  readonly isActive: boolean;
  readonly path: (typeof ROUTES)[keyof typeof ROUTES];
  readonly icon: JSX.Element;
  readonly label: string;
}

const ICON_STYLE = "h-8 w-8";

const CONTENT_SELECTOR_ITEMS: readonly Omit<SelectorItemProps, "isActive">[] = [
  {
    path: ROUTES.ABOUT,
    icon: <SquareUser className={ICON_STYLE} />,
    label: "About",
  },
  {
    path: ROUTES.EXPERIENCE,
    icon: <BriefcaseBusiness className={ICON_STYLE} />,
    label: "Experience",
  },
  {
    path: ROUTES.PROJECTS,
    icon: <FolderOpenDot className={ICON_STYLE} />,
    label: "Projects",
  },
  {
    path: ROUTES.CONTACT,
    icon: <MailPlus className={ICON_STYLE} />,
    label: "Contact",
  },
];

export function ContentSelector({
  activePath,
}: ContentSelectorProps): JSX.Element {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-8 flex-1 max-w-md aspect-square">
      {CONTENT_SELECTOR_ITEMS.map((item, idx) => (
        <SelectorItem
          key={`selector-item-${idx}-${item.path}`}
          path={item.path}
          icon={item.icon}
          label={item.label}
          isActive={item.path === activePath}
        />
      ))}
    </div>
  );
}

function SelectorItem({
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
      {icon}
      <span className={`${isActive ? "text-text-light" : ""}`}>{label}</span>
    </NavLink>
  );
}
