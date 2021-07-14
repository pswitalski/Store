import React from 'react';
import LandingMain from './LandingMain';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('LandingMain', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<LandingMain title="title" subtitle="subtitle" />));
        screen.getByText('title');
        screen.getByText('subtitle');
    })
})