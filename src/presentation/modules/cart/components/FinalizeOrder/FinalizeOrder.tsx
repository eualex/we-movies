import { useCart } from '@/presentation/shared/contexts/CartContext'
import { formatPrice } from '@/presentation/shared/utils/formatPrice'

import { Button } from '@/presentation/shared/components/form'

import * as S from './FinalizeOrder.styles'
import { useMemo } from 'react'
import Router from 'next/router'
import { APP_ROUTES } from '@/presentation/shared/constants/routes'

export function FinalizeOrder() {
  const [products, setCart] = useCart((store) => store.products)

  const total = useMemo(
    () => products.reduce((acc, current) => acc + current.amount, 0),
    [products],
  )

  function handleFinalizeOrder() {
    setCart({ products: [] })

    Router.push(APP_ROUTES.ORDER_SUCCESSFULLY)
  }

  return (
    <S.Container>
      <Button onClick={handleFinalizeOrder}>FINALIZAR PEDIDO</Button>
      <div>
        <span>TOTAL</span>
        <h1>{formatPrice(total)}</h1>
      </div>
    </S.Container>
  )
}
