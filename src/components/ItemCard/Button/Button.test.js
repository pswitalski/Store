import React from 'react';
import Button from './Button';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Button', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Button text="text" />));
        screen.getByText('text');
    })

    it('Disable button when prop disabled is true', () => {
        render(renderWithProviders(<Button text="text" disabled />));
        const button = screen.getByText('text');
        expect(button).toBeDisabled();
    })
})