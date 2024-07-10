'use client'

import cn from 'clsx'
import { createContext, useContext } from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import { ComboboxComponent } from '../Combobox'
import { FormLabel, FormLabelProps } from '../FormLabel'
import { FormMessage, FormMessageProps } from '../FormMessage'
import { Radio } from '../Radio'
import { Select } from '../Select'
import { SwitchComponent } from '../Switch'
import { TextField } from '../TextField'
import { getInputId, getMessageId } from '../utils'
import {
  CheckboxProps,
  ComboboxProps,
  FormGroup as FormGroupType,
  RadioProps,
  SelectProps,
  SwitchProps,
  TextFieldProps,
} from './FormGroup.type'

const FormGroupContext = createContext<Omit<FormGroupType, 'children'> | null>(
  null
)

const useFormGroupContext = (component: string) => {
  const context = useContext(FormGroupContext)

  if (context === null) {
    throw new Error(
      `<${component} /> is missing a parent <FormGroup /> component.`
    )
  }

  return context
}

const FormGroup = ({
  children,
  name,
  layout,
  status,
  required,
}: FormGroupType) => {
  const layoutCN = cn('flex gap-2', { 'flex-col': [layout === 'column'] })

  return (
    <FormGroupContext.Provider value={{ name, layout, status, required }}>
      <div className={layoutCN}>{children}</div>
    </FormGroupContext.Provider>
  )
}

const FormGroupLabel = ({
  children,
  ...props
}: Omit<FormLabelProps, 'name' | 'htmlFor' | 'required' | 'status'>) => {
  const { name, required, status } = useFormGroupContext('FormGroupLabel')

  return (
    <FormLabel
      htmlFor={getInputId(name)}
      status={status}
      required={required}
      {...props}
    >
      {children}
    </FormLabel>
  )
}

const FormGroupMessage = ({
  children,
  ...props
}: Omit<FormMessageProps, 'id' | 'status'>) => {
  const { name, status } = useFormGroupContext('FormGroupMessage')

  return (
    <FormMessage id={getMessageId(name)} status={status} {...props}>
      {children}
    </FormMessage>
  )
}

const FormGroupTextField = ({
  ...props
}: Omit<TextFieldProps, 'id' | 'name' | 'required' | 'status'> & {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}) => {
  const { name, status, required } = useFormGroupContext('FormGroupTextField')
  const textFieldCN = ''

  return (
    <TextField
      className={textFieldCN}
      status={status}
      id={getInputId(name)}
      name={name}
      required={required}
      {...props}
    />
  )
}

const FormGroupSelect = ({
  selectedOption,
  onChange,
  ...props
}: Omit<SelectProps, 'id' | 'name' | 'required' | 'status'>) => {
  const { name, status } = useFormGroupContext('FormGroupSelect')
  const selectCN = ''

  return (
    <Select
      className={selectCN}
      status={status}
      id={getInputId(name)}
      name={name}
      selectedOption={selectedOption}
      onChange={onChange}
      {...props}
    />
  )
}

const FormGroupCheckbox = ({
  checked,
  onChange,
  ...props
}: Omit<CheckboxProps, 'id' | 'name' | 'status'>) => {
  const {} = props
  const { name, status } = useFormGroupContext('FormGroupCheckbox')
  const textFieldCN = ''

  return (
    <Checkbox
      className={textFieldCN}
      status={status}
      id={getInputId(name)}
      name={name}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  )
}

const FormGroupRadio = ({
  value,
  activeValue,
  ...props
}: Omit<RadioProps, 'id' | 'name' | 'status' | 'checked'>) => {
  const { name, status } = useFormGroupContext('FormGroupRadio')
  const radioCN = ''

  return (
    <Radio
      id={getInputId(name)}
      name={name}
      status={status}
      className={radioCN}
      value={value}
      checked={value == activeValue}
      {...props}
    />
  )
}

const FormGroupSwitch = ({
  ...props
}: Omit<SwitchProps, 'id' | 'name' | 'status'>) => {
  const { name, status } = useFormGroupContext('FormGroupSwitch')
  const textFieldCN = ''

  return (
    <SwitchComponent
      className={textFieldCN}
      status={status}
      id={getInputId(name)}
      name={name}
      {...props}
    />
  )
}

const FormGroupCombobox = ({
  ...props
}: Omit<ComboboxProps, 'id' | 'name' | 'required' | 'status'>) => {
  const { name, status } = useFormGroupContext('FormGroupCombobox')
  const { selectedOption, onChange } = props
  const comoboxCN = ''

  return (
    <ComboboxComponent
      className={comoboxCN}
      status={status}
      id={getInputId(name)}
      name={name}
      {...props}
      selectedOption={selectedOption}
      onChange={onChange}
    />
  )
}

export {
  FormGroup,
  FormGroupLabel,
  FormGroupMessage,
  FormGroupTextField,
  FormGroupRadio,
  FormGroupSwitch,
  FormGroupCheckbox,
  FormGroupSelect,
  FormGroupCombobox,
}
