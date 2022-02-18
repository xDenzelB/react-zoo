import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
test('Welcome to The Zoo!!', () => {
  render(<App />);
  // const setIsOpen = screen.getByText(/We Are OPEN! 😃/i);
  const openBtn = screen.getByText(/Open!/i);
  fireEvent.click(openBtn);
  const setIsOpen = screen.getByText(/We Are OPEN! 😃/i);
  expect(setIsOpen).toBeInTheDocument();
});
test('renders a dragon', async () => {
  render(<App />);
  const dragonBtn = screen.getByRole('button', { name: 'Dragon' });
  fireEvent.click(dragonBtn);
  const zooEl = await screen.findByText('🐉');
  expect(zooEl.textContent).toBe('🐉');
});

