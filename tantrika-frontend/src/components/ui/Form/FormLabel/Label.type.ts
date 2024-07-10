import { ReactNode } from 'react'
import { InputStatus } from '../../../types'

export type FormLabelProps = {
  children: ReactNode
  htmlFor: string
  required?: boolean
  status?: InputStatus
  className?: string
}
