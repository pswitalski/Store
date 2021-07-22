import { describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import Controls from './Controls';

describe('Controls', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Controls />));
        screen.getByAltText('search');
        screen.getByAltText('currency');
        screen.getByAltText('login');
        screen.getByAltText('basket');
        screen.getByAltText('menu');
    });
})