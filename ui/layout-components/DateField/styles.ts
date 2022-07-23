import styled from 'styled-components'

export const CalendarDiv = styled.div`
    display: flex;
    max-width: 400px;

    & > div.icon {
        background-color: #FAFAFC;
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.grayScale.gray10};
        border-radius: ${({ theme }) => `0 ${theme.radius.default} ${theme.radius.default} 0`};
        border-left: none;
        height: 50px;
        padding: 0 1rem 0;
    }

    & > div.icon.focused {
        border-color: ${({ theme }) => theme.brandColor.black};
    }

    svg {
        display: inline-block;
        margin: auto;
        height: 100%;
        
    }
`

export const StyledDate = styled.input`
    background-color: #FAFAFC;
    height: 50px;
    padding-left: .75rem;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.grayScale.gray10};
    border-right: none;
    border-radius: ${({ theme }) => `${theme.radius.default} 0 0 ${theme.radius.default}`};
    color: ${({ theme }) => theme.brandColor.black};
    font-size: 16px;
    
    &:focus {
        border-color: ${({ theme }) => theme.brandColor.black};
    }

    &:disabled {
        background-color: #EDF0F5;
        border-color: ${({ theme }) => theme.grayScale.gray10};
    }
`
