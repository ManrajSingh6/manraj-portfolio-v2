import type { JSX } from 'react'
import { formatDate } from '../../utils/date'
import { BaseEntryCard } from './base-entry-card'

export interface ExtracurricularEntry {
  readonly position: {
    readonly title: string
    readonly description: string
  }
  readonly event: {
    readonly name: string
    readonly date: Date
  }
  readonly badges: readonly string[]
}

interface ExtracurricularCardProps {
  readonly extracurricular: ExtracurricularEntry
}

export function ExtracurricularCard({
  extracurricular
}: ExtracurricularCardProps): JSX.Element {
  const { position, event, badges } = extracurricular

  return (
    <BaseEntryCard
      title={position.title}
      subtitle={event.name}
      dateText={formatDate(event.date)}
      description={position.description}
      badges={badges}
    />
  )
}
