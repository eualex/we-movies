import { createContext } from './createContext'

type CardProps = {
  productsId: number[]
}

export const [CartProvider, useCart] = createContext<CardProps>({
  productsId: [],
})
