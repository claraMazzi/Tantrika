'use client'

import { Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import { Status, Styles } from '@/components/types'
import { AlertBox } from '../AlertBox'
import { Transition } from '../index'

type AlertModalProps = {
  id: string
  isOpen: boolean
  type: Status
  style?: Styles
  message: string
  includeIcon?: boolean
  closeModal: () => void
  altAction?: () => void
}

export const AlertModal = ({
  id,
  isOpen,
  type = 'info',
  style = 'outline',
  message,
  includeIcon = false,
  closeModal,
  altAction,
}: AlertModalProps) => {
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
              <Dialog.Panel className="w-full max-w-sm rounded ">
                <AlertBox
                  type={type}
                  style={style}
                  message={message}
                  includeIcon={includeIcon}
                  dismissAlert={closeModal}
                  altAction={altAction}
                />
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
