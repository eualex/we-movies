import Image from 'next/image'
import { useCart } from '@/presentation/shared/contexts/CartContext'
import { formatPrice } from '@/presentation/shared/utils/formatPrice'

import { Button } from '@/presentation/shared/components/form'

import * as S from './Movie.styles'

type MovieType = {
  id: number
  title: string
  price: number
  image: string
  amount: number
}

type Props = {
  movie: MovieType
}

export function Movie({ movie }: Props) {
  const [products, setCart] = useCart((store) => store.products)

  const alreadyExists = products.find((p) => p.id === movie.id)

  function handleAddToCart() {
    const productList = new Set(products)
    productList.add(movie)
    setCart({ products: Array.from(productList) })
  }

  return (
    <S.Container>
      <Image src={movie.image} alt={movie.title} height={188} width={147} />

      <S.TextGroup>
        <h1>{movie.title}</h1>
        <strong>{formatPrice(movie.price)}</strong>
      </S.TextGroup>

      <Button
        onClick={handleAddToCart}
        variant={alreadyExists ? 'success' : 'primary'}
      >
        <Button.IconGroup>
          <Button.Icon>
            <Image
              src="/icons/addshoppingcart.svg"
              alt="Adicionar ao carrinho"
              fill
            />
          </Button.Icon>
          {alreadyExists ? 1 : 0}
        </Button.IconGroup>
        {alreadyExists ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
      </Button>
    </S.Container>
  )
}
