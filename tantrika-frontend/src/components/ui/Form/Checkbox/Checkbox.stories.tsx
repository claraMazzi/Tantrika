import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputStatus } from '~types'
import { FormGroup, FormGroupCheckbox, FormGroupLabel } from '../FormGroup'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: FormGroupCheckbox,
}
export default meta

type Story = StoryObj<typeof Checkbox>

const CheckboxWithState = ({ ...props }) => {
  const { status, checked, label } = props
  const [selected, setSelected] = useState<boolean>(checked)
  const handleOnChange = (value: boolean) => {
    setSelected(value)
  }
  return (
    <FormGroup status={status} name="checkbox-test">
      <div className="flex items-center gap-4">
        <FormGroupCheckbox checked={selected} onChange={handleOnChange} />
        <FormGroupLabel>{label}</FormGroupLabel>
      </div>
    </FormGroup>
  )
}
const infoProps = {
  status: 'info' as InputStatus,
  checked: false,
  label: 'Checkbox info',
}
export const CheckboxInfo: Story = {
  render: () => <CheckboxWithState {...infoProps} />,
}

const errorProps = {
  status: 'error' as InputStatus,
  checked: false,
  label: 'Checkbox error',
}
export const CheckboxError: Story = {
  render: () => <CheckboxWithState {...errorProps} />,
}

const warningProps = {
  status: 'warning' as InputStatus,
  checked: false,
  label: 'Checkbox warning',
}
export const CheckboxWarning: Story = {
  render: () => <CheckboxWithState {...warningProps} />,
}
