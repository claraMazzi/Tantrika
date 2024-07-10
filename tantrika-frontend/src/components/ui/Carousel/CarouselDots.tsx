import { FC } from 'react'
import { CarouselControls } from './Carousel.type'

export const CarouselDots: FC<{
  onClick: (index: number) => void
  scrollSnaps: number[]
  selectedIndex: number
  options?: CarouselControls['dots']
}> = ({ onClick, scrollSnaps, selectedIndex, options }) => {
  const tabletOptions = { ...options, ...options?.responsive?.tablet }
  const desktopOptions = {
    ...options,
    ...options?.responsive?.tablet,
    ...options?.responsive?.desktop,
  }
  return (
    <div
      className={`absolute bottom-0 z-10 mb-4 w-full ${
        options?.show ? 'block' : 'hidden'
      } ${tabletOptions.show ? 'md:block' : 'md:hidden'} ${
        desktopOptions.show ? 'xl:block' : 'xl:hidden'
      }`}
    >
      <div className="flex justify-center pt-2 ">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === selectedIndex
                ? 'bg-primary-active'
                : 'bg-accent-100 hover:bg-primary-hover'
            }`}
            type="button"
            onClick={() => onClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
