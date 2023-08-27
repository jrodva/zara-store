import { FC, JSX } from 'react'
import { Props } from './props.ts'
import './header.scss'
import zaraLogo from '@/assets/zara.svg'
import zoomInLogo from '@/assets/zoom-in.svg'
import zoomOutLogo from '@/assets/zoom-out.svg'

export const Header: FC<Props> = ({isAvailableToAddRows, isAvailableToSave}): JSX.Element => {

  const addRow = () => {

  }

  const saveChanges = () => {

  }

  return (
    <div className='header-container'>
      <div className='top-header'>
        <img src={zaraLogo} className='zara-logo' alt='Zara logo'/>
        <div className='zoom-container'>
          <img src={zoomOutLogo} className='zoom-logo' alt='Zoom out logo'/>
          <img src={zoomInLogo} className='zoom-logo' alt='Zoom in logo'/>
        </div>
        <div className='header-buttons-container'>
          <input
            type={'button'}
            value={'Add'}
            className='header-button'
            disabled={!isAvailableToAddRows}
            onClick={addRow}
          />
          <input
            type={'button'}
            value={'Save'}
            className='header-button'
            disabled={!isAvailableToSave}
            onClick={saveChanges}
          />
        </div>
      </div>
      <div className='bottom-header'>
        <h1>Jeans</h1>
      </div>
    </div>
  )
}
