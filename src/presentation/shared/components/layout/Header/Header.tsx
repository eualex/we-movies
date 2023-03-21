import { Cart } from './Cart'
import * as S from './Header.styles'

export function Header() {
  return (
    <S.Container>
      <S.Logo>WeMovies</S.Logo>

      <Cart />
    </S.Container>
  )
}
