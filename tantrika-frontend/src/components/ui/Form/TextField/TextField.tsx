'use client'
import cn from 'clsx'
import { forwardRef } from 'react'
import { TextFieldProps } from '../FormGroup/FormGroup.type'

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function I(
    {
      name,
      id,
      value,
      type,
      placeholder,
      className,
      status,
      required,
      messageId,
      disabled,
      label,
      ...props
    },
    inputRef
  ) {
    const inputClasses = cn(
      className,
      'text-accent-800 border border-accent-300 rounded rounded-md px-4 h-12',
      {
        'border-red-500 placeholder:text-red-500 text-red-500':
          status === 'error',
      },
      {
        'border-blue-500 placeholder:text-blue-500 text-blue-500':
          status === 'info',
      },
      {
        'border-yellow-500 placeholder:text-yellow-500 text-yellow-500':
          status === 'warning',
      }
    )

    return (
      <>
        <input
          className={inputClasses}
          ref={inputRef}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          id={id}
          {...(label && { 'aria-label': label })}
          {...(required && { required: true, 'aria-required': required })}
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
)
