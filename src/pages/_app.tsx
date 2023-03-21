import type { AppProps } from 'next/app'

import { Theme } from '@/presentation/external/styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}
