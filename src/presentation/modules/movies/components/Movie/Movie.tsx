import Image from 'next/image'

import { Button } from '@/presentation/shared/components/form'

import * as S from './Movie.styles'

type MovieType = {
  id: number
  title: string
  price: number
  image: string
}

type Props = {
  movie: MovieType
}

export function Movie({ movie }: Props) {
  return (
    <S.Container>
      <Image src={movie.image} alt={movie.title} height={188} width={147} />

      <S.TextGroup>
        <h1>{movie.title}</h1>
        <strong>
          {Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(movie.price)}
        </strong>
      </S.TextGroup>

      <Button>
        <Button.IconGroup>
          <Button.Icon>
            <Image
              src="/icons/addshoppingcart.svg"
              alt="Adicionar ao carrinho"
              fill
            />
          </Button.Icon>
          0
        </Button.IconGroup>
        Testando
      </Button>
    </S.Container>
  )
}
