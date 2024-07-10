import cn from 'clsx'
import { JSXElementConstructor } from 'react'

export type CardProps = {
  variant: 'content' | 'link' | 'details'
  className?: string
  children: React.ReactNode
  Component?: string | JSXElementConstructor<any>
}

export const Card = ({
  variant,
  children,
  className,
  Component = 'div',
}: CardProps) => {
  const containerClass = cn(className, 'flex flex-col w-full items-center', {
    ['border-gray-200 dark:bg-gray-800 dark:border-gray-700 max-w-sm rounded-lg border bg-white p-6 shadow']:
      variant === 'content',
  })

  return <Component className={containerClass}>{children}</Component>
}
