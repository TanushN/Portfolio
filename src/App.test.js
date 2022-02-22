import React from 'react';
import { render } from '@testing-library/react';
import Home from "./components/home";

test('renders website', () => {
  render(<Home />);
});
