import { createContext } from './createContext'

type Movie = {
  id: number
  title: string
  price: number
  image: string
  amount: number
}

type CardProps = {
  products: Movie[]
}

export const [CartProvider, useCart] = createContext<CardProps>({
  products: [],
})
