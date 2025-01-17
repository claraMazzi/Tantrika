import clsx from 'clsx'
import React, { FC } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean = false, // Full Width Screen
}) => {
  const rootClassName = clsx(className, {
    'mx-auto max-w-container px-4 w-full': !clean,
  })

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return <Component className={rootClassName}>{children}</Component>
}
