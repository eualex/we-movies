import { useCart } from '@/presentation/shared/contexts/CartContext'
import Image from 'next/image'
import * as S from './Header.styles'

export function Cart() {
  const [productsId] = useCart((store) => store.productsId)

  return (
    <S.Cart aria-label="Meu carrinho">
      <div>
        <p>Meu Carrinho</p>
        <span>{productsId?.length} itens</span>
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
