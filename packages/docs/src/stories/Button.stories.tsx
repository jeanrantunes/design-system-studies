import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@ignite-ui/react'
import type { ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Test',
  },
}
export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Test 2',
    size: 'big',
  },
}
