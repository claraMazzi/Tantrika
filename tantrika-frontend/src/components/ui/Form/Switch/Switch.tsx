import { Switch } from '@headlessui/react'
import cn from 'clsx'
import { SwitchProps } from '../FormGroup/FormGroup.type'

export const SwitchComponent = ({
  id,
  name,
  status = 'info',
  messageId,
  checked = false,
  onChange,
  className,
  disabled = false,
  label,
}: SwitchProps) => {
  return (
    <Switch
      id={id}
      name={name}
      checked={checked}
      onChange={(val: boolean) => onChange(val)}
      disabled={disabled}
      aria-label={label}
      aria-errormessage={messageId && status == 'error' ? messageId : ''}
      className={cn(
        {
          'bg-accent-200': !checked,
          'bg-blue-600': checked && status === 'info',
          'bg-red-600': checked && status === 'error',
          'bg-yellow-600': checked && status === 'warning',
          'cursor-not-allowed': disabled,
        },
        'relative inline-flex h-6 w-11 items-center rounded-full',
        className
      )}
    >
      <span
        className={cn(
          {
            'translate-x-6': checked,
            'translate-x-1': !checked,
          },
          'inline-block h-4 w-4 transform rounded-full bg-white transition'
        )}
      />
    </Switch>
  )
}
