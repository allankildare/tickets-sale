import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.m}`};

  button.display-list {
    border: 0.8px solid ${({ theme }) => theme.grayScale.gray30};
    padding: 8px;
    border-radius: 2px;
    & > svg {
      vertical-align: middle;
    }
    &:last-child {
        margin-left: 8px;
    }
  }
`

export const StyledNav = styled.nav`
  display: flex;

  & > div {
    display: flex;

    div.icon {
      border: 0.8px solid ${({ theme }) => theme.grayScale.gray20};
      border-right: none;
      padding: 8px 14px;
    }

    & > input {
      border: 0.8px solid ${({ theme }) => theme.grayScale.gray20};
      border-left: none;
    }
  }

  .localization-field input {
    width: 247px;
  }
  .calendar-field input {
    width: 100px;
  }

  button {
    border: 0.8px solid ${({ theme }) => theme.grayScale.gray20};
    padding: 8px;

    & > svg {
      vertical-align: middle;
    }
  }
`
