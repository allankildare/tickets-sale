import styled from 'styled-components'
import type { ParagraphProps } from './interface'

type StyledProps = Pick<ParagraphProps, 'size'>

export const StyledParagraph = styled.p<StyledProps>`
    letter-spacing: 0;
    font-family: "Circular Book";
    font-size: ${({ size }) => {
        if(size === 'large') return '20px'
        if(size === 'medium') return '16px'
        if(size === 'normal') return '14px'
        if(size === 'small') return '12px'
    }};
    line-height: ${({ size }) => {
        if(size === 'large') return '26px'
        if(size === 'medium') return '22px'
        if(size === 'normal') return '18px'
        if(size === 'small') return '16px'
    }};
`