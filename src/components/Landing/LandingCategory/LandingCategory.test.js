import React from 'react';
import LandingCategory from './LandingCategory';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('LandingCategory', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<LandingCategory name="test" />));
        screen.getByText('test');
    })
})