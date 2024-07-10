import React, { FunctionComponent, JSXElementConstructor } from 'react'
import { tv } from 'tailwind-variants'
import { TextProps, TextVariant } from './Text.type'

const tvHeading = tv({
  variants: {
    variant: {
      html: 'html',
      paragraph: 'text-base',
      label: 'text-base font-semibold',
    },
  },
})

export const Text: FunctionComponent<TextProps> = ({
  style,
  className,
  variant = 'html',
  id,
  children,
}) => {
  const componentsMap: {
    [P in TextVariant]: React.ComponentType<any> | string
  } = {
    html: 'div',
    paragraph: 'p',
    label: 'span',
  }

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap[variant]

  return (
    <Component
      className={tvHeading({ variant, class: className })}
      id={id}
      style={style}
    >
      {children}
    </Component>
  )
}
