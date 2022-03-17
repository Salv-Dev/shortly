import { render, screen } from '@testing-library/react';
import App from './App';

test('initial text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Url Shortening Interface/i);
  expect(linkElement).toBeInTheDocument();
});
