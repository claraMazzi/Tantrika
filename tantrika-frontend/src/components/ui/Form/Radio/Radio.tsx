import cn from 'clsx'
import { RadioProps } from '../FormGroup/FormGroup.type'
export const Radio = ({
  id,
  name,
  status = 'info',
  messageId,
  value,
  onChange,
  className,
  disabled = false,
  label,
  checked,
  ...props
}: Omit<RadioProps, 'activeValue'>) => {
  const inputClass = cn(
    'w-4 h-4 bg-accent-100 border-accent-300 dark:bg-accent-700 dark:border-accent-600 focus:ring-2 dark:ring-offset-accent-800',
    {
      'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600':
        status === 'info',
      'text-red-600 focus:ring-red-500 dark:focus:ring-red-600':
        status === 'error',
      'text-yellow-600 focus:ring-yellow-500 dark:focus:ring-yellow-600':
        status === 'warning',
      'cursor-not-allowed': disabled,
    },
    className
  )

  return (
    <>
      <input
        type="radio"
        id={id}
        disabled={disabled}
        onChange={onChange}
        value={value}
        name={name}
        className={inputClass}
        defaultChecked={checked}
        {...(label && { 'aria-label': label })}
        {...(status === 'error' && { 'aria-invalid': true })}
        {...(disabled && { 'aria-disabled': true })}
        {...(messageId && status === 'error'
          ? { 'aria-errormessage': messageId }
          : { 'aria-describedby': messageId })}
        {...props}
      />
    </>
  )
}
