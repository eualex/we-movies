import { useCart } from '@/presentation/shared/contexts/CartContext'

import { FinalizeOrder } from '../FinalizeOrder/FinalizeOrder'
import { Product } from '../Product/Product'
import { ProductsNotFound } from '../ProductsNotFound/ProductsNotFound'

import * as S from './ProductsSection.styles'

export function ProductsSection() {
  const [products] = useCart((store) => store.products)

  if (!products?.length) {
    return (
      <S.Container>
        <ProductsNotFound />
      </S.Container>
    )
  }

  return (
    <S.Container>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <FinalizeOrder />
    </S.Container>
  )
}
