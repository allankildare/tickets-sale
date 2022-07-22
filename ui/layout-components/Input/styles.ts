import styled from 'styled-components'
import { InputProps } from './interface'
import { ifProp } from 'styled-tools'

export const InputField = styled.input<InputProps>`
    background-color: #FAFAFC;
    height: 50px;
    padding-left: .75rem;
    padding-right: ${({ success, error }) => !(success || error) && '.75rem'};
    width: 100%;
    border: 1px solid ${({ theme }) => theme.grayScale.gray10};

    border-right: ${({ success, error }) => (success || error) ? 'none' : ''};
    border-radius: ${({ theme, success, error }) => (success || error) ? `${theme.radius.default} 0 0 ${theme.radius.default}` : theme.radius.default};
    color: ${({ theme }) => theme.brandColor.black};
    border-color: ${({ theme, success, error }) => {
        if(success) return theme.color.success
        if(error) return theme.color.error
        return ''
    }};
    
    &:focus {
        border-color: ${({ theme, success, error }) => {
            if(success) return theme.color.success
            if(error) return theme.color.error
            return theme.color.black
        }};
    }
`
export const TextField = styled.div<InputProps>`
    display: flex;
    max-width: 400px;

    & > div.icon {
        background-color: #FAFAFC;
        border: 1px solid ${({ theme }) => theme.grayScale.gray10};
        border-radius: ${({ theme }) => `0 ${theme.radius.default} ${theme.radius.default} 0`};
        border-left: none;
        height: 50px;
        padding: 0 1rem 0;
        border-color: ${({ theme, success, error }) => {
            if(success) return theme.color.success
            if(error) return theme.color.error
            return ''
    }};
    }

    svg {
        display: inline-block;
        margin: auto;
        height: 100%;
    }
`
