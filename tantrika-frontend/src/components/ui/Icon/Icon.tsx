import Check from './Icons/Check'
import CheckCircle from './Icons/CheckCircle'
import ChevronUp from './Icons/ChevronUp'
import ChevronUpDown from './Icons/ChevronUpDown'
import ExclamationCircle from './Icons/ExclamationCircle'
import InformationCircle from './Icons/InformationCircle'

interface IconProps {
  iconName?: string
  width: number
  height: number
  className?: string
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  switch (iconName) {
    case 'warning':
    case 'danger':
      return <ExclamationCircle {...props} />
    case 'success':
      return <CheckCircle {...props} />
    case 'chevron-up-down':
      return <ChevronUpDown {...props} />
    case 'chevron-up':
      return <ChevronUp {...props} />
    case 'check':
      return <Check {...props} />
    case 'info':
    default:
      return <InformationCircle {...props} />
  }
}
