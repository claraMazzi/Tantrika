import { RadioGroup } from '@headlessui/react'
import cn from 'clsx'
import { Icon } from '../Icon'
import { RadioGroupOption, RadioGroupProps } from '../RadioGroup'

export const RadioGroupComponent = ({
  label,
  labelVisible = false,
  onChange,
  className,
  options,
  activeValue,
  component = 'div',
}: RadioGroupProps) => {
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={activeValue}
          onChange={(value: string) => onChange(value)}
          className={cn(className, 'flex flex-col gap-4')}
        >
          <RadioGroup.Label className={cn(!labelVisible && 'sr-only')}>
            {label}
          </RadioGroup.Label>
          <div className="space-y-2">
            {options.map(({ value, content }: RadioGroupOption) => (
              <RadioGroup.Option
                key={value}
                value={value}
                as={component}
                className={({ checked }) =>
                  `${
                    checked
                      ? 'bg-primary-default bg-opacity-75 text-white '
                      : 'text-accent-600'
                  }
                  relative  flex w-full cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div
                        className={cn(
                          'flex',
                          component == 'button' ? 'text-start' : 'items-center'
                        )}
                      >
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-accent-600 '
                            }`}
                          >
                            {value}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            {content}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <Icon iconName="success" height={30} width={30} />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
