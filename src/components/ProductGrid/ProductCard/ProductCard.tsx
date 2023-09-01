import { FC, JSX, useRef } from 'react'
import './productCard.scss'
import { Props } from './props.ts'

export const ProductCard: FC<Props> = ({name, price, currency, image}): JSX.Element => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={elementRef} className='card-container'>
      <img src={image} alt={name}/>
      <div className='card-info'>
        <span className='card-text'>{name}</span>
        <span className='card-text'>{price} {currency}</span>
      </div>
    </div>
  )
}
