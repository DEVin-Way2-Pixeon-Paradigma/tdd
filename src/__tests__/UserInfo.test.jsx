import { render, screen } from '@testing-library/react'
import UserInfo from '../components/UserInfo';

describe('<UserInfo />', () => {
  it('render the user name', () => {
    const user = { name: 'Danilo Sales'}

    // 1 - Renderizar o componente
    render(<UserInfo name={user.name} />);

    // 2 - Buscar o que quero validar
    const element = screen.getByText(/danilo/i);

    // 3 - Validar de fato
    expect(element).toBeInTheDocument();
    
  })
})