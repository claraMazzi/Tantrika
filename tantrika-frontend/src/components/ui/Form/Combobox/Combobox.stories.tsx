import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputStatus } from '~types'
import { SelectOption } from '../FormGroup/FormGroup.type'
import { ComboboxComponent } from './Combobox'

const meta: Meta<typeof ComboboxComponent> = {
  title: 'Form/Combobox',
  component: ComboboxComponent,
}
export default meta

type Story = StoryObj<typeof ComboboxComponent>

const options: SelectOption[] = [
  {
    value: 'US',
    label: 'UNITED STATES',
  },
  { value: 'ARG', label: 'ARGENTINA' },
  { value: 'UK', label: 'UNITED KINGDOM' },
  { value: 'CH', label: 'CHILE' },
  { value: 'UAE', label: 'UNITED ARAB EMIRATES' },
]

const ComboboxWithState = ({ ...props }) => {
  const { status, selectedOption } = props
  const [selected, setSelected] = useState<string>(selectedOption)
  const handleOnChange = (value: string) => {
    setSelected(value)
  }
  return (
    <ComboboxComponent
      className={''}
      status={status}
      id={'select'}
      name={'select'}
      options={options}
      selectedOption={selected}
      onChange={handleOnChange}
    />
  )
}
export const SelectInfo: Story = {
  render: (args) => <ComboboxWithState {...args} />,
  args: {
    status: 'info' as InputStatus,
    selectedOption: 'CH',
  },
}

export const SelectError: Story = {
  render: (args) => <ComboboxWithState {...args} />,
  args: {
    status: 'error' as InputStatus,
    selectedOption: 'ARG',
  },
}

export const SelectWarning: Story = {
  render: (args) => <ComboboxWithState {...args} />,
  args: {
    status: 'warning' as InputStatus,
    selectedOption: 'UK',
  },
}
