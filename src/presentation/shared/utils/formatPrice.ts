export function formatPrice(rawPrice: number) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(rawPrice)
}
