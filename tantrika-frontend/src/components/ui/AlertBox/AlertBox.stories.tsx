import { ComponentMeta, Story } from '@storybook/react'
import { AlertBox } from '.'

export default {
  title: 'Components/AlertBox',
  component: AlertBox,
  argTypes: {
    type: {
      options: ['info', 'warning', 'danger', 'success'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof AlertBox>

const Template = (args: any) => <AlertBox {...args} />

export const InfoPlain: Story = Template.bind({})

InfoPlain.args = {
  message: 'Information message',
}

export const WarningPlain: Story = Template.bind({})

WarningPlain.args = {
  type: 'warning',
  message: 'Warning message',
}

export const DangerPlain: Story = Template.bind({})
DangerPlain.args = {
  type: 'danger',
  message: 'Danger message',
}

export const SuccessPlain: Story = Template.bind({})
SuccessPlain.args = {
  type: 'success',
  message: 'Success message',
}

export const InfoWithDismiss: Story = Template.bind({})
InfoWithDismiss.args = {
  type: 'info',
  message: 'information message',
  includeIcon: true,
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}

export const WarningWithDismiss: Story = Template.bind({})
WarningWithDismiss.args = {
  type: 'warning',
  message: 'Warning message',
  includeIcon: true,
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}

export const DangerWithDismiss: Story = Template.bind({})
DangerWithDismiss.args = {
  type: 'danger',
  message: 'Danger message',
  includeIcon: true,
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}

export const SuccessWithDismiss: Story = Template.bind({})
SuccessWithDismiss.args = {
  type: 'success',
  message: 'Success message',
  includeIcon: true,
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}

export const InfoWithAlt: Story = Template.bind({})
InfoWithAlt.args = {
  type: 'info',
  message: 'information message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
}

export const WarningWithAlt: Story = Template.bind({})
WarningWithAlt.args = {
  type: 'warning',
  message: 'Warning message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
}

export const DangerWithAlt: Story = Template.bind({})
DangerWithAlt.args = {
  type: 'danger',
  message: 'Danger message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
}

export const SuccessWithAlt: Story = Template.bind({})
SuccessWithAlt.args = {
  type: 'success',
  message: 'Success message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
}

export const InfoWithDismissAndAlt: Story = Template.bind({})
InfoWithDismissAndAlt.args = {
  type: 'info',
  message: 'information message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}

export const WarningWithDismissAndAlt: Story = Template.bind({})
WarningWithDismissAndAlt.args = {
  type: 'warning',
  message: 'Warning message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}

export const DangerWithDismissAndAlt: Story = Template.bind({})
DangerWithDismissAndAlt.args = {
  type: 'danger',
  message: 'Danger message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}

export const SuccessWithDismissAndAlt: Story = Template.bind({})
SuccessWithDismissAndAlt.args = {
  type: 'success',
  message: 'Success message',
  includeIcon: true,
  altAction: () => {
    console.log('Alt action')
  },
  dismissAlert: () => {
    console.log('Dismiss Action')
  },
}
