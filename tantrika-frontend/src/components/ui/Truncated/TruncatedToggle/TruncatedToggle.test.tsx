import { render, screen } from '@testing-library/react'
import { TruncatedToggle } from './TruncatedToggle'

describe('TruncatedToggle component', () => {
  it('should render a TruncatedToggle container', () => {
    render(
      <TruncatedToggle lessLabel="read less" limit={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia
        voluptates minima placeat consectetur eos, deleniti officiis quas beatae
        quaerat magnam non ipsa, nihil facilis incidunt ab doloremque ex
        laborum!{' '}
      </TruncatedToggle>
    )
    const truncatedElement = screen.getByText(/show more/i)
    expect(truncatedElement).toHaveClass('text-black')
  })
})
