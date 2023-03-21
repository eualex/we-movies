import type { AppProps } from 'next/app'

import { Theme } from '@/presentation/external/styled-components'
import { CartProvider } from '@/presentation/shared/contexts/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Theme>
  )
}
