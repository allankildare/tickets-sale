import { memo, SVGProps } from 'react'

function LocalizationSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M12 13v0a3 3 0 01-3-3v0a3 3 0 013-3v0a3 3 0 013 3v0a3 3 0 01-3 3z"
        stroke="#4070F4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M12 21s-7-5.75-7-11a7 7 0 1114 0c0 5.25-7 11-7 11z"
        stroke="#4070F4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Localization = memo(LocalizationSVG)
