import { render } from '@testing-library/react'
import ProductCard from '@components/ProductGrid/ProductCard'

test('ProductCard component renders correctly', () => {
  const mockProps = {
    id: 1,
    name: 'Sample Product',
    price: 99.99,
    currency: 'USD',
    image: 'https://static.zara.net/photos///2023/I/0/2/p/9794/300/716/2/w/247/9794300716_15_1_1.jpg?ts=1692188211373',
    zoom: 1.0,
  }

  const { getByText, getByAltText } = render(<ProductCard {...mockProps} />)

  // Check if product name and price are rendered
  expect(getByText('Sample Product')).toBeDefined()
  expect(getByText('99.99 USD')).toBeDefined()

  // Check if product image is rendered
  expect(getByAltText('Sample Product')).toBeDefined()
})
