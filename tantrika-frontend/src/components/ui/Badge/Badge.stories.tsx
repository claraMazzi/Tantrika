import { ComponentMeta, Story } from '@storybook/react'
import { Badge } from '.'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    Component: {
      options: ['div'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Badge>

const Template = (args: any) => <Badge {...args} />

export const BadgeBlackMediumWithLongText: Story = Template.bind({})

BadgeBlackMediumWithLongText.args = {
  color: 'black',
  label: 'Longer text!!!!!!!!',
}

export const BadgeYellowSmall: Story = Template.bind({})

BadgeYellowSmall.args = {
  color: 'yellow',
  size: 'sm',
  label: 'Yellow badge',
}
export const BadgeWhiteMedium: Story = Template.bind({})

BadgeWhiteMedium.args = {
  color: 'white',
  label: 'Badge white',
}

export const BadgeBlueLarge: Story = Template.bind({})

BadgeBlueLarge.args = {
  color: 'blue',
  size: 'lg',
  label: 'Blue badge',
}
