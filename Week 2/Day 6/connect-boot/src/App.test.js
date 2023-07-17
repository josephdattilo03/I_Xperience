import { render, screen } from '@testing-library/react';
import App from './App';
import { StrictMode } from 'react';

test('renders learn react link', () => {
  render(
  <StrictMode>
    <App />
  </StrictMode>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
