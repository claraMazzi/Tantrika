import cn from 'clsx'
import { FC } from 'react'
import { TruncatedContainerProps } from '../Truncated.types'

export const TruncatedContainer: FC<TruncatedContainerProps> = ({
  fade = true,
  textColor = 'text-black',
  className,
  limit,
  background = 'text-white',
  children,
  Component = 'div',
  expanded,
}) => {
  const setHeight = expanded && expanded ? '' : `${limit}px`
  const containerClass = cn(
    className,
    'inline-block max-w-sm collapsed overflow-hidden transition-max-height ease-in-out delay-800',
    {
      [`${background} bg-gradient-to-b from-current`]: fade,
      [`${background} bg-current`]: background && !fade,
      ['max-h-300']: expanded,
    }
  )
  const myComponentStyle = {
    maxHeight: setHeight,
  }

  return (
    <Component className={containerClass} style={myComponentStyle}>
      <p className={textColor}>{children}</p>
    </Component>
  )
}
