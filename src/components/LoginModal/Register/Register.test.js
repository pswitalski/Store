import { describe, expect, jest } from '@jest/globals';
import { cleanup, fireEvent, render, screen, waitForDomChange, waitForElement, waitFor } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';


import Register from './Register';

describe('Register', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('Renders the component', () => {
        render(renderWithProviders(<Register />));
    });

    it('ask for data when inputs are empty', async () => {
        render(renderWithProviders(<Register />));
        const registerButton = screen.getByText('register');
        fireEvent.click(registerButton);
        await screen.findByText('Username too short.');

    });

    it('show api error', async () => {
        fetch.mockResponseOnce(JSON.stringify('Something went wrong. Try again.'));
        render(renderWithProviders(<Register />));
        const registerButton = screen.getByText('register');
        const userNameInput = screen.getByPlaceholderText('Enter username');
        const passwordInput = screen.getByPlaceholderText('Your password');
        const repeatPasswordInput = screen.getByPlaceholderText('Repeat password');
        const emailInput = screen.getByPlaceholderText('Enter your email');
        screen.getByText('Create new account.');

        fireEvent.change(userNameInput, {target: {value: 'UserUser'}});
        fireEvent.change(passwordInput, {target: {value: 'Password1'}});
        fireEvent.change(repeatPasswordInput, {target: {value: 'Password1'}});
        fireEvent.change(emailInput, {target: {value: 'john@snow.com'}});
        fireEvent.click(registerButton);

        await screen.findByText('Something went wrong. Try again.');
    });

    it('handle positive response', async () => {
        fetch.mockResponseOnce(JSON.stringify('positive'));
        render(renderWithProviders(<Register />));
        const registerButton = screen.getByText('register');
        const userNameInput = screen.getByPlaceholderText('Enter username');
        const passwordInput = screen.getByPlaceholderText('Your password');
        const repeatPasswordInput = screen.getByPlaceholderText('Repeat password');
        const emailInput = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(userNameInput, {target: {value: 'UserUser'}});
        fireEvent.change(passwordInput, {target: {value: 'Password1'}});
        fireEvent.change(repeatPasswordInput, {target: {value: 'Password1'}});
        fireEvent.change(emailInput, {target: {value: 'john@snow.com'}});
        fireEvent.click(registerButton);

        await screen.findByText('Create new account.');
    });

    it('show error when passwords not match', async () => {
        render(renderWithProviders(<Register />));
        const registerButton = screen.getByText('register');
        const userNameInput = screen.getByPlaceholderText('Enter username');
        const passwordInput = screen.getByPlaceholderText('Your password');
        const repeatPasswordInput = screen.getByPlaceholderText('Repeat password');
        const emailInput = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(userNameInput, {target: {value: 'UserUser'}});
        fireEvent.change(passwordInput, {target: {value: 'Password1'}});
        fireEvent.change(repeatPasswordInput, {target: {value: 'Password2'}});
        fireEvent.change(emailInput, {target: {value: 'john@snow.com'}});
        fireEvent.click(registerButton);

        await screen.findByText('Passwords must be the same.');
    })

})