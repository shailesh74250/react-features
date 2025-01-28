import { render, screen } from '@testing-library/react'
import Button from './index';

describe('Button unit test', () => {
  const handleOnClick = jest.fn();
  beforeEach(() => {
    render(<Button label='submit' onClick={handleOnClick} />)
  })
  it('should exist in the DOM', () => {
    expect(screen.getByText('submit')).toBeInTheDocument();
  })
  it.skip('should have onClick handler', () => {
    
  })
  it.skip('should have label', () => {
    
  })
  it.skip('should have disabled prop', () => {
    
  })
  it.skip('should have varient prop', () => {
    
  })
})