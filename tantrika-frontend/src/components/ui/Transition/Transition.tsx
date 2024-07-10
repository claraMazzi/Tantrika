'use client'

import { Transition as Tr } from '@headlessui/react'
import { getTransition, TransitionVariant } from './transitions'

type TransitionProps = React.ComponentProps<typeof Tr> & {
  variant?: TransitionVariant
} & Record<string, unknown>

type TransitionChildProps = React.ComponentProps<typeof Tr.Child> & {
  variant?: TransitionVariant
}

const Transition = (props: TransitionProps) => {
  return <Tr {...getTransition(props.variant)} {...(props as any)} />
}

const TransitionChild = (props: TransitionChildProps) => {
  return <Tr.Child {...getTransition(props.variant)} {...(props as any)} />
}

Transition.Child = TransitionChild

export { Transition }
