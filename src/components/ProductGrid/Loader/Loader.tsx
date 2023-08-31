import { FC, JSX } from 'react'
import './loader.scss'

export const Loader: FC = (): JSX.Element => {
  return (
    <div className='loader-container'>
      <span>Loading products...</span>
    </div>
  )
}
