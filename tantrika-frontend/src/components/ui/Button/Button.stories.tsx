import { ComponentMeta, Story } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    Component: {
      options: ['a', 'input', 'button'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>

const Template = (args: any) => <Button {...args} />
export const DefaultButtonSolid: Story = Template.bind({})

DefaultButtonSolid.args = {
  Component: 'button',
  children: 'Button',
}

export const DefaultButtonOutline: Story = Template.bind({})

DefaultButtonOutline.args = {
  Component: 'button',
  children: 'Button',
  style: 'outline',
  color: 'primary',
}

export const DefaultButtonGhost: Story = Template.bind({})

DefaultButtonGhost.args = {
  Component: 'button',
  children: 'Button',
  style: 'ghost',
  color: 'primary',
}

export const ButtonPill: Story = Template.bind({})

ButtonPill.args = {
  Component: 'button',
  rounded: 'pill',
  children: 'Button',
}

export const ButtonFullRounded: Story = Template.bind({})

ButtonFullRounded.args = {
  Component: 'button',
  rounded: 'full',
  children: 'Button',
}

export const DefaultButtonTextLarge: Story = Template.bind({})

DefaultButtonTextLarge.args = {
  Component: 'button',
  children: 'large large',
}

export const ButtonPillTextLarge: Story = Template.bind({})

ButtonPillTextLarge.args = {
  Component: 'button',
  rounded: 'pill',
  children: 'large large text',
}

export const ButtonFullRoundedTextLarge: Story = Template.bind({})

ButtonFullRoundedTextLarge.args = {
  Component: 'button',
  rounded: 'full',
  children: 'large large text',
}

export const CustomWidthAndHeightButton: Story = Template.bind({})

CustomWidthAndHeightButton.args = {
  Component: 'button',
  children: 'Button',
  width: 200,
  height: 80,
}

export const DefaultButtonLoading: Story = Template.bind({})

DefaultButtonLoading.args = {
  Component: 'button',
  children: 'Button',
  loading: true,
}

export const DefaultButtonDisabled: Story = Template.bind({})

DefaultButtonDisabled.args = {
  Component: 'button',
  children: 'Button',
  disabled: true,
}

export const ButtonInputDefault: Story = Template.bind({})

ButtonInputDefault.args = {
  Component: 'input',
  value: 'Input',
}

export const ButtonInputPill: Story = Template.bind({})

ButtonInputPill.args = {
  Component: 'input',
  rounded: 'pill',
  value: 'Input',
}

export const ButtonInputFullRounded: Story = Template.bind({})

ButtonInputFullRounded.args = {
  Component: 'input',
  rounded: 'full',
  value: 'Input',
}
