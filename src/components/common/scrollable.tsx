import type { JSX } from 'react'

export function Scrollable({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className='relative max-h-[65vh] overflow-y-auto overscroll-contain [mask-image:linear-gradient(to_bottom,transparent,black_16px,black_calc(100%-16px),transparent)] pb-0 [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-none sm:max-h-[70vh] md:max-h-[80vh] [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0'>
      {children}
    </div>
  )
}
