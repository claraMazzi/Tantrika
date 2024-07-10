import { CSSProperties, ReactNode } from 'react'

export type HeadingLevel =
  | 'page'
  | 'section'
  | 'item'
  | 'subItem'
  | 'subSubItem'

export type Heading = {
  level: HeadingLevel
  className?: string
  style?: CSSProperties
  id?: string
  children: ReactNode
  hidden?: boolean
}
