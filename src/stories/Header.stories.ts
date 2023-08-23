import type { Meta, StoryObj } from '@storybook/react'
import Header from '../components/Header'


const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllAvailable: Story = {
  args: {
    isAvailableToAddRows: true,
    isAvailableToSave: true
  },
};

export const AllUnavailable: Story = {
  args: {
    isAvailableToAddRows: false,
    isAvailableToSave: false
  },
};
