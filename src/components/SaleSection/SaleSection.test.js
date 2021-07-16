import React from 'react';
import SaleSection from './SaleSection';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('SaleSection', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<SaleSection />))
    })
})