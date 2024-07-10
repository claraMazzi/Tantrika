import { Listbox, Transition } from '@headlessui/react'
import cn from 'clsx'
import { Fragment } from 'react'
import { Icon } from '../../Icon'
import { SelectOption, SelectProps } from '../FormGroup/FormGroup.type'
export const Select = ({
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
}: Omit<SelectProps, 'required'>) => {
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
    <div>
      <Listbox
        value={selectedOption}
        onChange={(val) => onChange(val)}
        name={name}
        disabled={disabled}
        aria-label={label}
        aria-errormessage={messageId && status == 'error' ? messageId : ''}
      >
        <div className={cn(className, 'relative mt-1')} id={id}>
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-sm">
            <span className="block truncate">{getSelectedOptionLabel()}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon iconName="chevron-up-down" width={15} height={15} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map(({ value, label }: SelectOption) => (
                <Listbox.Option
                  key={value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? activeOptionClass : 'text-accent-900'
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                          <Icon iconName="check" width={15} height={15} />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
