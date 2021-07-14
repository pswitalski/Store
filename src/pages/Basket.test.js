import React from 'react';
import Basket from './Basket';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Basket Page', () => {
    it("Renders the component", () => {
        render(renderWithProviders(<Basket />));
    })
})