import React from 'react';
import ProductPage from './ProductPage';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';


describe('ProductPage', () => {

    it('Renders the component', () => {
        render(renderWithProviders(<ProductPage />));
    })
})