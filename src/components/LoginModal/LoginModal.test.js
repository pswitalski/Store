import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import LoginModal from './LoginModal';

jest.mock('./Login/Login.js', () => {
    return function DummyLogin() {
        return(
            <div>Login</div>
        )
    }
})

describe('LoginModal', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<LoginModal />));
    })
})