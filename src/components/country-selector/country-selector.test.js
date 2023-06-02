import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountrySelector from './CountrySelector';

describe('<CountrySelector />', () => {
  test('it should mount', () => {
    render(<CountrySelector />);
    
    const countrySelector = screen.getByTestId('CountrySelector');

    expect(countrySelector).toBeInTheDocument();
  });
});