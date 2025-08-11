import type { JSX } from "react";

export interface Tab<T> {
  readonly label: string;
  readonly value: T;
}

interface TabsGroupProps<T> {
  readonly tabs: readonly Tab<T>[];
  readonly toggledTab: T;
  readonly setToggledTab: (tab: T) => void;
}

export function TabsGroup<T>({
  tabs,
  toggledTab,
  setToggledTab,
}: TabsGroupProps<T>): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => setToggledTab(tab.value)}
          className={`py-2 px-4 text-sm font-medium text-text-light cursor-pointer uppercase ${
            toggledTab === tab.value ? "border-b border-aqua/20" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
