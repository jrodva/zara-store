import { Card } from '@interfaces/Card.ts'
import { Template } from '@interfaces/Template.ts'

export interface Props {
  row: Card[]
  rowIndex: number
  selectedTemplates: string[]
  setSelectedTemplates: (templates: string[]) => void
  templates: Template[]
  zoom: number
}
