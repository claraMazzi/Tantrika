'use client'

import { Dialog } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { Button, Transition } from '../index'

type ModalProps = {
  id: string
  title?: string
  description?: string
  isOpen: boolean
  closeModal: () => void
  children: ReactNode
}

export const Modal = ({
  id,
  title,
  description,
  isOpen,
  closeModal,
  children,
}: ModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => closeModal()} className="relative z-50" id={id}>
        <Transition.Child as={Fragment} variant="fadeIn">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 opacity-100"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child variant="scaleIn" as={Fragment}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="flex w-full max-w-sm flex-col gap-2 rounded bg-white px-2 py-6 text-base">
                {title ? <Dialog.Title>{title}</Dialog.Title> : null}
                {description ? (
                  <Dialog.Description>{description}</Dialog.Description>
                ) : null}
                {children}
                <div className="mt-2">
                  <Button onClick={() => closeModal()}>Cancel</Button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
