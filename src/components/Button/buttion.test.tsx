import { render, screen } from '@testing-library/react'
import Button from './index';

describe('Button unit test', () => {
  const handleOnClick = jest.fn();
  it('should exist in the DOM', () => {
    render(<Button label='submit' onClick={() => {}} />)
    const buttonElement = screen.getByText('submit');
    expect(buttonElement).toBeInTheDocument();
  })
  it('should have onClick handler', () => {
    // render button
    render(<Button label='submit' onClick={handleOnClick} />);
    // get the button
    const btn = screen.getByText('submit')
    // click on button
    btn.click()
    // check handleOnClick should call one time
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
  it('should have disabled prop', () => {
    // render button
    render(<Button label='submit' onClick={handleOnClick} disabled={false} />);
    // get the button
    const btn = screen.getByText('submit')
    // check button should enabled
    expect(btn).not.toBeDisabled();
  })
})