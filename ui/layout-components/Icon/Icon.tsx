import { memo } from 'react'
import { IconProps } from './interface'
import icons from 'ui/icons'

function IconTestSVG(props: IconProps) {
    const { size = '24px', stroke = '#0B1F4D', name } = props
    
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...props}>
            <path
                d={icons[name]}
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"    
            />
        </svg>
    )
}

export const Icon = memo(IconTestSVG)
