// Greet ffunction should render Hello, and if the name is passed into the componeent 
// it should render Hello NamePassed

import { render, screen } from '@testing-library/react';
import Greed from './greed';

test('Greet render correctly', () => {
    render(<Greed />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test('Greet renders with text', () => {
    render(<Greed name='Kalume' />);
    const textElement = screen.getByText('Hello Kalume');
    expect(textElement).toBeInTheDocument();
});
  