import { render, screen } from '@testing-library/react'

describe('<Radio />', () => {
  it('should render the radio', () => {
    render(<Radio label="Radio" />);

    const label = screen.getByText(/radio/i);
    expect(label).toBeInTheDocument();

  })
})


