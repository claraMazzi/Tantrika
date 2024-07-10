import { ComponentMeta, Story } from '@storybook/react'
import { Carousel, Container } from '..'
import { Skeleton } from '../Skeleton'
import { CarouselItemStyles } from './Carousel.type'

const CarouselItemExample = ({ ind }: { ind: number }) => {
  return (
    <div className="relative h-full">
      <Skeleton className="h-full" />
      <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-accent-50">
        {ind}
      </span>
    </div>
  )
}

const CarouselExample = (styles: CarouselItemStyles) => {
  console.log('styles: ', styles)
  return (
    <Container className="h-20">
      <Carousel styles={styles}>
        {Array.from(Array(8).keys()).map((i) => (
          <CarouselItemExample key={i} ind={i} />
        ))}
      </Carousel>
    </Container>
  )
}

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {},
} as ComponentMeta<any>

const Template = (args: any) => <CarouselExample {...args} />

export const CarouselWithColumns: Story = Template.bind({})

CarouselWithColumns.args = {
  itemHeight: '200px',
  spacing: '30px',
  columns: 4,
}

export const CarouselWithWidth: Story = Template.bind({})

CarouselWithWidth.args = {
  itemHeight: '200px',
  spacing: '30px',
  itemWidth: '200px',
  responsive: {
    desktop: {
      itemHeight: '200px',
      spacing: '30px',
      itemWidth: '300px',
    },
  },
}
