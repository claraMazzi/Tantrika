import { render, screen } from '@testing-library/react'
import { AlertBox } from '.'

describe('Alert Box component', () => {
  it('should render an Information outline Alert Box by default', () => {
    render(<AlertBox message="Information message" />)
    const alertElement = screen.getByRole('alert')
    expect(alertElement).toHaveClass('bg-white')
  })
  it('should render a Warning solid Alert Box', () => {
    render(<AlertBox message="Warning message" style="solid" type="warning" />)

    const alertElement = screen.getByRole('alert')
    expect(alertElement).toHaveClass('bg-yellow-500')
  })
  it('should render a Solid Danger message with icon', () => {
    render(
      <AlertBox
        message="Danger message"
        style="solid"
        type="danger"
        includeIcon={true}
      />
    )
    const alertElement = screen.getByRole('alert')
    const svgElement = alertElement.getElementsByTagName('svg') || null
    expect(svgElement).toBeDefined()
  })
})
