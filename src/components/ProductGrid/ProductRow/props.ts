import { Card } from '../../../interfaces/Card.ts'
import { Template } from '../../../interfaces/Template.ts'

export interface Props {
  row: Card[]
  rowIndex: number
  exchangeRows: (fromIndex: number, toIndex: number) => void
  exchangeSelectedTemplates: (fromIndex: number, toIndex: number) => void
  rows: Card[][]
  selectedTemplates: string[]
  setSelectedTemplates: (templates: string[]) => void
  templates: Template[]
  zoom: number
}
