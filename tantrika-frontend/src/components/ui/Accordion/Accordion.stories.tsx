import { ComponentMeta, Story } from '@storybook/react'
import { Accordion, Disclosure } from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template = (args: any) => <Accordion {...args} />

const listWithNoneExpanded: Disclosure[] = [
  {
    id: '1',
    title: 'disclosure 1',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '2',
    title: 'disclosure 2',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '3',
    title: 'disclosure 3',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '4',
    title: 'disclosure 4',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
]

const listWithOneExpanded: Disclosure[] = [
  {
    id: '1',
    title: 'disclosure 1',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '2',
    title: 'disclosure 2',
    expanded: true,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '3',
    title: 'disclosure 3',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '4',
    title: 'disclosure 4',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
]

const listWithManyExpanded: Disclosure[] = [
  {
    id: '1',
    title: 'disclosure 1',
    expanded: true,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '2',
    title: 'disclosure 2',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '3',
    title: 'disclosure 3',
    expanded: true,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
  {
    id: '4',
    title: 'disclosure 4',
    expanded: false,
    content: (
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptate culpa possimus sunt sit maiores, hic reiciendis ducimus vel
        rerum dolore, laboriosam iusto vero esse odit nobis tenetur autem modi?
      </span>
    ),
  },
]

export const DefaultDisclosureNonExclusive: Story = Template.bind({})

DefaultDisclosureNonExclusive.args = {
  list: listWithNoneExpanded,
  exclusive: false,
}
export const OneExpandedDisclosureNonExclusive: Story = Template.bind({})

OneExpandedDisclosureNonExclusive.args = {
  list: listWithOneExpanded,
  exclusive: false,
}

export const ManyExpandedDisclosureNonExclusive: Story = Template.bind({})

OneExpandedDisclosureNonExclusive.args = {
  list: listWithManyExpanded,
  exclusive: false,
}

export const ExclusiveDisclosureNoneExpanded: Story = Template.bind({})

ExclusiveDisclosureNoneExpanded.args = {
  list: listWithOneExpanded,
  exclusive: true,
}

export const ExclusiveDisclosureOneExpanded: Story = Template.bind({})

ExclusiveDisclosureOneExpanded.args = {
  list: listWithOneExpanded,
  exclusive: true,
}
