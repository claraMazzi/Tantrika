import { TransitionClasses } from '@headlessui/react'

export type TransitionVariant = 'fadeIn' | 'scaleIn' | 'slideIn'

type TransitionProps = Record<TransitionVariant, TransitionClasses>

export const transitions: TransitionProps = {
  fadeIn: {
    enter: 'transition ease-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition ease-in duration-200',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  scaleIn: {
    enter: 'transition duration-200 ease-out',
    enterFrom: 'transform scale-95 opacity-0',
    enterTo: 'transform scale-100 opacity-100',
    leave: 'transition duration-150 ease-out',
    leaveFrom: 'transform scale-100 opacity-100',
    leaveTo: 'transform scale-95 opacity-0',
  },
  slideIn: {
    enter: 'transition duration-300 ease-out',
    enterFrom: 'transform translate-x-full',
    enterTo: 'transform translate-x-0',
    leave: 'transition duration-200 ease-in',
    leaveFrom: 'transform translate-x-0',
    leaveTo: 'transform translate-x-full',
  },
}

export const getTransition = (key?: TransitionVariant) => {
  if (!key) return {}

  return transitions[key]
}
