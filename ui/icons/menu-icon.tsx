import * as React from 'react'

function MenuIconSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M3 12.35h18M3 6.35h18M3 18.35h18"
        stroke="#0B1F4D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const MenuIcon = React.memo(MenuIconSVG);
