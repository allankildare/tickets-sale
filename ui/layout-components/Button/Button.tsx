import { StyledButton } from './styles'
import type { ButtonProps } from './interface'

export function Button(props: ButtonProps) {
    const { color = 'primary', size = 'medium', disabled, children, icon } = props

    return (
        <StyledButton
            disabled={disabled}
            color={color}
            size={size}
        >
            { children }
        </StyledButton>
    )
}
