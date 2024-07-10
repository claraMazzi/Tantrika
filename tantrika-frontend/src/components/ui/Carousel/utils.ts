import { CarouselItemStyles, CarouselStyles } from './Carousel.type'

const STYLING_DEFAULTS: Required<Omit<CarouselItemStyles, 'columns'>> = {
  spacing: '0.5rem',
  itemWidth: '100%',
  itemHeight: 'auto',
}

type withDefaults = {
  withDefaults?: boolean
}

export const getItemStyles = ({
  withDefaults = true,
  ...props
}: Partial<CarouselItemStyles> & withDefaults):
  | Partial<Omit<CarouselItemStyles, 'columns'>>
  | undefined => {
  if (!props) return undefined

  const { itemWidth, itemHeight, columns, spacing } = props
  let calculatedItemWidth = withDefaults
    ? STYLING_DEFAULTS.itemWidth
    : undefined

  if (columns === 'auto' && itemWidth === 'auto') {
    calculatedItemWidth = withDefaults ? STYLING_DEFAULTS.itemWidth : undefined
  } else if (typeof columns === 'number' && columns > 0) {
    calculatedItemWidth = `calc(${100 / columns}%)`
  } else if (
    (columns === undefined || columns === 'auto') &&
    itemWidth !== 'auto'
  ) {
    calculatedItemWidth = `calc(${itemWidth} + var(--spacing))`
  }

  return {
    spacing: spacing ?? (withDefaults ? STYLING_DEFAULTS.spacing : undefined),
    itemHeight:
      itemHeight ?? (withDefaults ? STYLING_DEFAULTS.itemHeight : undefined),
    itemWidth: calculatedItemWidth,
  }
}

export const getCarouselStyles = ({
  itemWidth,
  itemHeight,
  columns,
  spacing,
  responsive,
}: CarouselStyles): Partial<CarouselStyles> => {
  const rootStyles = getItemStyles({ itemWidth, itemHeight, columns, spacing })
  const tabletStyles = responsive?.tablet
    ? getItemStyles({ ...responsive?.tablet, withDefaults: false })
    : undefined
  const desktopStyles = responsive?.desktop
    ? getItemStyles({ ...responsive?.desktop, withDefaults: false })
    : undefined

  return {
    ...rootStyles,
    responsive: {
      tablet: tabletStyles,
      desktop: desktopStyles,
    },
  }
}
