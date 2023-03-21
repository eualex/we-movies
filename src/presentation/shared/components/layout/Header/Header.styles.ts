import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    width: 90%;
    max-width: ${theme.sizes.sm};
    margin: 0 auto;
    height: 7.4rem;
    padding: 2.45rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Logo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.7rem;
  `}
`

export const Cart = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    border: none;
    background-color: transparent;

    div {
      text-align: right;

      p {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: ${theme.colors.white};
      }

      span {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: ${theme.colors.gray300};
      }
    }
  `}
`
