import {FC, JSX, useEffect} from 'react'
import './productGrid.scss'
import Header from '@components/Header'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import ProductRow from './ProductRow'
import { useProducts} from './hooks/products/products.ts'
import { useZoom } from './hooks/zoom/zoom.ts'
import { useTemplates } from './hooks/templates/templates.ts'
import { useGrid } from './hooks/grid/grid.ts'
import ErrorMessage from '@components/ProductGrid/ErrorMessage'
import Loader from '@components/ProductGrid/Loader'

export const ProductGrid: FC = (): JSX.Element => {
  const { products, isLoading, isError, addEmptyProductsRow, setProducts } = useProducts()
  const {
    templates,
    setSelectedTemplates,
    selectedTemplates,
  } = useTemplates({ productsRows: products.length })
  const { zoom, setZoom } = useZoom()
  const { updateGrid, grid, isLoadingGrid, isLoadingGridError } = useGrid()

  useEffect(() => {
    if (Object.keys(grid).length > 0) {
      const products = grid.map(grid =>  grid.products)
      const savedSelectedTemplates = grid.map(grid =>  grid.alignment)

      setSelectedTemplates(savedSelectedTemplates)
      setProducts(products)
    }

  }, [grid, isLoadingGrid, isLoadingGridError])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const {
      source: { index: sourceIndex, droppableId: sourceDroppableId },
      destination: { index: destinationIndex, droppableId: destinationDroppableId }
    } = result

    if (sourceDroppableId === destinationDroppableId && sourceIndex === destinationIndex) return

    const sourceRow = [...products[+sourceDroppableId]]
    const destRow = [...products[+destinationDroppableId]]
    const [movedElement] = sourceRow.splice(sourceIndex, 1)
    const newRows = [...products]

    destRow.splice(destinationIndex, 0, movedElement)
    newRows[+sourceDroppableId] = sourceRow
    newRows[+destinationDroppableId] = destRow
    setProducts(newRows)
  }

  const saveChanges = () => {
    const grid = products.map((row, rowIndex) => {
      return {
        alignment: selectedTemplates[rowIndex],
        products: row
      }
    })
    updateGrid(grid)
  }

  const addProductsRow = () => {
    addEmptyProductsRow()
    setSelectedTemplates([...selectedTemplates, 'center'])
  }

  return (
    <div className='app'>
      {
        !isError &&
        !isLoading &&
        <header className='app-header'>
          <Header
            isAvailableToAddRows={products.length < products.flat(1).length}
            isAvailableToSave={products.every((row) => row.length > 0)}
            setZoom={setZoom}
            zoom={zoom}
            addProductsRow={addProductsRow}
            saveChanges={saveChanges}/>
        </header>
      }
      {
        isLoading && <Loader/>
      }
      {
        isError && <ErrorMessage/>
      }
      {
        products.length > 0 && selectedTemplates.length > 0 && (
          <div className='list-container' style={ { transform: `scale(${zoom})` } }>
            <DragDropContext onDragEnd={handleDragEnd}>
              {
                products.map((row, rowIndex) => (
                  <ProductRow
                    key={rowIndex.toString()}
                    row={row}
                    rowIndex={rowIndex}
                    selectedTemplates={selectedTemplates}
                    setSelectedTemplates={setSelectedTemplates}
                    templates={templates}/>
                ))
              }
            </DragDropContext>
          </div>
        )
      }
    </div>
  )
}
