import * as React from 'react'

function ArrowUpRightSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M7 17.35l10-10M7 7.35h10v10"
        stroke="#0B1F4D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowUpRight = React.memo(ArrowUpRightSVG);
