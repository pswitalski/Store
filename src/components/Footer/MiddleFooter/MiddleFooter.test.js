import React from 'react';
import MiddleFooter from './MiddleFooter';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('MiddleFooter', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<MiddleFooter />));
        screen.getByText('categories');
        screen.getByText('Electronics');
        screen.getByText('Contact us');
        screen.getByText('store@store.com');
        screen.getByText('authors');
        screen.getByText('created by Paweł Świtalski');
    })
})