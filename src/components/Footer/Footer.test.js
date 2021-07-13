import React from 'react';
import Footer from './Footer';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Footer', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Footer />));
    })
})