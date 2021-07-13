import React from 'react';
import MiddleFooter from './MiddleFooter';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import '@testing-library/jest-dom/extend-expect';

describe('MiddleFooter', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<MiddleFooter />));
        screen.getByText('categories');
        screen.getByText('Electronics');
        screen.getByText('Contact us');
        screen.getByText('store@store.com');
        screen.getByText('authors');
        screen.getByText('created by Paweł Świtalski');
    });

    it('Renders Links properly', () => {
        render(renderWithProviders(<MiddleFooter />));
        const jeweleryLink = screen.getByText('Jewelery');
        const mensLink = screen.getByText("Men's clothing");
        expect(jeweleryLink).toHaveAttribute('href', '/category/jewelery');
        expect(mensLink).toHaveAttribute('href', "/category/men's clothing");
    })
})