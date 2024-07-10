'use client'

import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { LoadingDots } from '../LoadingDots'
import { ButtonProps } from './Button.type'

const ButtonLoading = () => (
  <i className="absolute m-0 flex justify-center">
    <LoadingDots />
  </i>
)

// tv triggers a ts error (package issue)
const tvButton = tv({
  base: 'inline-block	cursor-pointer rounded-lg border text-center text-sm font-medium transition-all duration-300 ease-in-out',
  variants: {
    size: {
      sm: 'h-8 px-2 text-xs',
      md: 'h-12 px-4 text-md',
      lg: 'h-16 px-6 py-4 text-lg',
    },
    rounded: {
      regular: 'max-w-xs rounded-md',
      pill: 'max-w-xs rounded-full',
      full: 'max-w-[120px] shrink-0 grow-0 rounded-full before:inline-block before:content-[""] before:align-middle before:pt-[100%]',
    },
    style: {
      outline:
        'bg-white hover:text-white hover:border-white focus-visible:border-white active:border-white active:text-white',
      solid: '',
      ghost: '',
    },
    loading: {
      true: 'flex items-center justify-center cursor-not-allowed',
      false: '',
    },
    disabled: {
      true: '',
      false: '',
    },
    Component: {
      input: '',
      a: '',
    },
  },
  compoundVariants: [
    {
      style: 'solid',
      color: 'primary',
      class:
        'bg-primary-default text-white hover:bg-blue-600 active:bg-blue-700',
    },
    {
      style: 'solid',
      color: 'secondary',
      class:
        'bg-accent-900 text-white hover:bg-accent-800 active:bg-accent-700',
    },
    {
      style: 'solid',
      color: 'success',
      class: 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
    },
    {
      style: 'solid',
      color: 'danger',
      class: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
    },
    {
      style: 'solid',
      color: 'warning',
      class:
        'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
    },
    {
      style: 'outline',
      color: 'primary',
      class:
        ' text-blue-500 border border-blue-500 focus-visible:border-blue-500 hover:bg-blue-600 active:bg-blue-700',
    },
    {
      style: 'outline',
      color: 'secondary',
      class:
        'text-accent-900 border border-accent-900 focus-visible:border-accent-900 hover:bg-accent-800 active:bg-accent-900',
    },
    {
      style: 'outline',
      color: 'warning',
      class:
        'text-yellow-500 border border-yellow-500 focus-visible:border-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 ',
    },
    {
      style: 'outline',
      color: 'success',
      class:
        'text-green-500 border border-green-500 focus-visible:border-green-500 hover:bg-green-600 active:bg-green-700 ',
    },
    {
      style: 'outline',
      color: 'danger',
      class:
        'text-red-500 border border-red-500 focus-visible:border-red-500 hover:bg-red-600 active:bg-red-700 ',
    },
    {
      style: 'ghost',
      color: 'primary',
      class: 'bg-transparent border-0 text-blue-500 ',
    },
    {
      style: 'ghost',
      color: 'secondary',
      class: 'bg-transparent border-0 text-accent-900',
    },
    {
      style: 'ghost',
      color: 'warning',
      class: 'bg-transparent border-0 text-yellow-500',
    },
    {
      style: 'ghost',
      color: 'success',
      class: 'bg-transparent border-0 text-green-500',
    },
    {
      style: 'ghost',
      color: 'danger',
      class: 'bg-transparent border-0 text-red-500 ',
    },
    { size: 'sm', rounded: 'full', class: 'h-auto w-auto p-2 max-w-xs' },
    { size: 'md', rounded: 'full', class: 'h-auto w-auto p-4 max-w-xs' },
    { size: 'lg', rounded: 'full', class: 'h-auto w-auto p-6 max-w-xs' },
    {
      Component: 'a',
      rounded: 'full',
      loading: true,
      class: 'flex w-fit items-center justify-center',
    },
    {
      Component: 'input',
      rounded: 'full',
      size: ['sm', 'md', 'lg'],
      class: 'truncate',
    },
    {
      Component: 'input',
      rounded: 'full',
      size: 'sm',
      class: 'h-28 w-28',
    },
    {
      Component: 'input',
      rounded: 'full',
      size: 'md',
      class: 'h-40 w-40',
    },
    {
      Component: 'input',
      rounded: 'full',
      size: 'lg',
      class: 'h-56 w-56',
    },
    {
      style: 'solid',
      color: ['primary', 'secondary', 'warning', 'success', 'danger'],
      disabled: true,
      class: 'cursor-not-allowed border-0 text-white opacity-50',
    },
  ],
} as any)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function B(
  {
    size = 'md',
    style = 'solid',
    color = 'primary',
    type = 'button',
    Component = 'button',
    rounded = 'regular',
    width,
    height,
    disabled = false,
    loading = false,
    children,
    className,
    ...props
  },
  buttonRef
) {
  return (
    <Component
      ref={buttonRef}
      className={tvButton({
        size,
        color,
        style,
        rounded,
        disabled: String(disabled),
        loading: String(loading),
        Component: String(Component),
        class: className,
      })}
      disabled={disabled || loading}
      type={type}
      style={{
        width,
        height,
        ...(width && { paddingLeft: 0, paddingRight: 0 }),
        ...(height && { paddingTop: 0, paddingBottom: 0 }),
      }}
      value={
        Component == 'input' && props.value && loading
          ? 'Loading...'
          : props.value
      }
      {...props}
    >
      {Component !== 'input' ? (
        loading ? (
          <>
            <ButtonLoading />
            <span className={`inline-flex ${loading ? 'invisible' : ''}`}>
              {children}
            </span>
          </>
        ) : (
          <>{children}</>
        )
      ) : null}
    </Component>
  )
})
