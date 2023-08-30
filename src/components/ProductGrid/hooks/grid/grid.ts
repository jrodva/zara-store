import { useState } from 'react'
import { GridHook } from './types.ts'
import { postGrid } from '../../../../services/gridService.ts'
import { Grid } from '../../../../interfaces/Grid.ts'

export const useGrid = (): GridHook => {
  const [isUpdatingGrid, setIsUpdatingGrid] = useState<boolean>(true)
  const [isFailedUpdatingGrid, setIsFailedUpdatingGrid] = useState<boolean>(false)

  const updateGrid = (grid: Grid[]): void => {
    setIsUpdatingGrid(true)
    postGrid(grid)
      .then(response => response.json())
      .then((data: Grid[]): void => {
        console.log('datooo ', data);
        setIsUpdatingGrid(false)
      })
      .catch((): void => {
        setIsUpdatingGrid(false)
        setIsFailedUpdatingGrid(true)
      })
  }

  return {
    updateGrid,
    isFailedUpdatingGrid,
    isUpdatingGrid
  }
}
