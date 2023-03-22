import { APP_ROUTES } from '@/presentation/shared/constants/routes'

import { InformationBox } from '@/presentation/shared/components/layout/InformationBox/InformationBox'

import orderSuccessillustration from '@/public/images/purshase_success_illustration.svg'

export function OrderCompletedSuccessfully() {
  return (
    <InformationBox>
      <InformationBox.Message>
        Compra realizada com sucesso!
      </InformationBox.Message>

      <InformationBox.Image
        src={orderSuccessillustration}
        alt="Homem demonstrando felicidade pro ter finalizado sua compra."
      />

      <InformationBox.Button href={APP_ROUTES.HOME} />
    </InformationBox>
  )
}
