import { FC, JSXElementConstructor } from 'react'
import { tv } from 'tailwind-variants'
import { StaticColor } from '~types'

export interface BadgeProps {
  className?: string
  Component?: string | JSXElementConstructor<any>
  size?: 'sm' | 'md' | 'lg'
  label: string
  color: StaticColor
}

const tvBadge: any = tv({
  base: 'rounded-md border uppercase font-semibold leading-4 text-center flex flex-row justify-center py-1 px-1 items-center h-fit max-w-fit',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    color: {
      white: 'bg-white text-black',
      black: 'bg-black text-white',
      yellow: 'bg-yellow-500 text-white',
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
    },
  },
})

export const Badge: FC<BadgeProps> = ({
  size = 'md',
  className,
  label,
  color,
  Component = 'div',
}) => {
  return (
    <Component className={tvBadge({ size, color, class: className })}>
      <span>{label}</span>
    </Component>
  )
}
