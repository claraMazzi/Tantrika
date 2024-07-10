import { getMediaWidth } from '../../utils'
import { type CarouselStyles as CarouselStylesType } from './Carousel.type'
import { getCarouselStyles } from './utils'

export const CarouselStyles = ({
  id,
  styles,
}: {
  id: string
  styles: CarouselStylesType
}) => {
  const carouselStyles = getCarouselStyles(styles)
  const tabletWidth = getMediaWidth('tablet')
  const desktopWidth = getMediaWidth('desktop')
  const tabletStyles = carouselStyles.responsive?.tablet
  const desktopStyles = carouselStyles.responsive?.desktop

  return (
    <style>
      {`
      [id="${id}"] {
        --spacing: ${carouselStyles.spacing};
        --width: ${carouselStyles.itemWidth};
        --height: ${carouselStyles.itemHeight};
      }
      ${
        !tabletStyles
          ? ''
          : `
      @media (min-width: ${tabletWidth}) {
        [id="${id}"] {
          ${!tabletStyles.spacing ? '' : `--spacing: ${tabletStyles.spacing};`}
          ${
            !tabletStyles.itemWidth ? '' : `--width: ${tabletStyles.itemWidth};`
          }
          ${
            !tabletStyles.itemHeight
              ? ''
              : `--height: ${tabletStyles.itemHeight};`
          }
        }
      }
      `
      }
      ${
        !desktopStyles
          ? ''
          : `
      @media (min-width: ${desktopWidth}) {
        [id="${id}"] {
          ${
            !desktopStyles.spacing ? '' : `--spacing: ${desktopStyles.spacing};`
          }
          ${
            !desktopStyles.itemWidth
              ? ''
              : `--width: ${desktopStyles.itemWidth};`
          }
          ${
            !desktopStyles.itemHeight
              ? ''
              : `--height: ${desktopStyles.itemHeight};`
          }
        }
      }
      `
      }
      `}
    </style>
  )
}
