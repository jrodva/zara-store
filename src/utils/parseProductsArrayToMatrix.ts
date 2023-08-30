import { Card } from '@interfaces/Card.ts'
import { MAX_PRODUCTS_PER_ROW } from '@constants/products.ts'

export const parseProductsArrayToMatrix = (products: Card[]): Card[][] => {
  const productsMatrix: Card[][] = []
  const rows = Math.ceil(products.length / MAX_PRODUCTS_PER_ROW)

  for (let i = 0; i < rows; i++) {
    const row: Card[] = []

    for (let j = 0; j < MAX_PRODUCTS_PER_ROW; j++) {
      const product: Card = products[i * MAX_PRODUCTS_PER_ROW + j]

      if (product) {
        row.push(product)
      }
    }

    productsMatrix.push(row)
  }

  return productsMatrix
}
