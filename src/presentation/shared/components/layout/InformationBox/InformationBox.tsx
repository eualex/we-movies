import Router from 'next/router'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

import { Button as ButtonPrimitive } from '@/presentation/shared/components/form'

import * as S from './InformationBox.styles'

export function InformationBox({ children }: PropsWithChildren) {
  return <S.Container>{children}</S.Container>
}

function Button({ href }: { href: string }) {
  function goTo() {
    Router.push(href)
  }

  return <ButtonPrimitive onClick={goTo}>VOLTAR</ButtonPrimitive>
}

InformationBox.Message = S.Message
InformationBox.Image = Image
InformationBox.Button = Button
