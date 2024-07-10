import cn from 'clsx'
import { JSXElementConstructor } from 'react'
import { tv } from 'tailwind-variants'
import { type Heading as HeadingType, type HeadingLevel } from './Heading.type'

const tvHeading = tv({
  base: 'mb-2 mt-1 pt-1 font-bold',
  variants: {
    level: {
      page: 'text-2xl pb-5',
      section: 'text-xl pb-3',
      item: 'text-lg',
      subItem: 'text-base',
      subSubItem: 'text-sm',
    },
  },
})

export const Heading = ({
  level,
  className,
  style,
  id,
  children,
  hidden,
}: HeadingType) => {
  const componentsMap: {
    [P in HeadingLevel]: React.ComponentType<any> | string
  } = {
    page: 'h1',
    section: 'h2',
    item: 'h3',
    subItem: 'h4',
    subSubItem: 'h5',
  }

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap[level]

  return (
    <Component
      id={id}
      className={tvHeading({
        level,
        class: cn({ 'sr-only': hidden }, className),
      })}
      style={style}
    >
      {children}
    </Component>
  )
}
