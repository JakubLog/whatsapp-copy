import { render, screen, fireEvent } from '../../test-utils';
import RegisterForm from '../components/organisms/RegisterForm/RegisterForm';

describe('Register protocol & UI test', () => {
  it('Renders component', () => {
    render(<RegisterForm />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Checks validation on front-end', async () => {
    render(<RegisterForm />);
    const email = screen.getByLabelText('Email');
    const name = screen.getByLabelText('Name');
    const pass = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button');
    const image = screen.getByLabelText('Image');
    expect(submit).toHaveTextContent('Ładowanie...' || 'Stwórz konto');
    fireEvent.change(email, { target: { value: 'test123@test.com' } });
    fireEvent.change(name, { target: { value: 'Test 123' } });
    submit.click();
    expect(await screen.findByText('Trzy pierwsze pola muszą być uzupełnione!')).toBeInTheDocument();
    fireEvent.change(pass, { target: { value: 'test123456' } });
    submit.click();
    setTimeout(() => expect(submit).toHaveTextContent('Coś nie tak...'), 2000);
    expect(await screen.findByText('Trzy pierwsze pola muszą być uzupełnione!')).not.toBeInTheDocument();
  });
});
