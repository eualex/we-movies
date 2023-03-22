import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 2.05rem;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid ${theme.colors.gray50};
    margin-top: 2.1rem;
    padding-top: 2.1rem;

    button {
      width: min(23.5rem, 100%);
    }

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      span {
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: ${theme.colors.gray300};
      }
      h1 {
        font-size: 2.4rem;
        line-height: 3.3rem;
        color: ${theme.colors.gray900};
      }
    }

    @media (max-width: ${theme.media.md}) {
      justify-content: center;

      button {
        width: 100%;
      }
    }
  `}
`
