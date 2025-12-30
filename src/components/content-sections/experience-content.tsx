import { useState, type JSX } from 'react'
import { motion, AnimatePresence, spring } from 'framer-motion'
import { EXPERIENCE_DATA, EXTRACURRICULAR_DATA } from '../../data'
import { ExperienceCard } from '../cards/experience-card'
import { ExtracurricularCard } from '../cards/extracurricular-card'
import { type Tab, TabsGroup } from '../common/tabs-group'
import { Scrollable } from '../common/scrollable'

type ToggledTab = 'work' | 'extracurricular'

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: spring,
      stiffness: 300,
      damping: 24
    }
  }
}

export function ExperienceContent(): JSX.Element {
  const [toggledTab, setToggledTab] = useState<ToggledTab>('work')

  const tabs: readonly Tab<ToggledTab>[] = [
    {
      label: 'Work',
      value: 'work'
    },

    {
      label: 'Extracurricular',
      value: 'extracurricular'
    }
  ]

  function getContentForTab(): React.ReactNode {
    switch (toggledTab) {
      case 'work':
        return EXPERIENCE_DATA.map((experience, idx) => (
          <motion.div key={idx} variants={ITEM_VARIANTS}>
            <ExperienceCard experience={experience} />
          </motion.div>
        ))
      case 'extracurricular':
        return EXTRACURRICULAR_DATA.map((extracurricular, idx) => (
          <motion.div key={idx} variants={ITEM_VARIANTS}>
            <ExtracurricularCard extracurricular={extracurricular} />
          </motion.div>
        ))
    }
  }

  return (
    <div className='flex flex-col space-y-4'>
      <TabsGroup
        tabs={tabs}
        toggledTab={toggledTab}
        setToggledTab={setToggledTab}
      />
      <AnimatePresence mode='wait'>
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial='hidden'
          animate='visible'
          className='flex flex-col space-y-4'
          key={toggledTab}
        >
          <Scrollable>{getContentForTab()}</Scrollable>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
