import styled, { css } from 'styled-components'

export const Container = styled.div<{ contentInCenter?: boolean }>`
  ${({ theme, contentInCenter }) => css`
    width: 90%;
    max-width: ${theme.sizes.sm};
    margin-inline: auto;
    margin-block: 4.85rem;

    display: grid;
    gap: 1.6rem;

    ${contentInCenter
      ? css`
          place-items: center;
          height: calc(100dvh - 20rem);
        `
      : css`
          grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        `}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
