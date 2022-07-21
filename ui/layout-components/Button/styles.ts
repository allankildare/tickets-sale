import styled from 'styled-components'
import { color as themeColor } from 'theme/color'
import { grayScale } from 'theme/grayScale'
import type { ButtonProps  } from './interface'

type StyledProps = Pick<ButtonProps, 'disabled' | 'color' | 'size'>

export const StyledButton = styled.button<StyledProps>`
    height: 50px;   
    border-radius: 4px;
    padding: 0 35px;
    font-family: "Circular Medium";
    color: ${({ color, disabled }) => {
        if(disabled) return grayScale.gray30
        if(color === 'primary') return '#ffffff'
        if(color === 'secondary') return themeColor.message
    }};
    background-color: ${({ color, disabled }) => {
        if(disabled) return grayScale.gray10
        if(color === 'primary') return themeColor.message
        if(color === 'secondary') return '#ffffff'
    }};
    height: ${({ size }) => {
        if(size === 'large') return '58px'
        if(size === 'small') return '39px'
        return '50px'
    }};
`
