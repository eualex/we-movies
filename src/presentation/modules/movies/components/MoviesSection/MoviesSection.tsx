import { Loading } from '@/presentation/shared/components/layout'
import useSWR from 'swr'

import { Movie } from '../Movie/Movie'

import * as S from './MoviesSection.styles'

const getMoovies = (url: string) => fetch(url).then((res) => res.json())

type MovieType = {
  id: number
  title: string
  price: number
  image: string
}

type Response = {
  products: MovieType[]
}

export function MoviesSection() {
  const { data, error, isLoading } = useSWR<Response>(
    'http://localhost:3000/movies.json',
    getMoovies,
  )

  if (isLoading)
    return (
      <S.Container contentInCenter>
        <Loading />
      </S.Container>
    )

  if (error) {
    return (
      <S.Container contentInCenter>
        <S.Error>Ocorreu um erro ao buscar os filmes.</S.Error>
      </S.Container>
    )
  }

  return (
    <S.Container>
      {data?.products.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </S.Container>
  )
}
