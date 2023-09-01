import { FC, JSX } from 'react'
import './productRow.scss'
import { Draggable } from 'react-beautiful-dnd'
import ProductCard from '../ProductCard'
import { Props } from './props.ts'
import { StrictModeDroppable } from '@utils/StrictModeDroppable.tsx'
import { MAX_PRODUCTS_PER_ROW } from '@constants/products.ts'
import deleteLogo from '@assets/delete.svg'

export const ProductRow: FC<Props> = ({
  row,
  rowIndex,
  templates,
  selectedTemplates,
  setSelectedTemplates}): JSX.Element => {

  const handleSelectTemplate = (alignment: string) => {
    const newSelectedTemplates = [...selectedTemplates]

    newSelectedTemplates[rowIndex] = alignment
    setSelectedTemplates(newSelectedTemplates)
  }

  const deleteRow = () => {

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
                    <ProductCard {...element} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>

          <div className='row-controls'>
            {
              templates.map((template) => (
                <img
                  key={template.name}
                  src={`./src/assets/${template.alignment}.svg`}
                  className={`${selectedTemplates[rowIndex] === template.alignment ? 'disabled' : ''}`}
                  alt={template.name}
                  onClick={() => handleSelectTemplate(template.alignment)}/>
              ))
            }
            <img
              src={deleteLogo}
              alt={'Delete Logo'}
              onClick={deleteRow}/>
          </div>
        </div>
      )}
    </StrictModeDroppable>
  )
}
