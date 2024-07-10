'use-client'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Placing, TooltipVariant } from '~types'

type TooltipProps = {
  place?: Placing
  content: string | JSX.Element
  children: JSX.Element
  openOnClick?: boolean
  id: string
  variant: TooltipVariant
}

export const Tooltip = ({
  id,
  place = 'top',
  content = '',
  children,
  openOnClick = false,
  variant = 'info',
}: TooltipProps) => {
  return (
    <div>
      {content && <span data-tooltip-id={id}>{content}</span>}
      <ReactTooltip
        id={id}
        place={place}
        openOnClick={openOnClick}
        variant={variant}
      >
        {children}
      </ReactTooltip>
    </div>
  )
}
