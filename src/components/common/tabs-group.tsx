import type { JSX } from 'react'

export interface Tab<T> {
  readonly label: string
  readonly value: T
}

interface TabsGroupProps<T> {
  readonly tabs: readonly Tab<T>[]
  readonly toggledTab: T
  readonly setToggledTab: (tab: T) => void
}

export function TabsGroup<T>({
  tabs,
  toggledTab,
  setToggledTab
}: TabsGroupProps<T>): JSX.Element {
  return (
    <div className='flex items-center gap-2'>
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => setToggledTab(tab.value)}
          className={`text-primary-text cursor-pointer px-4 py-2 text-sm font-medium uppercase ${
            toggledTab === tab.value ? 'border-aqua border-b' : ''
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
