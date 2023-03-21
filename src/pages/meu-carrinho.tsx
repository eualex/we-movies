import Head from 'next/head'

import { ProductsSection } from '@/presentation/modules/cart/components'
import { Header } from '@/presentation/shared/components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Carrinho - WeMovies</title>
      </Head>
      <Header />
      <ProductsSection />
    </>
  )
}
