import type { Meta, StoryObj } from '@storybook/react'
import ProductGrid from '../components/ProductGrid'


const meta = {
  title: 'Product Grid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
} satisfies Meta<typeof ProductGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OneRow: Story = {
  args: {
    cards: [
      [
        {
          id: 4,
          name: 'JEANS SLIM CROPPED',
          price: 39.95,
          currency: 'EUR',
          image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
        },
        {
          id: 5,
          name: 'JEANS SLIM CROPPED',
          price: 39.95,
          currency: 'EUR',
          image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
        },
        {
          id: 6,
          name: 'JEANS SLIM CROPPED',
          price: 39.95,
          currency: 'EUR',
          image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
        }
      ],
      [
        {
          id: 40,
          name: 'JEANS SLIM CROPPED',
          price: 39.95,
          currency: 'EUR',
          image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
        },
        {
          id: 50,
          name: 'JEANS SLIM CROPPED',
          price: 39.95,
          currency: 'EUR',
          image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
        },
        {
          id: 60,
          name: 'JEANS SLIM CROPPED',
          price: 39.95,
          currency: 'EUR',
          image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
        }
      ]
    ]
  }
};
