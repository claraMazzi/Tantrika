import { ComponentMeta, Story } from '@storybook/react'
import { Skeleton } from '.'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    type: {
      options: ['block', 'image'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Skeleton>

const Template = (args: any) => <Skeleton {...args} />

export const DefaultSkeleton: Story = Template.bind({})

export const ImageSkeleton: Story = Template.bind({})

ImageSkeleton.args = {
  type: 'image',
  className: 'w-20 h-20',
}
