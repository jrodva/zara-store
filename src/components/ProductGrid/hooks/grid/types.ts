import { Grid } from '@interfaces/Grid.ts'

export interface GridHook {
  grid: Grid[]
  isLoadingGrid: boolean
  isLoadingGridError: boolean
  isFailedUpdatingGrid: boolean
  isUpdatingGrid: boolean
  updateGrid: (grid: Grid[]) => void
}
