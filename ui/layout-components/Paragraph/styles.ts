import styled from 'styled-components'
import type { ParagraphProps } from './interface'

type StyledProps = Pick<ParagraphProps, 'size' | 'color' | 'isError' | 'isBold'>

export const StyledParagraph = styled.p<StyledProps>`
    letter-spacing: 0;
    font-family: ${({ isBold, size }) => {
        if(isBold && size === 'medium') return "Circular Bold"
        return "Circular Book"
    }};
    color: ${({ color, theme, isError }) => {
        if(isError) return theme.color.error
        if(color === 'blue') return theme.brandColor.blue
        if(color === 'green') return theme.brandColor.green
        if(color === 'black') return theme.brandColor.black
        if(color) return color
        return theme.brandColor.black
    }};
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
