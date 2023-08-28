import { Card } from '../interfaces/Card.ts'

export interface Props {
  row: Card[]
  rowIndex: number
  setRows: (rows: Card[][]) => void
  rows: Card[][]
}
