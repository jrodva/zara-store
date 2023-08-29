import { Card } from '../../interfaces/Card.ts'

export interface ProductsHook {
  products: Card[][]
  isError: boolean
  isLoading: boolean
  addEmptyProductsRow: () => void
  setProducts: (products: Card[][]) => void
}
