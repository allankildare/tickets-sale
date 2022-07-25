import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.m}`};
  border-bottom: 0.8px solid ${({ theme }) => theme.grayScale.gray10};
  & > nav {
    display: flex;
    align-items: center;
    .brazilIcon {
      margin-left: 1rem;
    }

    .helpIcon {
      margin-left: 1rem;
    }
    .userIcon {
      margin-left: 38px;
    }
  }
`
