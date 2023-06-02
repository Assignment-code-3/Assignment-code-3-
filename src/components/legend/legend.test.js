import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Legend from './Legend';

describe('<Legend />', () => {
  test('it should mount', () => {
    render(<Legend />);
    
    const legend = screen.getByTestId('Legend');

    expect(legend).toBeInTheDocument();
  });
});