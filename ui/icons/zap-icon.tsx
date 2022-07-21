import * as React from 'react'

function ZapIconSVG(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
            <path
                d="M13 2.35l-10 12h9l-1 8 10-12h-9l1-8z"
                stroke="#0B1F4D"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const ZapIcon = React.memo(ZapIconSVG)
