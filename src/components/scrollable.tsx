import type { JSX } from "react";

export function Scrollable({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      role="region"
      aria-label="Projects"
      className="
    relative max-h-[80vh] overflow-y-auto overscroll-contain
    focus-visible:outline-none

    /* hide scrollbar (Firefox/IE/Edge old) */
    [scrollbar-width:none] [-ms-overflow-style:none]
    /* hide scrollbar (WebKit) */
    [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0

    /* soft fade top/bottom using a mask */
    [mask-image:linear-gradient(to_bottom,transparent,black_16px,black_calc(100%-16px),transparent)]
  "
    >
      {children}
    </div>
  );
}
