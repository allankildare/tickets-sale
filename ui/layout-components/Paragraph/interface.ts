import { BrandColor, Color } from 'types'

export interface ParagraphProps {
    size?: 'large' | 'medium' | 'normal' | 'small'
    as?: 'p' | 'span' | 'label'
    children: string
    color?: Color | BrandColor
    isError?: boolean
    isBold?: boolean
}
