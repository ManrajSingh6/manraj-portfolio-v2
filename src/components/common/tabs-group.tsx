import type { JSX } from 'react'
import { motion } from 'framer-motion'

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
    <div className='flex flex-wrap items-center gap-1 sm:gap-2'>
      {tabs.map((tab, idx) => (
        <motion.button
          key={idx}
          onClick={() => setToggledTab(tab.value)}
          className={`text-primary-text relative cursor-pointer px-3 py-2 text-xs font-medium uppercase transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm md:text-sm ${
            toggledTab === tab.value ? 'text-aqua' : 'hover:text-aqua'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.label}
          {toggledTab === tab.value && (
            <motion.div
              className='bg-aqua absolute right-0 bottom-0 left-0 h-0.5'
              layoutId='activeTab'
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  )
}
