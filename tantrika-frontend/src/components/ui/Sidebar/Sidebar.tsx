'use client'

import { Dialog } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { Button, Transition } from '../'

type SidebarProps = {
  id: string
  isOpen: boolean
  closeSidebar: () => void
  children: ReactNode
}

export const Sidebar = ({
  id,
  isOpen,
  closeSidebar,
  children,
}: SidebarProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => closeSidebar()} className="relative z-50" id={id}>
        <Transition.Child as={Fragment} variant="fadeIn">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 opacity-100"
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child variant="slideIn" as={Fragment}>
          <div className="fixed right-0 top-0 bottom-0 h-full min-w-[40vw] overflow-y-auto">
            <Dialog.Panel className="flex h-full w-full flex-col overflow-y-auto bg-white p-4">
              <div className="ml-auto mb-4">
                <Button style="ghost" onClick={() => closeSidebar()}>
                  Close
                </Button>
              </div>
              {children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
