import React from 'react';
import Price from './Price';
import { render, screen } from '@testing-library/react';
import { renderWithProviders} from 'helpers/renderWithProviders';
import * as reactRedux from 'react-redux';
import { currency, currencyEur, currencyGbp, currencyPln } from 'mocks/currency';

describe('Price', () => {

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    beforeEach(() => {
        useSelectorMock.mockClear();
    });

    it('Renders the component', () => {
        useSelectorMock.mockReturnValue(currency);
        render(renderWithProviders(<Price price={100} />));
        screen.getByText('add to cart');
    })

    it('Renders the component with no price', () => {
        useSelectorMock.mockReturnValue(currency);
        render(renderWithProviders(<Price />));
        screen.getByText('add to cart');
        screen.getByText('$ 0.00');
    })

    it('Show properly usd value', () => {
        useSelectorMock.mockReturnValue(currency);

        render(renderWithProviders(<Price price={10} />));
        // screen.getByText(`€ ${(10 * currency.exchangeRate.eur).toFixed(2)}`);
        screen.getByText(`$ 10.00`);
    })

    it('Show properly eur value', () => {
        useSelectorMock.mockReturnValue(currencyEur);
        render(renderWithProviders(<Price price={10} />));
        screen.getByText(`€ ${(10 * currencyEur.exchangeRate.eur).toFixed(2)}`);
    })

    it('Show properly pln value', () => {
        useSelectorMock.mockReturnValue(currencyPln);
        render(renderWithProviders(<Price price={10} />));
        screen.getByText(`PLN ${(10 * currencyPln.exchangeRate.pln).toFixed(2)}`);
    })

    it('Show properly gbp value', () => {
        useSelectorMock.mockReturnValue(currencyGbp);
        render(renderWithProviders(<Price price={10} />));
        screen.getByText(`£ ${(10 * currencyGbp.exchangeRate.gbp).toFixed(2)}`);
    })
})