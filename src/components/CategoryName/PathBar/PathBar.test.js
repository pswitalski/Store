import React from 'react';
import PathBar from './PathBar';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('PathBar', () => {
    it ("Renders the component", () => {
        render(renderWithProviders(<PathBar />));
        const homeLink = screen.getByText('Home');
        expect(homeLink).toHaveAttribute('href', '/');
    })

    it('has the right paths in links', () => {
        render(renderWithProviders(<PathBar productCategory="jewelery" category="category" />));
        const productCategoryLink = screen.getByText('➤ jewelery');
        expect(productCategoryLink).toHaveAttribute('href', '/category/jewelery');
        screen.getByText('➤ category');
    })
})