export interface ParagraphProps {
    size?: 'large' | 'medium' | 'normal' | 'small'
    as?: 'p' | 'span' | 'label'
    children: string
    color?: string
    isError?: boolean
    isBold?: boolean
}
