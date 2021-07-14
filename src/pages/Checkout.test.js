import React from 'react';
import Checkout from './Checkout';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Checkout Page', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Checkout />));
    })
})