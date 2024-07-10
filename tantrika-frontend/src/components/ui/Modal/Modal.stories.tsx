import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { Modal } from './Modal'

type Story = StoryObj<typeof Modal>

const ModalWithState = ({ ...args }) => {
  const { id, title, description, children } = args
  const [openModal, setOpenModal] = useState<boolean>(false)
  const closeModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <>
      <Button onClick={() => setOpenModal(!openModal)}>Open Modal</Button>
      <Modal
        id={id}
        isOpen={openModal}
        closeModal={closeModal}
        title={title}
        description={description}
      >
        {children}
      </Modal>
    </>
  )
}
export const ModalPlain: Story = {
  render: (args) => {
    return <ModalWithState {...args} />
  },
  args: {
    id: 'modal-1',
    children: <span>Modal Children to display</span>,
  },
}
export const ModalWithTitleAndDescription: Story = {
  render: (args) => {
    return <ModalWithState {...args} />
  },
  args: {
    id: 'modal-2',
    title: 'Modal title',
    description: 'Modal description',
  },
}

export const ModalWithTitleDescriptionAndChildren: Story = {
  render: (args) => {
    return <ModalWithState {...args} />
  },
  args: {
    id: 'modal-2',
    title: 'Modal title',
    description: 'Modal description',
    children: <span>Modal Children to display</span>,
  },
}
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: ModalWithState,
}
export default meta
