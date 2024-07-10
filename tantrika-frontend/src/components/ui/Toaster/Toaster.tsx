'use client'

import { tv } from 'tailwind-variants'
import { Transition } from '../index'
import Toast, { ToastProps as ToastType } from './Toast/Toast'

export enum ToasterPosition {
  TopLeft = 'Top left',
  TopCenter = 'Top center',
  TopRight = 'Top right',
  BottomLeft = 'Bottom left',
  BottomCenter = 'Bottom center',
  BottomRight = 'Bottom right',
}

type ToasterProps = {
  position?: ToasterPosition
  toasts?: ToastType[]
}

const tvToasterWrapper = tv({
  base: 'fixed z-50 w-full max-w-md max-h-screen overflow-hidden pointer-events-none p-4',
  variants: {
    position: {
      [ToasterPosition.TopLeft]: 'top-0 left-0',
      [ToasterPosition.TopCenter]: 'top-0 left-1/2 -translate-x-1/2 transform',
      [ToasterPosition.TopRight]: 'top-0 right-0',
      [ToasterPosition.BottomLeft]: 'bottom-0 left-0',
      [ToasterPosition.BottomCenter]:
        'bottom-0 left-1/2 -translate-x-1/2 transform',
      [ToasterPosition.BottomRight]: 'bottom-0 right-0',
    },
  },
})

export const Toaster = ({
  position = ToasterPosition.BottomRight,
  toasts = [],
}: ToasterProps) => {
  const isToasterOpen = Boolean(toasts.length)

  return (
    <Transition show={isToasterOpen}>
      <div className="flex h-full w-full">
        <div
          className={tvToasterWrapper({
            position,
          })}
        >
          <div className="pointer-events-none flex w-full flex-1 flex-col-reverse justify-end">
            {toasts.length
              ? toasts.map((toast) => <Toast {...toast} key={toast.id} />)
              : null}
          </div>
        </div>
      </div>
    </Transition>
  )
}
