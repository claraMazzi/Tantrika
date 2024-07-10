'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Children, FC, useCallback, useEffect, useId, useState } from 'react'
import { CarouselProps } from './Carousel.type'
import { CarouselArrows } from './CarouselArrows'
import { CarouselDots } from './CarouselDots'
import { CarouselStyles } from './CarouselStyles'

const DEFAULT_AUTOPLAY_DELAY = 4000

export const Carousel: FC<CarouselProps> = ({
  children,
  options,
  styles,
  controls,
}) => {
  const [carouselRef, carousel] = useEmblaCarousel(
    {
      align: 'start',
      slidesToScroll: options?.scrollAllItems ? 'auto' : 1,
      axis: options?.axis === 'vertical' ? 'y' : 'x',
      direction: options?.direction === 'reverse' ? 'rtl' : 'ltr',
      dragFree: options?.dragFree,
      ...(options?.loop && { loop: options.loop }),
      ...(options?.speed && { speed: options.speed }),
      ...(options?.startIndex && { startIndex: options.startIndex }),
    },
    options?.autoPlay?.enable
      ? [
          Autoplay({
            delay: options?.autoPlay?.delay || DEFAULT_AUTOPLAY_DELAY,
            stopOnInteraction: options?.autoPlay?.stopOnInteraction,
          }),
        ]
      : undefined
  )

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const scrollPrev = useCallback(
    () => carousel && carousel.scrollPrev(),
    [carousel]
  )
  const scrollNext = useCallback(
    () => carousel && carousel.scrollNext(),
    [carousel]
  )
  const scrollTo = useCallback(
    (index: number) => carousel && carousel.scrollTo(index),
    [carousel]
  )

  const onSelect = useCallback(() => {
    if (!carousel) return
    setSelectedIndex(carousel.selectedScrollSnap())
    setPrevBtnEnabled(carousel.canScrollPrev())
    setNextBtnEnabled(carousel.canScrollNext())
  }, [carousel, setSelectedIndex])

  useEffect(() => {
    if (!carousel) return
    onSelect()
    setScrollSnaps(carousel.scrollSnapList())
    carousel.on('select', onSelect)
  }, [carousel, setScrollSnaps, onSelect])

  const componentId = useId()
  const carouselId = `carousel_${componentId}`

  if (!children || !children.length) {
    console.warn('Empty carousel children', carouselRef)
    return null
  }

  if (children.length === 1) {
    return <span>{children}</span>
  }

  return (
    <>
      {styles ? <CarouselStyles id={carouselId} styles={styles} /> : null}
      <div
        ref={carouselRef}
        id={carouselId}
        className="embla relative overflow-hidden"
      >
        <ul className="embla__container ml-[calc(var(--spacing)*-1)] flex h-auto touch-pan-y">
          {Children.map(children, (child, ind) => (
            <li
              className="embla__slide relative h-[var(--height)] min-w-0 flex-shrink-0 flex-grow-0 basis-[var(--width)] pl-[var(--spacing)]"
              key={`slide_${ind}`}
            >
              {child}
            </li>
          ))}
        </ul>
        <CarouselArrows
          onPrevClick={scrollPrev}
          onNextClick={scrollNext}
          prevBtnEnabled={prevBtnEnabled}
          nextBtnEnabled={nextBtnEnabled}
          options={controls?.arrows}
        />
        <CarouselDots
          selectedIndex={selectedIndex}
          scrollSnaps={scrollSnaps}
          onClick={scrollTo}
          options={controls?.dots}
        />
      </div>
    </>
  )
}
