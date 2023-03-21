import styled, { css } from 'styled-components'

const variants = {
  success: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.green500};
    `}
  `,
  primary: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.blue500};
    `}
  `,
}

export type Variant = keyof typeof variants

type ButtonProps = {
  variant?: Variant
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant = 'primary' }) => css`
    ${variants[variant]}

    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    gap: 1.2rem;

    text-transform: uppercase;
    border: none;
    border-radius: ${theme.radii.sm};

    transition: filter 400ms ease;

    &:hover {
      filter: brightness(0.85);
    }
  `}
`

export const Icon = styled.span`
  position: relative;
  width: 1.7rem;
  height: 1.7rem;
`

export const IconGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${theme.colors.white};
    font-size: 1.2rem;
    line-height: 1.6rem;
  `}
`
