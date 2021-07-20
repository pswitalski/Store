import { describe, it, jest } from '@jest/globals';
import { fireEvent, render, screen, waitForDomChange, cleanup } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import Login from './Login';



jest.mock('./ExampleLoginData/ExampleLoginData.js', () => {
    return function DummyExampleLoginData() {
        return(
            <div>ExampleLoginData</div>
        )
    }
})

describe('Login', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('Renders the component', () => {
        render(renderWithProviders(<Login />));
    });

    it('ask for email and password when inputs are empty', async () => {
        render(renderWithProviders(<Login />));
        const loginButton = screen.getByText('login');
        fireEvent.click(loginButton);
        await screen.findByText('You must enter valid email.');
    });

    it('show error when email or password are invalid', async () => {
        fetch.mockResponseOnce(JSON.stringify('Email or password invalid.'));
        render(renderWithProviders(<Login />));
        const loginButton = screen.getByText('login');
        const emailInput = screen.getByPlaceholderText('Enter email');
        const passwordInput = screen.getByPlaceholderText('Your password');
        fireEvent.change(emailInput, {target: {value: 'john@snow.com'}});
        fireEvent.change(passwordInput, {target: {value: 'Password1'}});
        fireEvent.click(loginButton);

        await screen.findByText('Email or password invalid.');
    });

    it('handle positive response', async () => {
        fetch.mockResponseOnce(JSON.stringify({token: 'QpwL5tke4Pnpja7X9'}));
        const modal = render(renderWithProviders(<Login />));
        const loginButton = screen.getByText('login');
        const emailInput = screen.getByPlaceholderText('Enter email');
        const passwordInput = screen.getByPlaceholderText('Your password');
        fireEvent.change(emailInput, {target: {value: 'john@snow.com'}});
        fireEvent.change(passwordInput, {target: {value: 'Password1'}});
        fireEvent.click(loginButton);

        await screen.findByText('If you have an account, please log in.');
    })

})