import Image from 'next/image'
import * as S from './ProductsNotFound.styles'

import notFoundIllustration from '@/public/images/not_found_illustration.svg'
import { Button } from '@/presentation/shared/components/form'
import Router from 'next/router'
import { APP_ROUTES } from '@/presentation/shared/constants/routes'

export function ProductsNotFound() {
  function goToHome() {
    Router.push(APP_ROUTES.HOME)
  }

  return (
    <S.Container>
      <h1>Parece que não há nada por aqui :(</h1>

      <Image
        src={notFoundIllustration}
        alt="Mulher demonstrando tristeza por não ter nada no seu carrinho."
      />

      <Button onClick={goToHome}>VOLTAR</Button>
    </S.Container>
  )
}
