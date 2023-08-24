import { FC, JSX } from 'react'
import { Card } from '../interfaces/Card.ts'
import './productCard.scss'

export const ProductCard: FC<Card> = ({name, price, currency, image}): JSX.Element => {

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
