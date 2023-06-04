import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountryHighlights from './CountryHighlights';

describe('<CountryHighlights />', () => {
  test('it should mount', () => {
    render(<CountryHighlights />);
    
    const countryHighlights = screen.getByTestId('CountryHighlights');

    expect(countryHighlights).toBeInTheDocument();
  });
});