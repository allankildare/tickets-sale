import { memo, SVGProps } from 'react'

function CalendarSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.5 3.001v3M16.5 3.001v3"
        stroke="#4070F4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={3}
        y={4.501}
        width={17.999}
        height={16.499}
        rx={3}
        stroke="#4070F4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15h-5M12.5 11.5h-5M16.5 15h-1M16.5 11.5h-1"
        stroke="#4070F4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Calendar = memo(CalendarSVG)
