import {useEffect, useState} from 'react'
import { TemplatesHook } from './types.ts'
import { getTemplates } from '../../../../services/templatesService.ts'
import { Template } from '../../../../interfaces/Template.ts'

export const useTemplates = ({ productsRows }: { productsRows: number } ): TemplatesHook => {
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

  useEffect((): void => {
    productsRows && selectedTemplates.length === 0 && initSelectedTemplates(templates)
  }, [productsRows, templates, selectedTemplates])

  const initSelectedTemplates = (templates: Template[]): void => {
    const templatesAlignments = templates.map((template) => template.alignment)
    const randomTemplates = Array.from(
      { length: productsRows },
      () => templatesAlignments[Math.floor(Math.random() * templatesAlignments.length)]
    )

    setSelectedTemplates(randomTemplates)
  }

  const exchangeSelectedTemplates = (fromIndex: number, toIndex: number): void => {
    const newSelectedTemplates = [...selectedTemplates]
    const fromTemplate = newSelectedTemplates[fromIndex]
    const toTemplate = newSelectedTemplates[toIndex]

    newSelectedTemplates[fromIndex] = toTemplate
    newSelectedTemplates[toIndex] = fromTemplate
    setSelectedTemplates(newSelectedTemplates)
  }


  return {
    templates,
    isError,
    isLoading,
    selectedTemplates,
    setSelectedTemplates,
    exchangeSelectedTemplates
  }
}
