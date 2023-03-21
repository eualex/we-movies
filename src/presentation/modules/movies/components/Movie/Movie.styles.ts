import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: max-content;
    border-radius: ${theme.radii.sm};
    background-color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.1rem;
    gap: 1.6px;
  `}
`

export const TextGroup = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-block: 1rem;

    h1 {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.6rem;

      color: ${theme.colors.gray600};
    }

    strong {
      margin-top: 2px;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2.2rem;
      color: ${theme.colors.gray900};
    }
  `}
`
