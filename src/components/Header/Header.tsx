import { FC, JSX } from 'react'
import { Props } from './props.ts'
import zaraLogo from '@/assets/zara.svg'

export const Header: FC<Props>  = (): JSX.Element => {
  return (
    <>
      <img src={zaraLogo} className='zara-logo' alt='Zara logo'/>
    </>
  )
}
