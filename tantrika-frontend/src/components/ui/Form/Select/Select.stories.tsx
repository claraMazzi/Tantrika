import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputStatus } from '~types'
import { SelectOption } from '../FormGroup/FormGroup.type'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
}
export default meta

type Story = StoryObj<typeof Select>

const options: SelectOption[] = [
  {
    value: 'US',
    label: 'UNITED STATES',
  },
  { value: 'ARG', label: 'ARGENTINA' },
  { value: 'UK', label: 'UNITED KINGDOM' },
  { value: 'CH', label: 'CHILE' },
]

const SelectWithState = ({ ...props }) => {
  const { status, selectedOption } = props
  const [selected, setSelected] = useState<string>(selectedOption)
  const handleOnChange = (value: string) => {
    setSelected(value)
  }
  return (
    <Select
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
const infoProps = {
  status: 'info' as InputStatus,
  selectedOption: 'CH',
}
export const SelectInfo: Story = {
  render: () => <SelectWithState {...infoProps} />,
}

const errorProps = {
  status: 'error' as InputStatus,
  selectedOption: 'ARG',
}
export const SelectError: Story = {
  render: () => <SelectWithState {...errorProps} />,
}

const warningProps = {
  status: 'warning' as InputStatus,
  selectedOption: 'UK',
}
export const SelectWarning: Story = {
  render: () => <SelectWithState {...warningProps} />,
}
