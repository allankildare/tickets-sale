import { SVGProps } from 'react'
import icons from 'ui/icons'

export type Names = keyof typeof icons

export interface IconProps extends SVGProps<SVGSVGElement> {
    name: Names,
    size?: string // TO DO: improve this type
    stroke?: string
}
