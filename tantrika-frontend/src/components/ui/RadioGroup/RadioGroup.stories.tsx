import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioGroupComponent } from './RadioGroup'
import { RadioGroupOption } from './RadioGroup.type'

type Story = StoryObj<typeof RadioGroupComponent>

const options: RadioGroupOption[] = [
  {
    value: 'Startup',
    content: (
      <>
        <span>12GB/6CPUs</span>
        <span aria-hidden="true">&middot;</span>
        <span>160 GB SSD disk</span>
      </>
    ),
  },
  {
    value: 'Business',
    content: (
      <>
        <span>16GB/8CPUs</span>
        <span aria-hidden="true">&middot;</span>
        <span>512 GB SSD disk</span>
      </>
    ),
  },
  {
    value: 'Enterprise',
    content: (
      <>
        <span>32GB/12CPUs</span>
        <span aria-hidden="true">&middot;</span>
        <span>1024 GB SSD disk</span>
      </>
    ),
  },
]

const RadioGroupWithState = ({ ...props }) => {
  const { component, activeValue, label, labelVisible } = props
  const [selected, setSelected] = useState<string>(activeValue)
  const handleOnChange = (value: string) => {
    setSelected(value)
  }
  return (
    <RadioGroupComponent
      component={component}
      activeValue={selected}
      onChange={handleOnChange}
      label={label}
      labelVisible={labelVisible}
      options={options}
    />
  )
}
export const DefaultRadioGroup: Story = {
  render: (args) => <RadioGroupWithState {...args} />,
  args: {
    label: 'Radio group info default',
    labelVisible: true,
    component: 'div',
    activeValue: 'Startup',
    options: options,
  },
}

export const ButtonRadioGroup: Story = {
  render: (args) => <RadioGroupWithState {...args} />,
  args: {
    label: 'Radio group info button',
    labelVisible: true,
    component: 'button',
    activeValue: 'Business',
    options: options,
  },
}

export const LinkRadioGroup: Story = {
  render: (args) => <RadioGroupWithState {...args} />,
  args: {
    label: 'Radio group info link',
    labelVisible: true,
    component: 'a',
    activeValue: 'Enterprise',
    options: options,
  },
}

const meta: Meta<typeof RadioGroupComponent> = {
  title: 'Components/RadioGroup',
  component: RadioGroupComponent,
  argTypes: {
    component: {
      options: ['a', 'button', 'div'],
      control: { type: 'select' },
    },
  },
}
export default meta
