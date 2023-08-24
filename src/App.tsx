import { JSX } from 'react'
import './App.scss'
import ProductGrid from './components/ProductGrid'

const App = (): JSX.Element => {

  const cards = [
    [
      {
        id: 1,
        name: 'JEANS SLIM CROPPED',
        price: 39.95,
        currency: 'EUR',
        image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
      },
      {
        id: 10,
        name: 'JEANS SLIM CROPPED',
        price: 39.95,
        currency: 'EUR',
        image: 'https://static.zara.net/photos///2023/I/0/2/p/1538/310/400/2/w/248/1538310400_15_1_1.jpg?ts=1690535015005'
      },
      {
        id: 100,
        name: 'JEANS SLIM CROPPED',
        price: 39.95,
        currency: 'EUR',
        image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
      }
    ],
    [
      {
        id: 12,
        name: 'JEANS SLIM CROPPED',
        price: 39.95,
        currency: 'EUR',
        image: 'https://static.zara.net/photos///2023/I/0/2/p/1538/310/400/2/w/248/1538310400_15_1_1.jpg?ts=1690535015005'
      },
      {
        id: 13,
        name: 'JEANS SLIM CROPPED',
        price: 39.95,
        currency: 'EUR',
        image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
      },
      {
        id: 14,
        name: 'JEANS SLIM CROPPED',
        price: 39.95,
        currency: 'EUR',
        image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
      }
    ]
  ];


  return (
    <ProductGrid cards={cards}></ProductGrid>
  )
}

export default App
