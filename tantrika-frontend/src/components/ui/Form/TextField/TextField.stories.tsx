import { Meta, StoryObj } from '@storybook/react'
import { InputStatus } from '~types'
import { FormGroup, FormGroupLabel, FormGroupTextField } from '../FormGroup'
import { TextFieldProps } from '../FormGroup/FormGroup.type'

type Story = StoryObj<{
  status: InputStatus
  type: TextFieldProps['type']
  value: TextFieldProps['value']
  label: TextFieldProps['label']
  placeholder: TextFieldProps['placeholder']
}>

const TextFieldComponent = ({ ...props }) => {
  const { status, type, value, label, placeholder } = props
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log('value', event.target)
  }
  return (
    <FormGroup status={status} name="checkbox-test">
      <div className="flex items-center gap-4">
        <FormGroupLabel>{label}</FormGroupLabel>

        <FormGroupTextField
          onChange={handleOnChange}
          type={type}
          label={label}
          value={value}
          placeholder={placeholder}
        />
      </div>
    </FormGroup>
  )
}

export const TextFieldEmailWithValue: Story = {
  render: (args) => {
    return <TextFieldComponent {...args} />
  },
  args: {
    label: 'TextField email',
    type: 'email',
    status: 'info',
    value: 'email@test.com',
  },
}

export const TextFieldEmailWithPlaceholder: Story = {
  render: (args) => {
    return <TextFieldComponent {...args} />
  },
  args: {
    label: 'TextField email',
    type: 'email',
    status: 'info',
    placeholder: 'email@test.com',
  },
}

export const TextFieldPassword: Story = {
  render: (args) => {
    return <TextFieldComponent {...args} />
  },
  args: {
    label: 'TextField password',
    type: 'password',
    status: 'error',
    placeholder: 'abcD!e123',
  },
}

export const TextFieldTelephone: Story = {
  render: (args) => {
    return <TextFieldComponent {...args} />
  },
  args: {
    label: 'TextField telefone',
    type: 'tel',
    status: 'warning',
    placeholder: 'telephone',
  },
}

const meta: Meta<typeof TextFieldComponent> = {
  title: 'Form/TextField',
  component: FormGroupTextField,
  argTypes: {
    status: {
      options: ['info', 'error', 'warning'],
      control: { type: 'select' },
    },
  },
}
export default meta
