import { FormLabelProps } from './Label.type'

export const FormLabel = ({ children, htmlFor, className }: FormLabelProps) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
