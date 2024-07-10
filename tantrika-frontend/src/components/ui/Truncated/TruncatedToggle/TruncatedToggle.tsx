import cn from 'clsx'
import { FC, useState } from 'react'
import { Button } from '../../Button'
import { TruncatedToggleProps } from '../Truncated.types'
import { TruncatedContainer } from '../TruncatedContainer/TruncatedContainer'

export const TruncatedToggle: FC<TruncatedToggleProps> = ({
  Component = 'div',
  children,
  className,
  limit,
  fade = true,
  textColor = 'text-black',
  background = 'text-white',
  moreLabel = 'show more',
  lessLabel = 'show less',
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const containerClass = cn(className, 'max-w-sm flex flex-col')
  const buttonClass = cn(textColor, 'w-full bg-transparent text-right h-4')
  return (
    <Component className={containerClass}>
      <TruncatedContainer
        limit={limit}
        fade={fade}
        textColor={textColor}
        background={background}
        expanded={expanded}
      >
        {children}
      </TruncatedContainer>
      <Button
        className={buttonClass}
        style="ghost"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? lessLabel : moreLabel}
      </Button>
    </Component>
  )
}
