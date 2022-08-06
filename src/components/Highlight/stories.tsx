import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead Redemption 2',
    backgrounfImage: '/img/red-dead-img.jpg',
    subtitle: 'Come see John new adventure ',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
