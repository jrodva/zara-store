import { JSX } from 'react'
import './App.scss'
import Header from './components/Header'

const App = (): JSX.Element => {

  return (
    <>
      <Header isAvailableToAddRows={true} isAvailableToSave={false} />
    </>
  )
}

export default App
