import { CSSProperties } from 'react'

export type TextVariant = 'html' | 'paragraph' | 'label'

export interface TextProps {
  variant?: TextVariant
  className?: string
  id?: string
  style?: CSSProperties
  children?: React.ReactNode | any
}
