import React from 'react';
import RelatedProducts from './RelatedProducts';
import { render, screen, waitForElementToBeRemoved, waitForDomChange } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

import { jewelery } from 'mocks/jewelery';

describe('RelatedProducts', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<RelatedProducts />));
        screen.getByText('related products');
    });

    it('Show loading indicator', async () => {
        render(renderWithProviders(<RelatedProducts />));
        const loadingIndicator = screen.getByTestId('loading');
        await waitForDomChange(() => {
            expect(loadingIndicator).not.toBeInTheDocument();
        })
    })

    it('Shows related itmes', async() => {
        render(renderWithProviders(<RelatedProducts category="jewelery" />));
        await waitForDomChange(() => {
            screen.getByText(jewelery[0].title);
            screen.getByText(jewelery[1].title);
            screen.getByText(jewelery[2].title);
            screen.getByText(jewelery[3].title);
        })
    })

})