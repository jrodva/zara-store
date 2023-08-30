import { FC, JSX } from 'react'
import { Props } from './props.ts'
import './header.scss'
import zaraLogo from '@assets/zara.svg'
import zoomInLogo from '@assets/zoom-in.svg'
import zoomOutLogo from '@assets/zoom-out.svg'
import { MAX_ZOOM, MIN_ZOOM } from '@constants/zoom.ts'

export const Header: FC<Props> = ({isAvailableToAddRows, isAvailableToSave, setZoom, zoom, addProductsRow, saveChanges}): JSX.Element => {
  const zoomIn = () => {
    zoom < MAX_ZOOM && setZoom(Math.round((zoom + 0.1) * 10) / 10)
  }

  const zoomOut = () => {
    zoom > MIN_ZOOM && setZoom(Math.round((zoom - 0.1) * 10) / 10)
  }

  return (
    <div className='header-container'>
      <div className='top-header'>
        <img src={zaraLogo} className='zara-logo' alt='Zara logo'/>
        <div className='zoom-container'>
          <img
            src={zoomOutLogo}
            className={`zoom-logo ${zoom === MIN_ZOOM ? 'disabled' : ''}`}
            alt='Zoom out logo'
            onClick={zoomOut}/>
          <img
            src={zoomInLogo}
            className={`zoom-logo ${zoom === MAX_ZOOM ? 'disabled' : ''}`}
            alt='Zoom in logo'
            onClick={zoomIn}/>
        </div>
        <div className='header-buttons-container'>
          <input
            type={'button'}
            value={'Add'}
            className='header-button'
            disabled={!isAvailableToAddRows}
            onClick={addProductsRow}
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
