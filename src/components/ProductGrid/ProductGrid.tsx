import { FC, JSX, useState } from 'react'
import { Props } from './props.ts'
import './productGrid.scss'
import Header from '../Header'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import ProductRow from './ProductRow'

export const ProductGrid: FC<Props> = ({ cards }): JSX.Element => {
  const [rows, setRows] = useState(cards)

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
      <div className='list-container'>
        <DragDropContext onDragEnd={handleDragEnd}>
          {rows.map((row, rowIndex) => (
            <ProductRow row={row} rowIndex={rowIndex} setRows={setRows} rows={rows}/>
          ))}
        </DragDropContext>
      </div>
    </div>
  )
}
