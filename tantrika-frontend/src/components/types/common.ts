export type Status = 'success' | 'danger' | 'warning' | 'info'
export type FuncitonalColor = 'primary' | 'secondary'
export type StaticColor = 'white' | 'black' | 'yellow' | 'blue' | 'green'
export type Color = Status | FuncitonalColor
export type InputStatus = 'info' | 'warning' | 'error'
export type Styles = 'solid' | 'outline'
type Unit = '%' | 'px' | 'rem' | 'em' | 'vh' | 'vh'
export type Size = `${number}${Unit}` | `calc(${string})`
export type TWColor = `text-${string}`
export type Placing = 'top' | 'bottom' | 'right' | 'left'
export type MediaBreakpoint = 'mobile' | 'tablet' | 'desktop'
export type TooltipVariant =
  | 'dark'
  | 'light'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
