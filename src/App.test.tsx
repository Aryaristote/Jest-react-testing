import { render, screen } from '@testing-library/react';
import App from './App';

//Having different functions
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render 3 list items', () => {
  render(<App />);
  const listitem = screen.getAllByRole("listitem");
  expect(listitem).toHaveLength(3);
  // expect(listitem.length).toBe(3); Another way
})

test('Render React logo image', () => {
  render(<App />);
  const image = screen.getByAltText(/React Logo/i);
  expect(image).toBeInTheDocument();
});

test('Render text by ID', () => {
  render(<App />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
})
test('Sum to be 5', () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("5");
})
