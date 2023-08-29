import { Template } from '../../../../interfaces/Template.ts'

export interface TemplatesHook {
  templates: Template[]
  isError: boolean
  isLoading: boolean
  selectedTemplates: string[]
  setSelectedTemplates: (templates: string[]) => void
}
