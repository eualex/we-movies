import { APP_ROUTES } from '@/presentation/shared/constants/routes'
import { Cart } from './Cart'
import * as S from './Header.styles'

export function Header() {
  return (
    <S.Container>
      <S.Logo href={APP_ROUTES.HOME}>WeMovies</S.Logo>

      <Cart />
    </S.Container>
  )
}
