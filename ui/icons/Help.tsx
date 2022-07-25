import { memo, SVGProps } from 'react'

function HelpSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 26 25" fill="none" {...props}>
      <path
        d="M10.685 10.185A2.181 2.181 0 0112.9 8.498a2.137 2.137 0 012.25 2.001C15.15 12.004 13 12.5 13 13.5M13.125 16.252a.125.125 0 11-.25 0 .125.125 0 01.25 0"
        stroke="#4070F4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M5.628 17.66a9.018 9.018 0 112.212 2.212l-2.843.631.631-2.843z"
        stroke="#4070F4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Help = memo(HelpSVG)
