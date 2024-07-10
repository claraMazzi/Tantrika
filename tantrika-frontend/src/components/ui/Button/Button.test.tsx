import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button component', () => {
  it('should render a primary button by default', () => {
    render(<Button>primary</Button>)
    const buttonElement = screen.getByText(/primary/i)
    expect(buttonElement).toHaveClass('bg-primary-default')
  })
  it('should render a disabled button', () => {
    render(<Button disabled={true}>disabled</Button>)
    const buttonElement = screen.getByText(/disabled/i)
    expect(buttonElement).toBeDisabled()
  })
  it('should render a button as a link with an href', () => {
    render(
      <Button Component="a" href="/">
        link
      </Button>
    )
    const buttonElement = screen.getByRole('link', { name: 'link' })
    expect(buttonElement).toHaveAttribute('href', '/')
  })
  it('should render a button as a submit input', () => {
    render(<Button Component="input" type="submit" value="Submit" />)
    const buttonElement = screen.getByDisplayValue('Submit')
    expect(buttonElement).toBeInTheDocument()
  })
})
