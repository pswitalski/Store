import React from 'react';
import BasketPrice from './BasketPrice';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('BasketPrice', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<BasketPrice price={2.56} currency="$" />));
        screen.getByText('$ 2.56');
    })

    it('Renders with no data', () => {
        render(renderWithProviders(<BasketPrice />));
        screen.getByText('0.00');
    })
})