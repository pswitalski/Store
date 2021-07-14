import React from 'react';
import Page404 from './Page404';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Page404 Page', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Page404 />));
        screen.getByText('that page does not exist');
    })
})