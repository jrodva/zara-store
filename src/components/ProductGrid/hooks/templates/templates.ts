import {useEffect, useState} from 'react'
import { TemplatesHook } from './types.ts'
import { getTemplates } from '../../../../services/templatesService.ts'
import { Template } from '../../../../interfaces/Template.ts'

export const useTemplates = (): TemplatesHook => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([])

  useEffect((): void => {
    getTemplates()
      .then(response => response.json())
      .then((templates: Template[]): void => {
        setTemplates(templates)
        setIsLoading(false)
      })
      .catch((): void => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [])

  return {
    templates,
    isError,
    isLoading,
    selectedTemplates,
    setSelectedTemplates
  }
}
