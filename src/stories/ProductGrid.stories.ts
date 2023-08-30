import type { Meta, StoryObj } from '@storybook/react'
import ProductGrid from '../components/ProductGrid'

const meta = {
  title: 'Product Grid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
} satisfies Meta<typeof ProductGrid>

export default meta

type Story = StoryObj<typeof meta>

export const ErrorLoad: Story = {
  args: { },
}
