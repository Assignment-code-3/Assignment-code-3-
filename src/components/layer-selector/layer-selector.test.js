import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LayerSelector from './LayerSelector';

describe('<LayerSelector />', () => {
  test('it should mount', () => {
    render(<LayerSelector />);
    
    const layerSelector = screen.getByTestId('LayerSelector');

    expect(layerSelector).toBeInTheDocument();
  });
});