import { BrandColor, Color } from 'types'
import { StyledDisplay } from './styles'

interface DisplayProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: Color | BrandColor
  children: string
}

export function Display(props: DisplayProps) {
  const { as, children, color } = props

  return <StyledDisplay as={as} color={color}>{children}</StyledDisplay>
}
