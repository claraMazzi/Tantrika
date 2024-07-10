import { JSXElementConstructor, ReactNode } from 'react'
import { TWColor } from '~types'

export type TruncatedContainerProps = {
  className?: string
  Component?: string | JSXElementConstructor<any>
  children: ReactNode
  limit: number
  fade?: boolean
  background?: TWColor
  textColor?: TWColor
  expanded?: boolean
}

export interface TruncatedNavProps
  extends Exclude<TruncatedContainerProps, 'expanded'> {
  href?: string
  moreLabel?: ReactNode
}

export interface TruncatedToggleProps extends TruncatedContainerProps {
  moreLabel?: ReactNode
  lessLabel?: ReactNode
}
