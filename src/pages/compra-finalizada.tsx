import Head from 'next/head'

import { Header } from '@/presentation/shared/components/layout'
import { OrderCompletedSuccessfullySection } from '@/presentation/modules/orderSuccessfully/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Compra Finalizada - WeMovies</title>
      </Head>
      <Header />
      <OrderCompletedSuccessfullySection />
    </>
  )
}
