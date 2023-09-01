import { useEffect, useState } from 'react'
import { GridHook } from './types.ts'
import {getGrid, postGrid} from '@services/gridService.ts'
import { Grid } from '@interfaces/Grid.ts'

export const useGrid = (): GridHook => {
  const [grid, setGrid] = useState<Grid[]>([])
  const [isLoadingGrid, setIsLoadingGrid] = useState<boolean>(true)
  const [isLoadingGridError, setIsLoadingGridError] = useState<boolean>(false)
  const [isUpdatingGrid, setIsUpdatingGrid] = useState<boolean>(true)
  const [isFailedUpdatingGrid, setIsFailedUpdatingGrid] = useState<boolean>(false)

  useEffect(() => {
    getGrid()
      .then(response => response.json())
      .then((grid: Grid[]): void => {
        setGrid(grid)
        setIsLoadingGrid(false)
      })
      .catch((): void => {
        setIsLoadingGrid(false)
        setIsLoadingGridError(true)
      })
  }, [])

  const updateGrid = (grid: Grid[]): void => {
    setIsUpdatingGrid(true)
    postGrid(grid)
      .then(response => response.json())
      .then((): void => {
        setIsUpdatingGrid(false)
      })
      .catch((): void => {
        setIsUpdatingGrid(false)
        setIsFailedUpdatingGrid(true)
      })
  }

  return {
    grid,
    isLoadingGridError,
    isLoadingGrid,
    updateGrid,
    isFailedUpdatingGrid,
    isUpdatingGrid
  }
}
