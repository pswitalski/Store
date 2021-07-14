import React from 'react';
import RelatedProducts from './RelatedProducts';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('RelatedProducts', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<RelatedProducts />));
        screen.getByText('related products');
    })

    it('Show loading indicator', async () => {
        render(renderWithProviders(<RelatedProducts />));
        const loadingIndicator = screen.getByTestId('loading');
        await waitForElementToBeRemoved(() => loadingIndicator);
    })

})