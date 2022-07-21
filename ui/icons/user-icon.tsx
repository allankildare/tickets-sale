import * as React from 'react'

function UserIconSVG(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
            <path
                d="M20 21.35v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11.35a4 4 0 100-8 4 4 0 000 8z"
                stroke="#0B1F4D"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const UserIcon = React.memo(UserIconSVG)
