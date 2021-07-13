import React from 'react';
import BasketCounter from './BasketCounter';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('BasketCounter', () => {
    it('Render the component', () => {
        render(renderWithProviders(<BasketCounter value={4} />));
        screen.getByText('4');
    })

    it('disable minus button when value is equal to 1', () => {
        render(renderWithProviders(<BasketCounter value={1} />));
        const minusButton = screen.getByAltText('minus');
        expect(minusButton).toBeDisabled();
    })

    it('enable minus button when value is higher than 1', () => {
        render(renderWithProviders(<BasketCounter value={2} />));
        const minusButton = screen.getByAltText('minus');
        expect(minusButton).not.toBeDisabled();
    })

    it('hide plus and minus buttons when prop checkout is true', () => {
        render(renderWithProviders(<BasketCounter value={5} checkout />));
        screen.getByText('5');
        const minusButton = screen.getByAltText('minus');
        const plusButton = screen.getByAltText('plus');
        expect(minusButton).not.toBeVisible();
        expect(plusButton).not.toBeVisible();
    })
})