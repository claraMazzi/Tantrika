import { render, screen } from '@testing-library/react'
import { TruncatedContainer } from './TruncatedContainer'

describe('TruncatedContainer component', () => {
  it('should render a Truncated container', () => {
    render(
      <TruncatedContainer limit={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia
        voluptates minima placeat consectetur eos, deleniti officiis quas beatae
        quaerat magnam non ipsa, nihil facilis incidunt ab doloremque ex
        laborum!{' '}
      </TruncatedContainer>
    )
    const truncatedElement = screen.getByText(/Lorem/i)
    expect(truncatedElement).toHaveClass('text-black')
  })
})
