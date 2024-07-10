import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputStatus } from '~types'
import { FormGroup, FormGroupLabel, FormGroupRadio } from '../FormGroup'
import { Radio } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: FormGroupRadio,
}
export default meta

type Story = StoryObj<typeof Radio>

const RadioWithState = ({ ...props }) => {
  const { status, value, label, activeValue } = props
  const [currentActiveValue, setCurrentActive] = useState(activeValue)
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentActive(event.target.value)
  }
  return (
    <FormGroup status={status} name="radio-test">
      <div className="flex items-center gap-4">
        <FormGroupRadio
          value={value}
          onChange={handleOnChange}
          activeValue={currentActiveValue}
        />
        <FormGroupLabel>{label}</FormGroupLabel>
      </div>
    </FormGroup>
  )
}
export const RadioInfo: Story = {
  render: (args) => <RadioWithState {...args} />,
  args: {
    value: 'UK',
    status: 'info' as InputStatus,
    label: 'Radio info',
  },
}

export const RadioError: Story = {
  render: (args) => <RadioWithState {...args} />,
  args: {
    value: 'UK',
    status: 'error' as InputStatus,
    label: 'Radio error',
  },
}

export const RadioWarning: Story = {
  render: (args) => <RadioWithState {...args} />,
  args: {
    value: 'UK',
    status: 'warning' as InputStatus,
    label: 'Radio warning',
  },
}
