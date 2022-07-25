import { BrazilFlag, Help, Logo, UserLogin } from 'ui/icons'
import { Paragraph } from 'ui/layout-components'
import { StyledHeader } from './styles'
import Link from 'next/link'

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <nav>
        <Paragraph>Cotação do dólar hoje R$ 5,53</Paragraph>
        <BrazilFlag className="brazilIcon" />
        <Help className="helpIcon" />
        <UserLogin className="userIcon" />
        <Link href="#">
          <a>
            <Paragraph size="medium" color="blue" isBold>
              Entrar
            </Paragraph>
          </a>
        </Link>
      </nav>
    </StyledHeader>
  )
}
