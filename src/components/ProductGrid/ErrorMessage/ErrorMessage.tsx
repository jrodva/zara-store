import { FC, JSX } from 'react'
import './errorMessage.scss'

export const ErrorMessage: FC = (): JSX.Element => {
  return (
    <div className='error-message-container'>
      <span className='error-text'>Error loading products</span>
      <p>Remember to add product id's to the url</p>
      <p>Possible id's are: 1, 2, 3, 4, 5 and 6</p>
      <p>For example:</p>
      <ul>
        <li>
          <a href={'http://localhost:5173/?ids=[1,2,3,4,5,6]'}>http://localhost:5173/?ids=[1]</a>
        </li>
        <li>
          <a href={'http://localhost:5173/?ids=[1,2,3,4,5,6]'}>http://localhost:5173/?ids=[1,2]</a>
        </li>
        <li>
          <a href={'http://localhost:5173/?ids=[1,2,3,4,5,6]'}>http://localhost:5173/?ids=[1,2,3]</a>
        </li>
        <li>
          <a href={'http://localhost:5173/?ids=[1,2,3,4,5,6]'}>http://localhost:5173/?ids=[1,2,3,4]</a>
        </li>
        <li>
          <a href={'http://localhost:5173/?ids=[1,2,3,4,5,6]'}>http://localhost:5173/?ids=[1,2,3,4,5]</a>
        </li>
        <li>
          <a href={'http://localhost:5173/?ids=[1,2,3,4,5,6]'}>http://localhost:5173/?ids=[1,2,3,4,5,6]</a>
        </li>
      </ul>
    </div>
  )
}
