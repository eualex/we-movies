import { APP_ROUTES } from '@/presentation/shared/constants/routes'

import { InformationBox } from '@/presentation/shared/components/layout/InformationBox/InformationBox'

import notFoundIllustration from '@/public/images/not_found_illustration.svg'

export function ProductsNotFound() {
  return (
    <InformationBox>
      <InformationBox.Message>
        Parece que não há nada por aqui :(
      </InformationBox.Message>

      <InformationBox.Image
        src={notFoundIllustration}
        alt="Mulher demonstrando tristeza por não ter nada no seu carrinho."
      />

      <InformationBox.Button href={APP_ROUTES.HOME} />
    </InformationBox>
  )
}
