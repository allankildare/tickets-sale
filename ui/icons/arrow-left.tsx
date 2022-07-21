import * as React from 'react'

function ArrowLeftSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M19 12.35H5M12 19.35l-7-7 7-7"
        stroke="#0B1F4D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowLeft = React.memo(ArrowLeftSVG)

