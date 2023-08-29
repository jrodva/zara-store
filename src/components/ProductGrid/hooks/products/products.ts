import {useEffect, useState} from 'react'
import { ProductsHook } from './types.ts'
import { Card } from '../../interfaces/Card.ts'
import { getProducts } from '../../../../services/productsService.ts'
import { parseProductsArrayToMatrix } from '../../../../utils/parseProductsArrayToMatrix.ts'
import queryString from 'query-string'

export const useProducts = (): ProductsHook => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [products, setProducts] = useState<Card[][]>([])
  const { ids } = queryString.parse(location.search)

  useEffect((): void => {
    if (ids) {
      getProducts(ids as string)
        .then(response => response.json())
        .then((products: Card[]): void => {
          setProducts(parseProductsArrayToMatrix(products))
          setIsLoading(false)
        })
        .catch((): void => {
          setErrorState()
        })
    } else {
      setErrorState()
    }
  }, [ids])

  const setErrorState = (): void => {
    setIsLoading(false)
    setIsError(true)
  }

  const addProductsRow = (): void => {
    const newProducts = [...products]

    newProducts.push([])
    setProducts(newProducts)
  }

  return {
    products,
    isError,
    isLoading,
    addProductsRow
  }
}
