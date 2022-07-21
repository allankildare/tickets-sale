import type { Names } from 'layout-components/Icon'

export interface ButtonProps {
    size?: 'large' | 'medium' | 'small'
    color?: 'primary' | 'secondary'
    disabled?: boolean
    children: string
    icon?: Names
}
