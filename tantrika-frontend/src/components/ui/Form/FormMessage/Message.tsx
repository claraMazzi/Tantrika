import cn from 'clsx'
import { FormMessageProps } from './Message.type'

export const FormMessage = ({
  id,
  children,
  status,
  className,
}: FormMessageProps) => {
  const messageCN = cn(
    { ['text-red-500']: status === 'error' },
    'mt-2',
    className
  )

  return (
    <div id={id} className={messageCN}>
      {children}
    </div>
  )
}
