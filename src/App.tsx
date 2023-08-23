import { JSX } from 'react'
import './App.scss'
import Header from './components/Header'

const App = (): JSX.Element => {

  return (
    <>
      <Header isAvailableToAddRows={false} isAvailableToSave={false} />
    </>
  )
}

export default App
