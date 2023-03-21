import Image from 'next/image'
import * as S from './Header.styles'

export function Cart() {
  return (
    <S.Cart aria-label="Meu carrinho">
      <div>
        <p>Meu Carrinho</p>
        <span>0 itens</span>
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
