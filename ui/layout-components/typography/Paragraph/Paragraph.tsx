import type { ParagraphProps } from './interface'
import { StyledParagraph } from './styles'

export function Paragraph(props: ParagraphProps) {
    const { as, size = 'normal', children } = props

    return (
        <StyledParagraph
            size={size}
            as={as}
        >
            {children}
        </StyledParagraph>
    )
}
