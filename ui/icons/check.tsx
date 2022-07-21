import * as React from 'react'

function CheckSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M20 6.35l-11 11-5-5"
        stroke="#0B1F4D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Check = React.memo(CheckSVG)
