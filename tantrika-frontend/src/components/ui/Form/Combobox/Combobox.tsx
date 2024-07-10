import { Combobox, Transition } from '@headlessui/react'
import cn from 'clsx'
import { Fragment, useState } from 'react'
import { Icon } from '../../Icon'
import { ComboboxProps, SelectOption } from '../FormGroup/FormGroup.type'

export const ComboboxComponent = ({
  id,
  name,
  options,
  selectedOption,
  onChange,
  status = 'info',
  messageId,
  disabled = false,
  className,
  label,
}: Omit<ComboboxProps, 'required'>) => {
  const [query, setQuery] = useState('')
  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  const getSelectedOptionLabel = () => {
    const option = options.find(
      (option: SelectOption) => option.value == selectedOption
    )
    if (option) {
      return option.label
    } else {
      return ''
    }
  }

  const activeOptionClass = cn('text-white', {
    'bg-blue-300': status === 'info',
    'bg-red-300': status === 'error',
    'bg-yellow-300': status === 'warning',
  })
  return (
    <Combobox
      value={selectedOption}
      onChange={onChange}
      name={name}
      disabled={disabled}
      aria-label={label}
      aria-errormessage={messageId && status == 'error' ? messageId : ''}
    >
      <div className={cn(className, 'relative mt-1')} id={id}>
        <div className="focus-visible:ring-offset-teal-300 relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-accent-900 focus:ring-0"
            displayValue={getSelectedOptionLabel}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Icon iconName="chevron-up-down" width={15} height={15} />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-accent-700">
                Nothing found.
              </div>
            ) : (
              filteredOptions.map(({ value, label }: SelectOption) => (
                <Combobox.Option
                  key={value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? activeOptionClass : 'text-accent-900'
                    }`
                  }
                  value={value}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {label}
                      </span>
                      {selected ? (
                        <span
                          className={cn(
                            'absolute inset-y-0 left-0 flex items-center pl-3',
                            active ? 'text-white' : 'text-teal-600'
                          )}
                        >
                          <Icon iconName="check" width={15} height={15} />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}
