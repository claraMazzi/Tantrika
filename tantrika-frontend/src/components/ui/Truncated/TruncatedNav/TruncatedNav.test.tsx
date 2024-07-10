import { render, screen } from '@testing-library/react'
import { TruncatedNav } from './TruncatedNav'

describe('TruncatedNav component', () => {
  it('should render a TruncatedNav container', () => {
    render(
      <TruncatedNav href="#" moreLabel="read more" limit={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia
        voluptates minima placeat consectetur eos, deleniti officiis quas beatae
        quaerat magnam non ipsa, nihil facilis incidunt ab doloremque ex
        laborum!{' '}
      </TruncatedNav>
    )
    const truncatedElement = screen.getByText(/read more/i)
    expect(truncatedElement).toHaveClass('text-black')
  })
})
