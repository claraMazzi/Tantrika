import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { AlertModal } from './AlertModal'

type Story = StoryObj<typeof AlertModal>

const AlertModalWithState = ({ ...args }) => {
  const { type, message, style, altAction } = args

  const [openModal, setOpenModal] = useState<boolean>(false)
  const closeModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <Button onClick={() => setOpenModal(!openModal)}>Open Modal</Button>
      <AlertModal
        id="modal-test"
        isOpen={openModal}
        style={style}
        closeModal={closeModal}
        type={type}
        altAction={altAction}
        message={message}
        {...args}
      />
    </>
  )
}

export const AlertModalPlain: Story = {
  render: (args) => {
    return <AlertModalWithState {...args} />
  },
  args: {
    style: 'outline',
    type: 'info',
    message: 'Information message',
  },
}

export const AlertModalWithActions: Story = {
  render: (args) => {
    return <AlertModalWithState {...args} />
  },
  args: {
    style: 'outline',
    type: 'info',
    altAction: () => console.log('Alt action in alert modal'),
    message: 'Information message',
  },
}

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModalWithState,
  argTypes: {
    style: {
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
    type: {
      options: ['success', 'danger', 'warning', 'info'],
      control: { type: 'radio' },
    },
  },
}
export default meta
