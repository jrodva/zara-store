import { ChangeEvent, FC, JSX } from 'react'
import './productRow.scss'
import { Draggable } from 'react-beautiful-dnd'
import ProductCard from '../ProductCard'
import { Props } from './props.ts'
import { StrictModeDroppable } from '../../../utils/StrictModeDroppable.tsx'
import { MAX_PRODUCTS_PER_ROW } from '../../../constants/products.ts'

export const ProductRow: FC<Props> = ({
  row,
  rowIndex,
  exchangeRows,
  exchangeSelectedTemplates,
  rows,
  templates,
  selectedTemplates,
  setSelectedTemplates,
  zoom}): JSX.Element => {

  const handleMoveRow = (fromIndex: number, toIndex: number) => {
    exchangeSelectedTemplates(fromIndex, toIndex)
    exchangeRows(fromIndex, toIndex)
  }

  const handleSelectTemplate = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSelectedTemplates = [...selectedTemplates]
    newSelectedTemplates[rowIndex] = event.target.value

    setSelectedTemplates(newSelectedTemplates)
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

          <div className='row-items' style={ { justifyContent: selectedTemplates[rowIndex] } }>
            {row.map((element, index) => (
              <Draggable key={element.id} draggableId={element.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='element'>
                    <ProductCard {...element} zoom={zoom}/>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>

          <div className='row-controls'>
            <div className='selector-container'>
              <select value={selectedTemplates[rowIndex]} onChange={handleSelectTemplate}>
                {
                  templates.map((template, optionIndex) => (
                    <option key={`temp-${optionIndex}`}  value={template.alignment}> { template.name } </option>
                  ))
                }
              </select>
            </div>
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
