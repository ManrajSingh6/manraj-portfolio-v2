import type { JSX } from 'react'

export function Scrollable({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div
      role='region'
      aria-label='Projects'
      className='/* hide scrollbar (Firefox/IE/Edge old) */ /* hide scrollbar (WebKit) */ /* soft fade top/bottom using a mask */ relative max-h-[80vh] overflow-y-auto overscroll-contain [mask-image:linear-gradient(to_bottom,transparent,black_16px,black_calc(100%-16px),transparent)] [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-none [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0'
    >
      {children}
    </div>
  )
}
