import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Radio from '.';

describe('<Radio />', () => {
  it('should render the radio with label (black)', () => {
    const { container } = render(<Radio label="Radio" labelFor="check" value="anyValue" />);

    const label = screen.getByText(/radio/i);

    expect(label).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  })

  it('should render with label (white)', () => {
    render(<Radio label="Maça" labelColor="white" />);

    const label = screen.getByText(/maça/i)

    expect(label).toHaveStyle({ color: 'white'})
  })

  it('should render without label', () => {
    render(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  })

  it('should dispatch onCheck when radio changes', () => {

    const onCheck = jest.fn();

    render(<Radio 
      label="Radio"
      labelFor="Radio"
      value="anyValue"
      onCheck={onCheck}
    />)
    
    // 1 - Clicar no radio
    // 2 - Validar se chamei a função
    expect(onCheck).not.toHaveBeenCalled();
    
    userEvent.click(screen.getByLabelText('Radio'))

    expect(onCheck).toHaveBeenCalledTimes(1);

  })

  it('should be accessible with tab', () => {
    render(<Radio label='Radio' labelFor='Radio'/>)

    const radio = screen.getByLabelText(/radio/i);

    expect(document.body).toHaveFocus()

    userEvent.tab();

    expect(radio).toHaveFocus();

  })
})


