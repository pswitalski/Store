import React from 'react';
import ProductInfo from './ProductInfo';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('ProductInfo', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<ProductInfo id={4} />));
        screen.getByText('SKU:');
        screen.getByText('4');
    })
})