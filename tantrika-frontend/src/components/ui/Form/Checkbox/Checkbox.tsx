'use client'
import cn from 'clsx'
import { CheckboxProps } from '../FormGroup/FormGroup.type'

export const Checkbox = ({
  id,
  name,
  status = 'info',
  messageId,
  checked = false,
  onChange,
  className,
  disabled = false,
  label,
  ...props
}: CheckboxProps) => {
  const checkboxClass = cn(
    'w-4 h-4 bg-accent-100 border-accent-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-accent-700 dark:border-accent-600',
    {
      'text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 ':
        status == 'info',
      'text-red-600 focus:ring-red-500 dark:focus:ring-red-600 ':
        status == 'error',
      'text-yellow-600 focus:ring-yellow-500 dark:focus:ring-yellow-600 ':
        status == 'warning',
      'cursor-not-allowed': disabled,
    },
    className
  )

  return (
    <>
      <input
        className={checkboxClass}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        id={id}
        onChange={() => onChange(!checked)}
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
