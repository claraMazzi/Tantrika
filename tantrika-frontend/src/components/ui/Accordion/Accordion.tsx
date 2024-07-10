'use-client'

import { Disclosure, Transition } from '@headlessui/react'
import cn from 'clsx'
import { useState } from 'react'
import { Icon } from '../Icon'
export type Disclosure = {
  id: string
  title: string
  expanded?: boolean
  content: JSX.Element
}
export type AccordionProps = {
  list: Disclosure[]
  exclusive?: boolean
}

type NewPanel = { key: string; open: boolean; close: () => void }

export const Accordion = ({ list, exclusive = false }: AccordionProps) => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<
    NewPanel[]
  >([])

  const togglePanels = (newPanel: NewPanel) => {
    if (exclusive) {
      if (activeDisclosurePanel.length > 0) {
        if (
          activeDisclosurePanel[0].key !== newPanel.key &&
          activeDisclosurePanel[0].open
        ) {
          activeDisclosurePanel[0].close()
        }
      }
      setActiveDisclosurePanel([
        {
          ...newPanel,
          open: !newPanel.open,
        },
      ])
    } else {
      setActiveDisclosurePanel([
        ...activeDisclosurePanel,
        {
          ...newPanel,
          open: !newPanel.open,
        },
      ])
    }
  }

  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {list.map(({ id, title, content, expanded }: Disclosure) => (
          <Disclosure key={id} defaultOpen={expanded}>
            {(panel) => {
              const { open, close } = panel
              return (
                <>
                  <Disclosure.Button
                    onClick={() => {
                      if (!open) {
                        // On the first click, the panel is opened but the "open" prop's value is still false. Therefore the falsey verification
                        // This will make so the panel close itself when we click it while open
                        close()
                      }

                      // Now we call the function to close the other opened panels (if any)
                      togglePanels({ ...panel, key: id })
                    }}
                    className="bg-purple-100 text-purple-900 hover:bg-purple-200 focus-visible:ring-purple-500 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                  >
                    <span>{title}</span>
                    <Icon
                      iconName="chevron-up"
                      width={20}
                      height={20}
                      className={cn(open && 'rotate-180 transform')}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 px-4 pt-4 pb-2 text-sm">
                      {content}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )
            }}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
