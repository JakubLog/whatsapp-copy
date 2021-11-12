import { render, screen, fireEvent } from '../../test-utils';
import LoginForm from '../components/organisms/LoginForm/LoginForm';

describe('Login protocol & UI test', () => {
  it('Renders component', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Checks validation on front-end', async () => {
    render(<LoginForm />);
    const email = screen.getByLabelText('Email');
    const pass = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button');
    fireEvent.change(email, { target: { value: 'test123@test.com' } });
    submit.click();
    expect(await screen.findByText('Wszystkie pola muszą być uzupełnione!')).toBeInTheDocument();
    fireEvent.change(pass, { target: { value: 'test123456' } });
    submit.click();
    expect(await screen.findByText('Wszystkie pola muszą być uzupełnione!')).not.toBeInTheDocument();
  });
});
