import {FC, JSX, useEffect, useState} from 'react'
import './productGrid.scss'
import Header from '../Header'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import ProductRow from './ProductRow'
import { Card } from './interfaces/Card.ts'
import { useProducts} from './hooks/products/products.ts'
import { useZoom } from './hooks/zoom/zoom.ts'

export const ProductGrid: FC = (): JSX.Element => {
  const { products, isLoading, isError, addEmptyProductsRow, setProducts } = useProducts()
  const [rows, setRows] = useState<Card[][]>([[]])
  const { zoom, setZoom } = useZoom()

  useEffect(() => {
    !isLoading && !isError && setRows(products)
  }, [isLoading, isError, products])

  useEffect(() => {
    setProducts(rows)
  }, [rows, setProducts])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const {
      source: { index: sourceIndex, droppableId: sourceDroppableId },
      destination: { index: destinationIndex, droppableId: destinationDroppableId }
    } = result

    if (sourceDroppableId === destinationDroppableId && sourceIndex === destinationIndex) return

    const sourceRow = [...rows[+sourceDroppableId]]
    const destRow = [...rows[+destinationDroppableId]]
    const [movedElement] = sourceRow.splice(sourceIndex, 1)
    const newRows = [...rows]

    destRow.splice(destinationIndex, 0, movedElement)
    newRows[+sourceDroppableId] = sourceRow
    newRows[+destinationDroppableId] = destRow
    setRows(newRows)
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <Header
          isAvailableToAddRows={products.length < products.flat(1).length}
          isAvailableToSave={products.every((row) => row.length > 0)}
          setZoom={setZoom}
          zoom={zoom}
          addProductsRow={addEmptyProductsRow}/>
      </header>
      {
        isLoading && <div>Loading...</div>
      }
      {
        isError && <div>Something went wrong...</div>
      }
      {
        products.length > 0 && (
          <div className='list-container'>
            <DragDropContext onDragEnd={handleDragEnd}>
              {
                rows.map((row, rowIndex) => (
                  <ProductRow
                    key={rowIndex.toString()}
                    row={row}
                    rowIndex={rowIndex}
                    setRows={setRows}
                    rows={rows}
                    zoom={zoom}/>
                ))
              }
            </DragDropContext>
          </div>
        )
      }
    </div>
  )
}
