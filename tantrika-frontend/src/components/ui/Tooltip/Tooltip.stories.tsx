import { ComponentMeta, Story } from '@storybook/react'
import { Tooltip } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    variant: {
      options: ['dark', 'light', 'success', 'warning', 'error', 'info'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tooltip>

const Template = (args: any) => (
  <div className="p-32">
    <Tooltip {...args} />
  </div>
)

export const DefaultTooltip: Story = Template.bind({})

DefaultTooltip.args = {
  content: 'label for my tooltip',
  children: <span>Tooltip text</span>,
  id: 'my-tooltip',
  variant: 'dark',
}

export const TooltipRight: Story = Template.bind({})

TooltipRight.args = {
  content: 'label for my tooltip',
  children: <span>Tooltip text</span>,
  id: 'my-tooltip',
  place: 'right',
  variant: 'info',
}

export const TooltipLeft: Story = Template.bind({})

TooltipLeft.args = {
  content: 'label for my tooltip',
  children: <span>Tooltip text</span>,
  id: 'my-tooltip',
  place: 'left',
  variant: 'warning',
}

export const TooltipBottom: Story = Template.bind({})

TooltipBottom.args = {
  content: 'label for my tooltip',
  children: <span>Tooltip text</span>,
  id: 'my-tooltip',
  place: 'bottom',
  variant: 'success',
}

export const TooltipOpenOnClick: Story = Template.bind({})

TooltipOpenOnClick.args = {
  content: 'label for my tooltip',
  children: <span>Tooltip text</span>,
  id: 'my-tooltip',
  place: 'top',
  openOnClick: true,
  variant: 'error',
}

const TemplateForIcon = (args: any) => (
  <div className="h-fit w-fit">
    <Tooltip {...args} />
  </div>
)

export const TooltipIcon: Story = TemplateForIcon.bind({})

TooltipIcon.args = {
  content: <Icon width={20} height={20} />,
  children: <span>Tooltip text</span>,
  id: 'my-tooltip',
  place: 'bottom',
  variant: 'light',
}
