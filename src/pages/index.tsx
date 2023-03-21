import { MoviesSection } from '@/presentation/modules/movies/components'
import { Header } from '@/presentation/shared/components/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - WeMovies</title>
      </Head>

      <Header />
      <MoviesSection />
    </>
  )
}
