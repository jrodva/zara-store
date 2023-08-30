import { Grid } from '@interfaces/Grid.ts'

export const postGrid = (grid: Grid[]) => {
  const gridWithIds = grid.map((gridItem, index) => ({ ...gridItem, id: index + 1 }))

  return fetch(
    import.meta.env.VITE_GRID_API_URL,
    {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(gridWithIds),
      headers: { 'Content-Type': 'application/json' }
    }
  )
}

