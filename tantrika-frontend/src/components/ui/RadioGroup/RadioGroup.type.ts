import { ReactNode } from 'react'

export type RadioGroupOption = { value: string; content: ReactNode }

export type RadioGroupProps = {
  label?: string
  labelVisible?: boolean
  options: RadioGroupOption[]
  onChange: (value: string) => void
  activeValue: string
  className?: string
  component?: 'a' | 'button' | 'div'
}
