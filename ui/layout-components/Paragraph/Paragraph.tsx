import type { ParagraphProps } from './interface'
import { StyledParagraph } from './styles'

export function Paragraph(props: ParagraphProps) {
    const { as, size = 'normal', children, color, isError, isBold } = props

    return (
        <StyledParagraph
            size={size}
            as={as}
            color={color}
            isError={isError}
            isBold={isBold}
        >
            {children}
        </StyledParagraph>
    )
}
