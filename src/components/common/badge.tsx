import type { JSX } from 'react'

type BadgeVariant = 'primary' | 'secondary'

function Badge({
  badge,
  variant
}: {
  badge: string
  variant: BadgeVariant
}): JSX.Element {
  const base =
    'inline-block rounded-full px-2 py-1 text-[11px] ring-1 transition sm:text-xs'

  const styles: Record<BadgeVariant, string> = {
    primary: 'bg-aqua/10 text-aqua ring-aqua/40 hover:ring-aqua/70',
    secondary:
      'bg-app-bg/50 text-primary-text/80 ring-primary-text/20 hover:ring-primary-text/40'
  }

  return <span className={`${base} ${styles[variant]}`}>{badge}</span>
}

export function BadgeContainer({
  badges,
  variant
}: {
  badges: readonly string[]
  variant: BadgeVariant
}): JSX.Element {
  return (
    <div className='flex flex-wrap gap-2'>
      {badges.map((badge, idx) => (
        <Badge key={idx} badge={badge} variant={variant} />
      ))}
    </div>
  )
}
