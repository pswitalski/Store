import React from 'react';
import Header from './Header';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

test('renders component', () => {
    render(renderWithProviders(<Header />));
    screen.getByTestId('header');
})