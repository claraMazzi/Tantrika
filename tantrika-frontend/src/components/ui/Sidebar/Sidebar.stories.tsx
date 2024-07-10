import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
}
export default meta

type Story = StoryObj<typeof Sidebar>

const SidebarWithState = ({ ...props }) => {
  const { isOpen } = props
  const [openSidebar, setOpenSidebar] = useState<boolean>(isOpen)
  const closeSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <>
      <Button onClick={() => setOpenSidebar(!openSidebar)}>Open Sidebar</Button>
      <Sidebar id={'sidebar'} isOpen={openSidebar} closeSidebar={closeSidebar}>
        <>
          <div>List Item 1</div>
          <div>List Item 2</div>
          <div>List Item 3</div>
          <div>List Item 4</div>
        </>
      </Sidebar>
    </>
  )
}
const sidebarProps = {
  isOpen: false,
}
export const SidebarDefault: Story = {
  render: () => <SidebarWithState {...sidebarProps} />,
}
