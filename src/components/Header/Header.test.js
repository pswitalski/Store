import React from 'react';
import Header from './Header';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
    test('renders component', () => {
        render(renderWithProviders(<Header />));
        screen.getByTestId('header');
    })
})