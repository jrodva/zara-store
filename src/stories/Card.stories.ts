import type { Meta, StoryObj } from '@storybook/react'
import Card from '../components/Card'


const meta = {
  title: 'Product Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllData: Story = {
  args: {
    name: 'JEANS SLIM CROPPED',
    price: 39.95,
    currency: 'EUR',
    image: 'https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/468/8062333427_15_1_1.jpg?ts=1692355484140'
  },
};
