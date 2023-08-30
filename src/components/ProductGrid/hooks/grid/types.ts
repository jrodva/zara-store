import { Grid } from '../../../../interfaces/Grid.ts'

export interface GridHook {
  isFailedUpdatingGrid: boolean
  isUpdatingGrid: boolean
  updateGrid: (grid: Grid[]) => void
}
