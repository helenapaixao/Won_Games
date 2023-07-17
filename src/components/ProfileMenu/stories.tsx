import { Story, Meta } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    default:'won-dark'
  }
} as Meta

export const Default: Story = () => <ProfileMenu />
