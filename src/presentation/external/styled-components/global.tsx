import { createGlobalStyle, css } from 'styled-components'

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;

      @media (max-width: ${theme.media.md}) {
        font-size: 50%;
      }
    }

    body {
      font-size: 1.6rem;
      font-family: ${openSans.style.fontFamily}, sans-serif;
      background-color: ${theme.colors.gray900};
    }
  `}
`
