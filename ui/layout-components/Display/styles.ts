import styled from 'styled-components'

export const StyledDisplay = styled.h1`
    font-size: 55px;
    font-family: "Circular Bold";
    line-height: -0.02em;
    color: ${({ theme, color }) => {
        if(color === 'blue') return theme.brandColor.blue
        if(color === 'green') return theme.brandColor.green
        if(color === 'black') return theme.brandColor.black
        if(color) return color
        return theme.brandColor.black
    }}
`
