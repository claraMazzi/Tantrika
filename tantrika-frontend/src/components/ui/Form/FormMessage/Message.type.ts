import { InputStatus } from '../../../types'

export type FormMessage = string

export type FormMessageProps = {
  id: string
  children: React.ReactNode
  status?: InputStatus
  className?: string
}
