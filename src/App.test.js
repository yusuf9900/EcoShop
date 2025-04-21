import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EcoShop homepage title', () => {
  render(<App />);
  const titleElement = screen.getByText(/EcoShop : Consommez autrement, respectez la planète !/i);
  expect(titleElement).toBeInTheDocument();
});
