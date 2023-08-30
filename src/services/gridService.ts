import { Grid } from '../interfaces/Grid.ts'

export const postGrid = (grid: Grid[]) =>
  fetch(import.meta.env.VITE_GRID_API_URL, { method: 'POST', mode: 'cors', body: JSON.stringify(grid) });
