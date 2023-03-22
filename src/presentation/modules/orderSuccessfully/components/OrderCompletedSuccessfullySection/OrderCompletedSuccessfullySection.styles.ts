import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 90%;
    max-width: ${theme.sizes.sm};
    margin: 4.85rem auto;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radii.sm};
    padding: 2.4rem;
  `}
`
