import React from 'react';
import ModalButton from './ModalButton';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('ModalButton', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<ModalButton text="text" />));
        screen.getByText('text');
    })

    it('Is disabled when disabled prop is true', () => {
        render(renderWithProviders(<ModalButton text="text" disabled />));
        const button = screen.getByText('text');
        expect(button).toBeDisabled();
    })

    it('Is dark when isDark prop is true', () => {
        render(renderWithProviders(<ModalButton text="text" isDark />));
        const button = screen.getByText('text');
        expect(button).toHaveStyle('background-color: #121212');
        expect(button).toHaveStyle('color: rgba(255, 255, 255, 0.9)');
    })
})