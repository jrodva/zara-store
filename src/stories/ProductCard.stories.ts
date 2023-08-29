import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from '../components/ProductGrid/ProductCard'


const meta = {
  title: 'Product Card',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllDataZoom1: Story = {
  args: {
    id: 4,
    name: 'JEANS SLIM CROPPED',
    price: 39.95,
    currency: 'EUR',
    image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140',
    zoom: 1
  },
};

export const AllDataZoomHalf: Story = {
  args: {
    id: 6,
    name: 'JEANS SLIM CROPPED',
    price: 39.95,
    currency: 'EUR',
    image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140',
    zoom: 0.5
  },
};




