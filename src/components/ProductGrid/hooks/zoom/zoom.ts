import { useState } from 'react'
import { ZoomHook } from './types.ts'

export const useZoom = (): ZoomHook => {
  const [zoom, setZoom] = useState(1)

  return {
    zoom,
    setZoom
  }
}
