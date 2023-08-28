import { FC, JSX, useEffect, useRef, useState } from 'react'
import './productCard.scss'
import { Props } from './props.ts'

export const ProductCard: FC<Props> = ({name, price, currency, image, zoom}): JSX.Element => {
  const [dynamicWidth, setDynamicWidth] = useState<number | undefined>(undefined);
  const [initialWidth, setInitialWidth] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      setInitialWidth(elementRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    if (initialWidth && elementRef.current) {
      setDynamicWidth(Math.round(initialWidth * zoom * 10) / 10)
    }
  }, [zoom, initialWidth])

  return (
    <div ref={elementRef} className='card-container' style={ { width: dynamicWidth } }>
      <img src={image} alt={name}/>
      <div className='card-info'>
        <span className='card-text'>{name}</span>
        <span className='card-text'>{price} {currency}</span>
      </div>
    </div>
  )
}
