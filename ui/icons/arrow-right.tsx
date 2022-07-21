import * as React from 'react'

function ArrowRightSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M5 12.35h14M12 5.35l7 7-7 7"
        stroke="#0B1F4D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowRight = React.memo(ArrowRightSVG)

