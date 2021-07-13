import React from 'react';
import TopFooter from './TopFooter';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { fireEvent, render, screen, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('TopFooter', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<TopFooter />));
        screen.getByText('be in touch with us:');
        screen.getByAltText('instagram');
    });

    it('Handle Input Change', () => {
        render(renderWithProviders(<TopFooter />));
        const input = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(input, {target: {value: 'john@snow.com'}});
        expect(input).toHaveValue('john@snow.com');
    })

    it('Ask for email when input value is empty', async () => {
        render(renderWithProviders(<TopFooter />));
        const input = screen.getByPlaceholderText('Enter your email');
        const button = screen.getByText('join us');
        fireEvent.click(button);
        await waitForDomChange(() => {
            expect(input.placeholder).toBe('You must enter email');
        })
    })

    it('Disable input and button when user subscribed', async () => {
        render(renderWithProviders(<TopFooter />));
        const input = screen.getByPlaceholderText('Enter your email');
        const button = screen.getByText('join us');
        fireEvent.change(input, {target: {value: 'john@snow.com'}});
        fireEvent.click(button);
        await waitForDomChange(() => {
            expect(input.placeholder).toBe('Thank You for subscribe');
            expect(input).toBeDisabled();
            expect(button).toBeDisabled();
        })
    })
})