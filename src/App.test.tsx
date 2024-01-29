import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders love in the air', () => {
  render(<App />);
  const linkElement = screen.getByText(/Love in the air/i);
  expect(linkElement).toBeInTheDocument();
});
