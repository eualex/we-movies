import Image from 'next/image'

import trashIcon from '@/public/icons/trash.svg'

import * as S from './Product.styles'
import { ChangeEvent, useState } from 'react'
import { useCart } from '@/presentation/shared/contexts/CartContext'

type Movie = {
  id: number
  image: string
  title: string
  price: number
}

function formatPrice(rawPrice: number) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(rawPrice)
}

export function Product(props: Movie) {
  const [products, setCart] = useCart((store) => store.products)
  const [quantity, setQuantity] = useState(1)

  const amount = quantity * props.price

  function handleAddProduct() {
    setQuantity((current) => current + 1)
  }
  function handleRemoveProduct() {
    if (quantity > 1) {
      setQuantity((current) => current - 1)
    }
  }

  function handleChangeQuantity(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.valueAsNumber

    if (value <= 0) return

    setQuantity(value)
  }

  function handleDeleteProduct() {
    const productList = products.filter((product) => product.id !== props.id)
    setCart({ products: productList })
  }

  return (
    <S.Container>
      <S.Group>
        <span>PRODUTO</span>

        <S.Banner src={props.image} alt={props.title} width={89} height={114} />
      </S.Group>
      <S.Group>
        <S.Details>
          <strong>{props.title}</strong>
          <strong>{formatPrice(props.price)}</strong>
        </S.Details>
      </S.Group>
      <S.Group>
        <span>QTD</span>

        <S.QuatityControl>
          <button onClick={handleRemoveProduct}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
          <button onClick={handleAddProduct}>+</button>
        </S.QuatityControl>
      </S.Group>
      <S.Group>
        <span>SUBTOTAL</span>

        <S.TotalPrice>
          {isNaN(Number(quantity))
            ? formatPrice(props.price)
            : formatPrice(amount)}
        </S.TotalPrice>
      </S.Group>

      <S.Button onClick={handleDeleteProduct}>
        <Image src={trashIcon} alt="Lixeira" />
      </S.Button>
    </S.Container>
  )
}
