import { FC, JSX } from 'react'
import './productRow.scss'
import { Draggable } from 'react-beautiful-dnd'
import ProductCard from '../ProductCard'
import { Props } from './props.ts'
import { StrictModeDroppable } from '../../../utils/StrictModeDroppable.tsx'
import { MAX_PRODUCTS_PER_ROW } from '../../../constants/products.ts'

export const ProductRow: FC<Props> = ({ row, rowIndex, setRows, rows}): JSX.Element => {

  const handleMoveRow = (fromIdx: number, toIdx: number) => {
    const movedRow = rows[fromIdx]

    rows.splice(fromIdx, 1)
    rows.splice(toIdx, 0, movedRow)
    setRows([...rows])
  }

  return (
    <StrictModeDroppable
      key={rowIndex}
      droppableId={`${rowIndex}`}
      direction='horizontal'
      isDropDisabled={row.length === MAX_PRODUCTS_PER_ROW}>
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
  )
}
