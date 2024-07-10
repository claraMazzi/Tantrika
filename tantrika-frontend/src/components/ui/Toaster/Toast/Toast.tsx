import { Transition } from '@headlessui/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { tv } from 'tailwind-variants'
import { Status, Styles } from '~types'
import { Button } from '../../Button'
import { Icon } from '../../Icon'

export type ToastProps = {
  id: string
  type?: Status
  style?: Styles
  message?: string
  includeIcon?: boolean
  timeout?: number
  onClose: (id: string) => void
}

const tvToast: any = tv({
  base: 'flex p-3 pointer-events-auto my-2 rounded-lg shadow-lg w-full justify-between items-center gap-4',
  variants: {
    style: {
      solid: '',
      outline: 'bg-white border-2',
    },
  },
  compoundVariants: [
    {
      style: 'solid',
      color: 'info',
      class: 'bg-primary-default text-white',
    },
    {
      style: 'solid',
      color: 'warning',
      class: 'bg-yellow-500 text-white',
    },
    {
      style: 'solid',
      color: 'danger',
      class: 'bg-red-500 text-white',
    },
    {
      style: 'solid',
      color: 'success',
      class: 'bg-green-500 text-white',
    },

    {
      style: 'outline',
      color: 'info',
      class: 'border-primary-default text-primary-default',
    },
    {
      style: 'outline',
      color: 'warning',
      class: 'border-yellow-500 text-yellow-500',
    },
    {
      style: 'outline',
      color: 'danger',
      class: 'border-red-500 text-red-500',
    },
    {
      style: 'outline',
      color: 'success',
      class: 'border-green-500 text-green-500',
    },
  ],
})

const tvToastButton: any = tv({
  base: 'h-8 justify-end px-2',
  variants: {
    style: {
      solid: 'text-white-500',
      outline: 'text-accent-500',
    },
  },
})

export default function Toast({
  id,
  type = 'info',
  style = 'outline',
  message = 'placeholder message',
  includeIcon = false,
  onClose,
  timeout = 10_000,
}: ToastProps) {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const timeoutId = useMemo(() => {
    if (!hover) {
      return setTimeout(() => {
        onCloseHandle(id)
      }, timeout)
    }
  }, [hover])

  useEffect(() => {
    setOpen(true)
  }, [])

  const onCloseHandle = useCallback(
    (id: string) => {
      setOpen(false)
      setTimeout(() => {
        onClose(id)
      }, 300)
    },
    [id]
  )

  return (
    <Transition
      show={open}
      enter="transition-all scale-100 duration-300 ease-out"
      enterFrom="transform scale-75 opacity-0"
      enterTo="transform scale-200 opacity-300"
      leave="transition-all duration-300 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div
        className={tvToast({
          style,
          color: type,
        })}
        onMouseEnter={() => {
          clearTimeout(timeoutId)
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <div className="flex items-center justify-start gap-2">
          {includeIcon && (
            <div>
              <Icon width={35} height={35} iconName={type} />
            </div>
          )}
          <span className="break-all text-sm">{message}</span>
        </div>
        <Button
          style="ghost"
          className={tvToastButton({
            style,
          })}
          onClick={() => onCloseHandle(id)}
        >
          {'x'}
        </Button>
      </div>
    </Transition>
  )
}
