import { FC, JSX } from 'react'
import { Props } from './props.ts'
import './header.scss'
import zaraLogo from '@/assets/zara.svg'

export const Header: FC<Props> = ({isAvailableToAddRows, isAvailableToSave}): JSX.Element => {

  const addRow = () => {

  }

  const saveChanges = () => {

  }

  return (
    <div className='header-container'>
      <img src={zaraLogo} className='zara-logo' alt='Zara logo'/>
      <input
        type={'button'}
        value={'Add row'}
        className='header-button'
        disabled={!isAvailableToAddRows}
        onClick={addRow}
      />
      <input
        type={'button'}
        value={'Save changes'}
        className='header-button'
        disabled={!isAvailableToSave}
        onClick={saveChanges}
      />
    </div>
  )
}
