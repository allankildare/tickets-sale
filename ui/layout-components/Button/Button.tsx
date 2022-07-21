import { StyledButton } from './styles'
import type { ButtonProps } from './interface'
import { Icon } from 'ui/layout-components'
import { grayScale, color as themeColor } from 'ui/theme'

function iconColor({ isDisabled, color }: { isDisabled?: boolean, color: 'primary' | 'secondary' }) {
    if(isDisabled) return grayScale.gray30
    if(color === 'primary') return '#fff'
    if(color === 'secondary') return themeColor.message
}

export function Button(props: ButtonProps) {
    const { color = 'primary', size = 'medium', disabled, children, icon } = props

    return (
        <StyledButton
            disabled={disabled}
            color={color}
            size={size}
        >
            { children }
            {icon && (
                <Icon
                    name={icon}
                    size="12px"
                    stroke={iconColor({ isDisabled: disabled, color: color })}
                />
            )}
        </StyledButton>
    )
}
