import { Story, Meta } from '@storybook/react'
import Heading, { HeadingsProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingsProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Populars'
}
