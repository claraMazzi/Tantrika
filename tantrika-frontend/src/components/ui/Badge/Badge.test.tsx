import { render, screen } from '@testing-library/react'
import { Badge } from '.'

describe('Badge component', () => {
  it('should render a medium badge by default', () => {
    render(<Badge label="white badge" color="blue" />)
    const badgeElement = screen.getByText(/white/i).closest('div')
    expect(badgeElement).toHaveClass('text-sm')
  })
  it('should render a small badge', () => {
    render(<Badge label="white badge" color="blue" size="sm" />)
    const badgeElement = screen.getByText(/white/i).closest('div')
    expect(badgeElement).toHaveClass('text-xs')
  })
  it('should render a large badge', () => {
    render(<Badge label="white badge" color="blue" size="lg" />)
    const badgeElement = screen.getByText(/white/i).closest('div')
    expect(badgeElement).toHaveClass('text-base')
  })
})
