import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './global'

const theme = {
  colors: {
    white: '#ffffff',
    gray300: '#999999',
    gray600: '#333333',
    gray900: '#2F2E41',
    blue500: '#009EDD',
    green500: '#039B00',
  },
  sizes: {
    sm: '960px',
  },
  spaces: {},
  radii: {
    1: '4px',
  },
  shadow: {},
  media: {
    md: '768px',
  },
}

export type ThemeType = typeof theme

export function Theme({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
