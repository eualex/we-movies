import styled, { css, keyframes } from 'styled-components'

const spinner = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 8.3rem;
    height: 8.3rem;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid ${theme.colors.white};
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${spinner} 1s linear infinite;
  `}
`
