import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
  </BrowserRouter>);
  // Act
  // ... nothing

  // Assert
  const helloElement = screen.getByText('home', { exact: true });
  expect(helloElement).toBeInTheDocument();
});
