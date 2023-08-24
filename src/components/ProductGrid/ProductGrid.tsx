import { FC, JSX, useState } from 'react'
import { Props } from './props.ts'
import './productGrid.scss'
import Header from '../Header'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'
import { StrictModeDroppable } from '../../utils/StrictModeDroppable.tsx'
import ProductCard from './ProductCard'

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

  const handleMoveRow = (fromIdx: number, toIdx: number) => {
    const movedRow = rows[fromIdx]

    rows.splice(fromIdx, 1)
    rows.splice(toIdx, 0, movedRow)
    setRows([...rows])
  }


  return (
    <div className='app'>
      <header className='app-header'>
        <Header isAvailableToAddRows isAvailableToSave></Header>
      </header>
      <div className='list-container'>
        <DragDropContext onDragEnd={handleDragEnd}>
          {rows.map((row, rowIndex) => (
            <StrictModeDroppable key={rowIndex} droppableId={`${rowIndex}`} direction='horizontal'>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className='row'>

                  <div className='row-items'>
                    {row.map((element, index) => (
                      <Draggable key={element.id} draggableId={element.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='element'>
                            <ProductCard {...element} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>

                  <div className='row-controls'>
                    <button
                      onClick={() => handleMoveRow(rowIndex, rowIndex - 1)}
                      disabled={rowIndex === 0}>
                      Up
                    </button>
                    <button
                      onClick={() => handleMoveRow(rowIndex, rowIndex + 1)}
                      disabled={rowIndex === rows.length - 1}>
                      Down
                    </button>
                  </div>
                </div>
              )}
            </StrictModeDroppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  )
}
