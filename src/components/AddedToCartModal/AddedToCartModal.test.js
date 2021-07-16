import React from 'react';
import AddedToCartModal from './AddedToCartModal';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { describe, it} from '@jest/globals';


describe('AddedToCartModal', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<AddedToCartModal />));
        screen.getByText('Item added to cart');
    });
})