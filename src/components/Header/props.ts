export interface Props {
  isAvailableToSave: boolean
  isAvailableToAddRows: boolean
  setZoom: (zoom: number) => void
  zoom: number
  addProductsRow: () => void
}
