import styled from 'styled-components'
import type { HeadingProps } from './interface'

type StyledProps = Pick<HeadingProps, 'type'>

export const StyledHeading = styled.h1<StyledProps>`
    font-family: ${({ type }) => (type === '1' || type === '2') ? 'Circular Bold' : 'Circular Medium'};
    font-size: ${({ type }) => (type === '1') ? '40px' : (type === '2') ? '24px' : '22px'};
    letter-spacing: ${({ type }) => (type === '1') ? '-2' : (type === '2') ? '-1' : '0'};
    line-height: ${({ type }) => (type === '1') ? '45px' : (type === '2') ? '30px' : '28px'};
    color: ${({ theme }) => theme.brandColor.black}
`
