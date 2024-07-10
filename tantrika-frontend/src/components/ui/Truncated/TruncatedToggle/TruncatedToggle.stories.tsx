import { ComponentMeta, Story } from '@storybook/react'
import { TruncatedToggle } from '..'

export default {
  title: 'Components/TruncatedToggle',
  component: TruncatedToggle,
  argTypes: {
    Component: {
      options: ['div'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TruncatedToggle>
const Template = (args: any) => <TruncatedToggle {...args} />
export const TruncatedToggleDefault: Story = Template.bind({})

TruncatedToggleDefault.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 70,
}

export const TruncatedToggleMoreLabel: Story = Template.bind({})

TruncatedToggleMoreLabel.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 50,
  background: 'text-green-500',
  fade: true,
  moreLabel: 'read more',
}

export const TruncatedToggleLessLabel: Story = Template.bind({})

TruncatedToggleLessLabel.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 50,
  background: 'text-blue-500',
  fade: true,
  textColor: 'text-red-500',
  lessLabel: 'read less',
}

export const TruncatedWithLables: Story = Template.bind({})

TruncatedWithLables.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 50,
  background: 'text-red-500',
  fade: true,
  moreLabel: 'read more',
  lessLabel: 'read less',
}
