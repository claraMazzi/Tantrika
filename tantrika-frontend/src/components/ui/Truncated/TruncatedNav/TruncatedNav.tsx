import cn from 'clsx'
import { FC } from 'react'
import { Button } from '../../Button'
import { TruncatedNavProps } from '../Truncated.types'
import { TruncatedContainer } from '../TruncatedContainer/TruncatedContainer'

export const TruncatedNav: FC<TruncatedNavProps> = ({
  fade = true,
  textColor = 'text-black',
  className,
  limit,
  href = '#',
  background = 'text-white',
  moreLabel = 'show more',
  children,
  Component = 'div',
}) => {
  const containerClass = cn(className, 'max-w-sm flex flex-col')
  const buttonClass = cn(textColor, 'w-full bg-transparent text-right h-4')
  return (
    <Component className={containerClass}>
      <TruncatedContainer
        limit={limit}
        fade={fade}
        textColor={textColor}
        background={background}
      >
        {children}
      </TruncatedContainer>

      {href && (
        <Button className={buttonClass} style="ghost" Component="a" href={href}>
          {moreLabel}
        </Button>
      )}
    </Component>
  )
}
