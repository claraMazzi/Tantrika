import { ComponentMeta, Story } from '@storybook/react'
import { TruncatedContainer } from '..'

export default {
  title: 'Components/TruncatedContainer',
  component: TruncatedContainer,
  argTypes: {
    Component: {
      options: ['div'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TruncatedContainer>
const Template = (args: any) => <TruncatedContainer {...args} />
export const TruncatedTextDefault: Story = Template.bind({})

TruncatedTextDefault.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 70,
}

export const TruncatedTextRed: Story = Template.bind({})

TruncatedTextRed.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 50,
  background: 'text-blue-500',
  fade: true,
  textColor: 'text-green',
}

export const TruncatedWithLables: Story = Template.bind({})

TruncatedWithLables.args = {
  children:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ex eligendi sunt fuga, provident nesciunt officia sapiente, minima, quod ea possimus nihil deleniti ullam esse sint et cumque dolor. Ab.',
  limit: 50,
  background: 'tex-red-500',
  fade: true,
}
