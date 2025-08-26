import { useState, type JSX } from 'react'
import { EXPERIENCE_DATA, EXTRACURRICULAR_DATA } from '../../data'
import { ExperienceCard } from '../cards/experience-card'
import { ExtracurricularCard } from '../cards/extracurricular-card'
import { type Tab, TabsGroup } from '../common/tabs-group'

type ToggledTab = 'work' | 'extracurricular'

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
          <ExperienceCard key={idx} experience={experience} />
        ))
      case 'extracurricular':
        return EXTRACURRICULAR_DATA.map((extracurricular, idx) => (
          <ExtracurricularCard key={idx} extracurricular={extracurricular} />
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
      {getContentForTab()}
    </div>
  )
}
