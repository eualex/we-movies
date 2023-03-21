import Image from 'next/image'

import { useCart } from '@/presentation/shared/contexts/CartContext'

import * as S from './Header.styles'
import { APP_ROUTES } from '@/presentation/shared/constants/routes'

export function Cart() {
  const [products] = useCart((store) => store.products)

  return (
    <S.Cart href={APP_ROUTES.CART} aria-label="Meu carrinho">
      <div>
        <p>Meu Carrinho</p>
        <span>{products?.length} itens</span>
      </div>

      <Image
        src="/icons/cart.svg"
        alt="Icone do carrinho"
        width={32}
        height={32}
      />
    </S.Cart>
  )
}
