import { ComponentMeta, Story } from '@storybook/react'
import { TruncatedNav } from '..'

export default {
  title: 'Components/TruncatedNav',
  component: TruncatedNav,
  argTypes: {
    Component: {
      options: ['div'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TruncatedNav>
const Template = (args: any) => <TruncatedNav {...args} />
export const TruncatedNavDefault: Story = Template.bind({})

TruncatedNavDefault.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 70,
}

export const TruncatedNavWithLink: Story = Template.bind({})

TruncatedNavWithLink.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 50,
  background: 'text-blue-500',
  fade: true,
  textColor: 'text-green',
  href: '/',
}

export const TruncatedWithLabel: Story = Template.bind({})

TruncatedWithLabel.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 50,
  background: 'tex-red-500',
  fade: true,
  href: '/',
  moreLabel: 'read more',
}
