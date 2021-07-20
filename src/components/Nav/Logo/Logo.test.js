import { describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Logo name='test' />));
        screen.getByText('test');
    })
})