import { StyledHeading } from './styles'
import type { HeadingProps } from './interface'

export function Heading(props: HeadingProps) {
    const { as, type = '1', children } = props

    return (
        <StyledHeading
            type={type}
            as={as}
        >
            {children}
        </StyledHeading>
    )
}
