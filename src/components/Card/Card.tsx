import { FC, JSX } from 'react'
import { Props } from './props.ts'
import './card.scss'

export const Card: FC<Props> = ({name, price, currency, image}): JSX.Element => {

  return (
    <div className='card-container'>
      <img src={image} className='card-image' alt={name}/>
      <div className='card-info'>
        <span className='card-text'>{name}</span>
        <span className='card-text'>{price} {currency}</span>
      </div>
    </div>
  )
}
