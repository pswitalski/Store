import { beforeEach, describe, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import ShoppingCartTotal from './ShoppingCartTotal';
import * as reactRedux from 'react-redux';

describe('ShoppingCartTotal', () => {

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    beforeEach(() => {
        useSelectorMock.mockClear();
    })

    it('Renders the component', () => {
        useSelectorMock
            .mockReturnValueOnce('usd')
            .mockReturnValueOnce({})
            .mockReturnValueOnce(0)
            .mockReturnValueOnce('$')

        render(renderWithProviders(<ShoppingCartTotal />));
        screen.getByText('Total')
        screen.getByText('$ 0.00')
    });


})