import {FC, JSX, useEffect, useState} from 'react'
import './productGrid.scss'
import Header from '../Header'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import ProductRow from './ProductRow'
import { Card } from './interfaces/Card.ts'
import { useProducts} from './hooks/products.ts'

export const ProductGrid: FC = (): JSX.Element => {
  const { products, isLoading, isError } = useProducts()
  const [rows, setRows] = useState<Card[][]>([[]])

  useEffect(() => {
    !isLoading && !isError && setRows(products)
  }, [isLoading, isError, products])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const sourceRowIdx = +result.source.droppableId
    const destRowIdx = +result.destination.droppableId
    const sourceRow = [...rows[sourceRowIdx]]
    const destRow = [...rows[destRowIdx]]
    const [movedElement] = sourceRow.splice(result.source.index, 1)
    const newRows = [...rows]

    destRow.splice(result.destination.index, 0, movedElement)
    newRows[sourceRowIdx] = sourceRow
    newRows[destRowIdx] = destRow
    setRows(newRows)
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <Header isAvailableToAddRows isAvailableToSave></Header>
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
                  <ProductRow key={rowIndex.toString()} row={row} rowIndex={rowIndex} setRows={setRows} rows={rows}/>
                ))
              }
            </DragDropContext>
          </div>
        )
      }
    </div>
  )
}
