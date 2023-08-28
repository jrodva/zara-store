import {useEffect, useState} from 'react'
import { ProductsHook } from './types.ts'
import { Card } from '../interfaces/Card.ts'
import { getProducts } from '../../../services/productsService.ts'

export const useProducts = (): ProductsHook => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [products, setProducts] = useState<Card[][]>([])

  useEffect((): void => {
    getProducts()
      .then(response => response.json())
      .then((products: Card[][]): void => {
        setProducts(products)
        setIsLoading(false)
      })
      .catch((): void => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [])


  return {
    products,
    isError,
    isLoading,
  }
}
