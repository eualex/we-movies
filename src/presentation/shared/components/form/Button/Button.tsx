import { HTMLAttributes } from 'react'

import * as S from './Button.styles'

type Props = HTMLAttributes<HTMLButtonElement> & { variant?: S.Variant }

export function Button(props: Props) {
  return <S.Container {...props} />
}

Button.Icon = S.Icon
Button.IconGroup = S.IconGroup
