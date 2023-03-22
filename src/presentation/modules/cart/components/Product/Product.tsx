import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

import { useCart } from '@/presentation/shared/contexts/CartContext'
import { formatPrice } from '@/presentation/shared/utils/formatPrice'

import trashIcon from '@/public/icons/trash.svg'

import * as S from './Product.styles'

type Movie = {
  id: number
  image: string
  title: string
  price: number
}

type Props = {
  product: Movie
}

export function Product({ product }: Props) {
  const [products, setCart] = useCart((store) => store.products)
  const [quantity, setQuantity] = useState(1)
  // const productsRef = useRef(products)

  const amount = quantity * product.price

  function handleUpdateAmount(currentQuantity: number) {
    const currentProduct = products.find((p) => product.id === p.id)!

    const currentProductIndex = products.indexOf(currentProduct)

    currentProduct.amount = currentQuantity * currentProduct.price

    products.splice(currentProductIndex, 1, currentProduct)

    setCart({ products: [...products] })
  }

  function handleAddProduct() {
    setQuantity((current) => current + 1)

    handleUpdateAmount(quantity + 1)
  }

  function handleRemoveProduct() {
    if (quantity > 1) {
      setQuantity((current) => current - 1)
      handleUpdateAmount(quantity - 1)
    }
  }

  function handleChangeQuantity(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.valueAsNumber

    if (value <= 0) return

    setQuantity(value)
    handleUpdateAmount(value)
  }

  function handleDeleteProduct() {
    const productList = products.filter((p) => p.id !== product.id)
    setCart({ products: productList })
  }

  return (
    <S.Container>
      <S.Group>
        <span>PRODUTO</span>

        <S.Banner
          src={product.image}
          alt={product.title}
          width={89}
          height={114}
        />
      </S.Group>
      <S.Group>
        <S.Details>
          <strong>{product.title}</strong>
          <strong>{formatPrice(product.price)}</strong>
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
            ? formatPrice(product.price)
            : formatPrice(amount)}
        </S.TotalPrice>
      </S.Group>

      <S.Button onClick={handleDeleteProduct}>
        <Image src={trashIcon} alt="Lixeira" />
      </S.Button>
    </S.Container>
  )
}
