import styled from 'styled-components'
import type { ButtonProps  } from './interface'

type StyledProps = Pick<ButtonProps, 'disabled' | 'color' | 'size' | 'icon'>

export const StyledButton = styled.button<StyledProps>`
    height: 50px;   
    border-radius: 4px;
    padding: 0 35px;
    display: flex;
    align-items: center;
    font-family: "Circular Medium";

    color: ${({ color, disabled, theme }) => {
        if(disabled) return theme.grayScale.gray30
        if(color === 'primary') return '#ffffff'
        if(color === 'secondary') return theme.color.message
    }};
    background-color: ${({ color, disabled, theme }) => {
        if(disabled) return theme.grayScale.gray10
        if(color === 'primary') return theme.color.message
        if(color === 'secondary') return '#ffffff'
    }};
    height: ${({ size }) => {
        if(size === 'large') return '58px'
        if(size === 'small') return '39px'
        return '50px'
    }};
    font-size: ${({ size }) => {
        if(size === 'large' || size === 'medium') return '16px'
        return '14px'
    }};
    border: ${({ color, theme, disabled }) => {
        if(color === 'secondary' && !disabled) return `1px solid ${ theme.color.message }`
    }};

    & > svg {
        margin-left: 8px;
    }
`
