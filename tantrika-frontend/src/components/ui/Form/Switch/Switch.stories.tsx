import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputStatus } from '~types'
import { FormGroup, FormGroupLabel, FormGroupSwitch } from '../FormGroup'

type Story = StoryObj<{ status: InputStatus; checked: boolean; label: string }>

const SwitchWithState = ({ ...props }) => {
  const { status, checked, label } = props
  const [selected, setSelected] = useState<boolean>(checked)
  const handleOnChange = (value: boolean) => {
    setSelected(value)
  }

  return (
    <FormGroup status={status} name="checkbox-test">
      <div className="flex items-center gap-4">
        <FormGroupSwitch checked={selected} onChange={handleOnChange} />
        <FormGroupLabel>{label}</FormGroupLabel>
      </div>
    </FormGroup>
  )
}
export const SwitchInfo: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    status: 'info' as InputStatus,
    checked: false,
    label: 'Switch info',
  },
}

export const SwitchError: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    status: 'error' as InputStatus,
    checked: false,
    label: 'Switch error',
  },
}

export const SwitchWarning: Story = {
  render: (args) => <SwitchWithState {...args} />,
  args: {
    status: 'warning' as InputStatus,
    checked: false,
    label: 'Switch warning',
  },
}

const meta: Meta<typeof SwitchWithState> = {
  title: 'Form/Switch',
  component: SwitchWithState,
  argTypes: {
    status: {
      options: ['info', 'error', 'warning'],
      control: { type: 'select' },
    },
  },
}
export default meta
