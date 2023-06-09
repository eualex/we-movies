import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    padding: 4rem;

    img {
      width: min(44.7rem, 100%);
    }

    button {
      width: min(18rem, 100%);
    }
  `}
`

export const Message = styled.h1`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.7rem;
    text-align: center;
    color: ${theme.colors.gray900};
  `}
`
