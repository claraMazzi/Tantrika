import { ReactNode } from 'react'
import { Size } from '~types'

export type CarouselBehaviour = {
  axis?: 'horizontal' | 'vertical'
  direction?: 'forward' | 'reverse'
  dragFree?: boolean
  loop?: boolean
  scrollAllItems?: boolean
  speed?: number
  startIndex?: number
  autoPlay?: CarouselAutoplayBehaviour
}

export type CarouselAutoplayBehaviour = {
  enable?: boolean
  delay?: number
  stopOnInteraction?: boolean
}

export type CarouselItemStyles = {
  spacing: Size
  itemHeight?: 'auto' | Size
  columns?: 'auto' | number
  itemWidth: 'auto' | Size
}

export type CarouselStyles = CarouselItemStyles & {
  responsive?: {
    tablet?: Partial<CarouselItemStyles>
    desktop?: Partial<CarouselItemStyles>
  }
}

export type CarouselProps = {
  children: ReactNode[]
  styles?: CarouselStyles
  options?: CarouselBehaviour
  controls?: CarouselControls
}

export type CarouselControls = {
  arrows?: CarouselArrowsOptions & {
    responsive?: {
      tablet?: Partial<CarouselArrowsOptions>
      desktop?: Partial<CarouselArrowsOptions>
    }
  }
  dots?: CarouselDotsOptions & {
    responsive?: {
      tablet?: Partial<CarouselDotsOptions>
      desktop?: Partial<CarouselDotsOptions>
    }
  }
}

export type CarouselArrowsOptions = {
  show?: boolean
  position?: 'bottom-right' | 'between'
}

export type CarouselDotsOptions = {
  show?: boolean
}
