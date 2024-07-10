import { HTMLInputTypeAttribute } from 'react'
import { InputStatus } from '../../../types'
import { TextField } from '../TextField'

export type FormGroupLayouts = 'inline' | 'column'
export type FormGroupInput = typeof TextField

export type FormGroup = {
  name: string
  layout?: FormGroupLayouts
  status?: InputStatus
  required?: boolean
  children: React.ReactNode | React.ReactNode[]
}

export type BaseFormData = {
  id: string
  name: string
  status?: InputStatus
  messageId?: string
  className?: string
  disabled?: boolean
  label?: string
}

export type SelectOption = {
  value: string
  label: string
}

export type SelectProps = BaseFormData & {
  options: SelectOption[]
  selectedOption: string
  onChange: (value: string) => void
  required?: boolean
}

export type CheckboxProps = BaseFormData & {
  checked: boolean
  onChange: (value: boolean) => void
}

export type ComboboxProps = SelectProps

export type RadioProps = BaseFormData & {
  value: string
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  activeValue?: string
}

export type SwitchProps = CheckboxProps

export type PickTypes = 'email' | 'search' | 'text' | 'password' | 'url' | 'tel'

export type TextFieldProps = BaseFormData & {
  type: Extract<HTMLInputTypeAttribute, PickTypes>
  value: string | number
  required?: boolean
  placeholder?: string
  labelHidden?: boolean
}
