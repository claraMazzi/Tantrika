import { JSXElementConstructor, ReactNode } from 'react'
import { Color, Size } from '../../types'

type ButtonSizes = 'sm' | 'md' | 'lg'
type ButtonStyles = 'solid' | 'outline' | 'ghost'
type ButtonTypes = 'submit' | 'reset' | 'button'
type ButtonRounded = 'regular' | 'pill' | 'full'
type ButtonComponentTypes = 'button' | 'a' | 'div' | 'span' | 'input'
type ButtonSize = {
  size?: ButtonSizes
  width?: Size
  height?: Size
}
type ButtonCompositeStyle = {
  style: Exclude<ButtonStyles, 'ghost'>
  rounded?: ButtonRounded
}
type ButtonGhostStyle = {
  style?: Extract<ButtonStyles, 'ghost'>
  rounded?: never
}
type ButtonComponentLink = {
  Component?: Extract<ButtonComponentTypes, 'a'>
  href: string
}
type ButtonComponentNotLink = {
  Component?: Exclude<ButtonComponentTypes, 'a'> | JSXElementConstructor<any>
  href?: never
}
type ButtonComponentInput = {
  Component?: Extract<ButtonComponentTypes, 'input'>
  children?: never
  value: string
}
type ButtonComponentNotInput = {
  Component?:
    | Exclude<ButtonComponentTypes, 'input'>
    | JSXElementConstructor<any>
  children: ReactNode
}

type ButtonFullStyles = ButtonCompositeStyle | ButtonGhostStyle
type ButtonComponent =
  | (ButtonComponentLink | ButtonComponentNotLink) &
      (ButtonComponentInput | ButtonComponentNotInput)

export type ButtonProps = Omit<
  JSX.IntrinsicElements['button'],
  'size' | 'width' | 'height' | 'type' | 'rounded' | 'color'
> &
  ButtonSize &
  ButtonFullStyles &
  ButtonComponent & {
    className?: string
    loading?: boolean
    disabled?: boolean
    type?: ButtonTypes
    color?: Exclude<Color, 'info'>
  }
