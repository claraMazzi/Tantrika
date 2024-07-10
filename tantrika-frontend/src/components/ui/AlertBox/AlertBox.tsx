import { JSXElementConstructor } from 'react'
import { tv } from 'tailwind-variants'
import { Status, Styles } from '~types'
import { Button } from '../Button'
import { Icon } from '../Icon'

type AlertBoxProps = {
  type?: Status
  style?: Styles
  message: string
  includeIcon?: boolean
  altAction?: () => void
  dismissAlert?: () => void
  className?: string
  Component?: string | JSXElementConstructor<any>
}

const tvAlertBox: any = tv({
  base: 'relative w-full max-w-lg px-12 md:h-auto shadow-lg p-12 flex flex-col justify-evenly items-center rounded-lg', //base styling that's always applied to the container
  variants: {
    style: {
      solid: '',
      outline: 'bg-white border-2',
    },
    textOnly: {
      false: 'gap-4',
    },
  },
  compoundVariants: [
    {
      style: 'solid',
      color: 'info',
      class: 'bg-primary-default text-white',
    },
    {
      style: 'solid',
      color: 'warning',
      class: 'bg-yellow-500 text-white',
    },
    {
      style: 'solid',
      color: 'danger',
      class: 'bg-red-500 text-white',
    },
    {
      style: 'solid',
      color: 'success',
      class: 'bg-green-500 text-white',
    },

    {
      style: 'outline',
      color: 'info',
      class: 'border-primary-default text-primary-default',
    },
    {
      style: 'outline',
      color: 'warning',
      class: 'border-yellow-500 text-yellow-500',
    },
    {
      style: 'outline',
      color: 'danger',
      class: 'border-red-500 text-red-500',
    },
    {
      style: 'outline',
      color: 'success',
      class: 'border-green-500 text-green-500',
    },
  ],
})

export const AlertBox = ({
  type = 'info',
  style = 'outline',
  message = 'placeholder message',
  includeIcon = false,
  altAction,
  dismissAlert,
  className,
  Component = 'div',
}: AlertBoxProps) => {
  const textOnly =
    !includeIcon && altAction == undefined && dismissAlert == undefined
  return (
    <Component
      role="alert"
      className={tvAlertBox({
        style: style,
        color: type,
        class: className,
        textOnly: textOnly,
      })}
    >
      {includeIcon && <Icon width={50} height={50} iconName={type} />}
      <span className="break-all text-center text-base font-semibold">
        {message}
      </span>
      <div className="flex items-center gap-16">
        {altAction && (
          <Button
            size="md"
            style={'solid'}
            color={type == 'info' ? 'primary' : type}
            onClick={altAction}
          >
            Confirm
          </Button>
        )}
        {dismissAlert && (
          <Button
            size="md"
            style={altAction ? 'outline' : 'solid'}
            color={type == 'info' ? 'primary' : type}
            onClick={dismissAlert}
          >
            Dismiss
          </Button>
        )}
      </div>
    </Component>
  )
}
