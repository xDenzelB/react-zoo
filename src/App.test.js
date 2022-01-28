import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome to The Zoo!!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to The Zoo!!/i);
  expect(linkElement).toBeInTheDocument();
});
