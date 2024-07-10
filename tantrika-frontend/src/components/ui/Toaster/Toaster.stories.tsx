import { Meta, StoryObj } from '@storybook/react'
import { useCallback, useState } from 'react'
import { Button } from '../Button'
import { ToastProps, ToastProps as ToastType } from './Toast'
import { Toaster, ToasterPosition } from './Toaster'

type Story = StoryObj<
  {
    toasts: ToastType[]
    position: ToasterPosition
  } & ToastProps
>

const ToasterWithState = ({ ...args }) => {
  const { type, style, message, includeIcon, timeout } = args
  const [toasts, setToasts] = useState<ToastType[]>(args.toasts)

  const getId = () => Math.random().toString(36).split('.')[1]

  const removeToast = useCallback((id: string) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id))
  }, [])

  const addToast = () => {
    setToasts((prevState) => {
      return [
        ...prevState,
        {
          id: getId(),
          type,
          style,
          message,
          includeIcon,
          timeout,
          onClose: removeToast,
        },
      ]
    })
  }

  return (
    <>
      <Button onClick={addToast}>Open Toasts</Button>
      <Toaster toasts={toasts} position={args.position} />
    </>
  )
}

export const ToasterTextOnly: Story = {
  render: (args) => <ToasterWithState {...args} />,
  args: {
    // Actual props of Toaster component
    toasts: [] as ToastType[],
    position: ToasterPosition.BottomRight,
    // Props for testing purposes only
    type: 'info',
    style: 'outline',
    message: 'Hello I am a toast',
    timeout: 3000,
  },
}

export const ToasterWithIcon: Story = {
  render: (args) => <ToasterWithState {...args} />,
  args: {
    // Actual props of Toaster component
    toasts: [] as ToastType[],
    position: ToasterPosition.BottomRight,
    // Props for testing purposes only
    type: 'info',
    style: 'outline',
    message: 'Hello I am a toast with an icon',
    includeIcon: true,
    timeout: 5000,
  },
}

const meta: Meta<typeof ToasterWithState> = {
  title: 'Components/Toaster',
  component: Toaster,
  argTypes: {
    position: {
      options: [
        ToasterPosition.TopLeft,
        ToasterPosition.TopCenter,
        ToasterPosition.TopRight,
        ToasterPosition.BottomLeft,
        ToasterPosition.BottomCenter,
        ToasterPosition.BottomRight,
      ],
      control: { type: 'select' },
    },
    type: {
      options: ['info', 'warning', 'danger', 'success'],
      control: 'select',
    },
    style: {
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
  },
}
export default meta
