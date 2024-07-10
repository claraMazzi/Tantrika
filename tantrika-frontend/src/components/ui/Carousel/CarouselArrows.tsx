import { FC, MouseEventHandler } from 'react'
import { Icon } from '../Icon'
import { CarouselControls } from './Carousel.type'

export const CarouselArrows: FC<{
  onPrevClick: MouseEventHandler<HTMLButtonElement>
  onNextClick: MouseEventHandler<HTMLButtonElement>
  prevBtnEnabled: boolean
  nextBtnEnabled: boolean
  options?: CarouselControls['arrows']
}> = ({
  onPrevClick,
  onNextClick,
  prevBtnEnabled,
  nextBtnEnabled,
  options,
}) => {
  const tabletOptions = { ...options, ...options?.responsive?.tablet }
  const desktopOptions = {
    ...options,
    ...options?.responsive?.tablet,
    ...options?.responsive?.desktop,
  }

  return (
    <div
      className={`absolute left-0 right-0 top-0 m-auto h-full ${
        options?.show ? 'block' : 'hidden'
      } ${tabletOptions.show ? 'md:block' : 'md:hidden'} ${
        desktopOptions.show ? 'xl:block' : 'xl:hidden'
      } ${options?.position === 'between' ? 'max-w-container' : 'max-w-none'} ${
        tabletOptions.position === 'between'
          ? 'md:max-w-container'
          : 'md:max-w-none'
      } ${
        desktopOptions.position === 'between'
          ? 'xl:max-w-container'
          : 'xl:max-w-none'
      }`}
    >
      <button
        className={`absolute z-20 transform rounded-full bg-white p-2 shadow-lg ${
          !prevBtnEnabled ? 'opacity-50' : ''
        } ${
          options?.position === 'between'
            ? 'bottom-auto left-2 right-auto top-1/2 -translate-y-1/2'
            : 'bottom-2 left-auto right-12 top-auto -translate-y-0'
        } ${
          tabletOptions.position === 'between'
            ? 'md:bottom-auto md:left-2 md:right-auto md:top-1/2 md:-translate-y-1/2'
            : 'md:bottom-2 md:left-auto md:right-12 md:top-auto md:-translate-y-0'
        } ${
          desktopOptions.position === 'between'
            ? 'xl:bottom-auto xl:left-2 xl:right-auto xl:top-1/2 xl:-translate-y-1/2'
            : 'xl:bottom-2 xl:left-auto xl:right-12 xl:top-auto xl:-translate-y-0'
        }`}
        onClick={onPrevClick}
        disabled={!prevBtnEnabled}
      >
        <Icon
          iconName="chevron-up"
          width={15}
          height={15}
          className="-rotate-90 transform"
        />
      </button>
      <button
        className={`absolute right-2 z-20 transform rounded-full bg-white p-2 shadow-lg ${
          !nextBtnEnabled ? 'opacity-50' : ''
        } ${
          options?.position === 'between'
            ? 'bottom-auto top-1/2 -translate-y-1/2'
            : 'bottom-2 top-auto -translate-y-0'
        } ${
          tabletOptions.position === 'between'
            ? 'md:bottom-auto md:top-1/2 md:-translate-y-1/2'
            : 'md:bottom-2 md:top-auto md:-translate-y-0'
        } ${
          desktopOptions.position === 'between'
            ? 'xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2'
            : 'xl:bottom-2 xl:top-auto xl:-translate-y-0'
        }`}
        onClick={onNextClick}
        disabled={!nextBtnEnabled}
      >
        <Icon
          iconName="chevron-up"
          width={15}
          height={15}
          className="rotate-90 transform"
        />
      </button>
    </div>
  )
}
