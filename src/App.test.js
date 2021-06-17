import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test('test case', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello piaic/i);
  expect(linkElement).toBeInTheDocument();
});