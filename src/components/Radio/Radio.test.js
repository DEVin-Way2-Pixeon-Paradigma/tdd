import { render, screen } from '@testing-library/react'
import Radio from '.';

describe('<Radio />', () => {
  it('should render the radio', () => {
    render(<Radio label="Radio" />); 

    const label = screen.getByText(/radio/i);
    expect(label).toBeInTheDocument();

  })
})


